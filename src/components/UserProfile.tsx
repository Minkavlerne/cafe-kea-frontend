import { useEffect, useState } from "react";
import { getUserByEmail } from "../services/apiFacade";

export default function UserProfile() {
    // const [user, setUser] = useState(null);

    useEffect(() => {
        getUserByEmail(localStorage.getItem("email")!).then((data) => console.log(data));
    }, []);

    return (
        <div className="p-24 bg-background-kea min-h-screen">
            <div className="bg-white bg-opacity-15 p-10 rounded-lg shadow-lg">
                <h1 className="font-bold text-2xl pb-8">User Profile</h1>
                <p className="pb-8 text-lg">You are signed in with:</p>
                <p className="pb-8 text-lg">Password (button) Change</p>
                <p className="pb-8 text-lg">Logout</p>
                <p className="text-red-500 hover:text-red-700 cursor-pointer">Delete my account</p>
            </div>
        </div>
    );
}
