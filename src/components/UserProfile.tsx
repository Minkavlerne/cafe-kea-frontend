import { useEffect, useState } from "react";
import { getUserByEmail } from "../services/apiFacade";
import Logout from "../security/Logout";

export default function UserProfile() {

    // const [user, setUser] = useState(null);

    const [isLoggedOut, setIsloggedOut] = useState(false);


    useEffect(() => {
        getUserByEmail(localStorage.getItem("email")!).then((data) => console.log(data));
    }, []);

    const handleLogout = () => {
        setIsloggedOut(true);
    }
    if (isLoggedOut) {
        return <Logout />;
    }

    return (
        <div className="p-24 bg-background-kea min-h-screen">
            <div className="bg-white bg-opacity-15 p-10 rounded-lg shadow-lg">
                <h1 className="font-bold text-2xl pb-8">User Profile</h1>
                <p className="pb-8 text-lg">You are signed in with:</p>
                <p className="pb-8 text-lg">Password (button) Change</p>
                <button className="pb-8 text-lg" onClick={handleLogout}>Logout</button>
                <p className="text-red-500 hover:text-red-700 cursor-pointer">Delete my account</p>
            </div>
        </div>
    );
}
