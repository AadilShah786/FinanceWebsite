import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import NavDash from './NavDash';
import Leftbar from './LeftBar';
import Stat from './Stat';
import Table from './Table';
import Footer from './Footer';

function Dashboard() {
    const { isLoggedIn, userProfileImage, handleLogout } = useContext(AuthContext);


    return (
        <>
            <div className="min-h-screen bg-gray-50/50">
                <Leftbar />

                <div className="p-4 xl:ml-80">
                    <NavDash />


                    <div className="mt-12">
                        <Stat />
                        <Table />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Dashboard;