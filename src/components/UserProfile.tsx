import { useState } from "react";

import Logout from "../security/Logout";

export default function UserProfile() {
    // const [user, setUser] = useState(null);

    const [isLoggedOut, setIsloggedOut] = useState(false);

    const handleLogout = () => {
        setIsloggedOut(true);
    };
    if (isLoggedOut) {
        return <Logout />;
    }

    return (
        <div className="p-24 bg-background-kea min-h-screen">
            <div className="bg-white bg-opacity-15 p-10 rounded-lg shadow-lg">
                <h1 className="font-bold text-2xl pb-8">User Profile</h1>
                <p className="pb-8 text-lg">You are signed in with: {localStorage.getItem("email")}</p>
                <div className="flex justify-between items-center">
                    <p className=" text-lg">Password: ***** </p>
                    <button className="bg-filler-kea hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Change</button>
                </div>
                <button className="pb-8 pt-8 text-lg text-black-500 hover:text-red-700 cursor-pointer" onClick={handleLogout}>
                    Logout
                </button>
                <p className="text-red-500 hover:text-red-700 cursor-pointer text-lg">Delete my account</p>
            </div>
        </div>
    );
}
