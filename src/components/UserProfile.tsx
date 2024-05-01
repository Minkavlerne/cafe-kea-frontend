import { useEffect, useState } from "react";
import { getUserByEmail } from "../services/apiFacade";

export default function UserProfile() {
    useEffect(() => {
        getUserByEmail(localStorage.getItem("email")!).then((data) => console.log(data));
    });

    return (
        <div className="p-[100px]">
            <h1>User Profile</h1>
            <p>Email</p>
            <p>Password (button) change</p>
            <p>Logout</p>
            <p>Delete my account</p>
        </div>
    );
}
