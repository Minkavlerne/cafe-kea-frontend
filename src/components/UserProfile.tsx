import { useEffect, useState } from 'react';
import { getUserByEmail } from '../services/apiFacade';


export default function UserProfile() { 
    useEffect(() => {
        getUserByEmail(localStorage.getItem("email")!).then((data) => console.log(data));
    })

    return (
        <div>
            <h1>User Profile</h1>
        </div>
    );
}