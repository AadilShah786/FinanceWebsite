import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { AuthContext } from '../../AuthProvider'; // Adjust the import based on your file structure


function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const auth = getAuth();
    const { handleGoogleSignIn } = useContext(AuthContext);

    // const handleGoogleSignIn = () => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             // Handle successful login
    //             const user = result.user;
    //             // setIsLoggedIn(true);
    //             setUserProfileImage(user.photoURL);
    //             onLogin();
    //             window.history.back();
    //             console.log(result);
    //         })
    //         .catch((error) => {
    //             // Handle errors
    //             console.error(error);
    //         });
    // };

    const handleGithubSignIn = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // Handle successful login
                console.log(result);
            })
            .catch((error) => {
                // Handle errors
                console.error(error);
            });
    };

    const handleTwitterSignIn = () => {
        const provider = new TwitterAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // Handle successful login
                console.log(result);
            })
            .catch((error) => {
                // Handle errors
                console.error(error);
            });
    };

    return (
        <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-screen flex flex-col items-center justify-center  px-4">
            <div className="flex flex-col items-center justify-center w-full md:w-4/12 ">
                <div className="bg-white shadow rounded w-full p-10 
                xs:p-6">
                    <p tabIndex="0" className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                        Login to your account
                    </p>
                    <p tabIndex="0" className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
                        >
                            Sign up here
                        </a>
                    </p>
                    <button
                        aria-label="Continue with Google"
                        role="button"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
                        onClick={handleGoogleSignIn}
                    >
                        <FcGoogle className="w-6 h-6" />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>
                    {/* <button
                        aria-label="Continue with Github"
                        role="button"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
                        onClick={handleGithubSignIn}
                    >
                        <FaGithub className="w-6 h-6" />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
                    </button> */}
                    {/* <button
                        aria-label="Continue with Twitter"
                        role="button"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
                        onClick={handleTwitterSignIn}
                    >
                        <FaTwitter className="w-6 h-6" />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
                    </button> */}
                    <div className="w-full flex items-center justify-between py-5">
                        <div className="w-full flex items-center justify-center">
                            <div className="h-px w-2/5 bg-gray-400"></div>
                            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                            <div className="h-px w-2/5 bg-gray-400"></div>

                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                            Email
                        </label>
                        <input
                            aria-labelledby="email"
                            type="email"
                            className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                        />
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="pass" className="text-sm font-medium leading-none text-gray-800">
                            Password
                        </label>
                        <div className="relative flex items-center justify-center">
                            <input
                                id="pass"
                                type={showPassword ? "text" : "password"}
                                className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            />
                            <div className="absolute right-0 mt-2 mr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button
                            role="button"
                            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                        >
                            Login to my account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
