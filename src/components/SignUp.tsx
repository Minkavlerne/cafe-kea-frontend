import { useState } from "react";
import picture from "../assets/61f8D9QOOhWtzfXN43Bg--1--hfoyu.jpg";
import { useNavigate } from "react-router-dom";
import { User } from "../services/entityFacade";
import { addUser } from "../services/apiFacade";

const formUser = {
    email: "",
    password: "",
};

export default function SignUp() {
    const [user, setUser] = useState<User>(formUser);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user.email.endsWith("kea.dk") || user.email.endsWith("cphbusiness.dk")) {
            addUser(user);

            window.alert("User created");

            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } else {
            window.alert("Email must end with kea.dk or cphbusiness.dk");
        }
    };

    return (
        <div className="min-h-screen inset-0 flex items-center justify-center" style={{ backgroundImage: `url(${picture})`, backgroundSize: "cover", backgroundPosition: "cover" }}>
            <form className="bg-background-kea shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                <h1 className="block text-white-700 text-center font-bold mb-2">Sign Up</h1>
                <div className="text-center">
                    Email: <input className="mt-2 shadow apearance-none border rounded w-half block mx-auto" type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                </div>
                <div className="text-center">
                    Password: <input className="mt-2 shadow appearance-none border rounded w-half block mx-auto" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                </div>
                <div className="text-center mt-4">
                    <button className="bg-filler-kea hover:bg-text-kea shadow hover:text-white font-bold py-2 px-4 rounded" type="submit" onClick={handleSubmit}>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}
