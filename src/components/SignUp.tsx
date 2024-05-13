import { useState } from "react";
import picture from "../assets/kaffe.png";
import { useNavigate } from "react-router-dom";
import { User } from "../services/entityFacade";
import { addUser } from "../services/apiFacade";

const formUser = {
    email: "",
    password: "",
};

export default function SignUp() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [user, setUser] = useState<User>(formUser);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user.email.endsWith("kea.dk") || user.email.endsWith("cphbusiness.dk")) {
            addUser(user).then(() => setShowModal(true));

            setTimeout(() => {
                setShowModal(false);
                navigate("/login");
            }, 1000);
        } else {
            window.alert("Email must end with kea.dk or cphbusiness.dk");
        }
    };

    return (
        <>
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
            {showModal && (
                <>
                    <div className="fixed inset-0 z-50 bg-black opacity-50"></div>
                    <div id="successModal" tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-modal md:h-full">
                        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                                    <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="sr-only">Success</span>
                                </div>
                                <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully signed up.</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
