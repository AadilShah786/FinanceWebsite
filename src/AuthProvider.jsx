import React, { createContext, useState, useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth, firestore } from './firebase'; // Adjust the import based on your file structure
import { doc, setDoc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        setIsLoggedIn(true);
        setUserProfileImage(user.photoURL);

        // Check if user document exists in Firestore
        const userRef = doc(firestore, 'users', user.uid);
        const docSnap = await getDoc(userRef);
       
        if (!docSnap.exists()) {
          // Create a new user document if it doesn't exist
          await setDoc(userRef, {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          });
        } else {
          // If user document exists, set user data
          setUserData(docSnap.data());
        }
         // Check if the user is an admin
         const adminRef = doc(firestore, 'admin', user.uid);
         const adminDoc = await getDoc(adminRef);
         if (adminDoc.exists()) {
           setIsAdmin(true);
           console.log("admin loggin dude"+ isAdmin)
         }else{
          console.log("user loggin dude"+ isLoggedIn)
         }
        window.history.back();
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setUserProfileImage(null);
      setUserData(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserProfileImage(user.photoURL);

        // Fetch user data from Firestore
        const userRef = doc(firestore, 'users', user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
         // Check if the user is an admin
         const adminRef = doc(firestore, 'admin', user.uid);
         const adminDoc = await getDoc(adminRef);
         if (adminDoc.exists()) {
           setIsAdmin(true);
         }
      } else {
        setIsLoggedIn(false);
        setUserProfileImage(null);
        setUserData(null);
        setIsAdmin(false);

      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userProfileImage, userData, handleGoogleSignIn, handleLogout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
