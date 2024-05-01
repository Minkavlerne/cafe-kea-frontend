import { useEffect, useState } from "react";
import { getUserByEmail } from "../services/apiFacade";
import Logout from "../security/Logout";

export default function UserProfile() {
    const [isLoggedOut, setIsloggedOut] = useState(false);

    useEffect(() => {
        getUserByEmail(localStorage.getItem("email")!).then((data) => console.log(data));
    });

    const handleLogout = () => {
        setIsloggedOut(true);
    }
    if (isLoggedOut) {
        return <Logout />;
    }

    return (
        <div className="p-[100px]">
            <h1>User Profile</h1>
            <p>Email</p>
            <p>Password (button) change</p>
            <button onClick={handleLogout}>Logout</button>
            <p>Delete my account</p>
        </div>
    );
}
