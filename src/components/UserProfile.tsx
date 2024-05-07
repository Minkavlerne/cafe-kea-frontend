import { useState } from "react";

import Logout from "../security/Logout";
import { deleteUserByEmail, changePassword } from "../services/apiFacade";

export default function UserProfile() {
    const email = localStorage.getItem("email");
    const [changeClicked, setChangeClicked] = useState(false);
    const [isLoggedOut, setIsloggedOut] = useState(false);
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        setIsloggedOut(true);
    };

    function handleDeleteAccount() {
        if (email) {
            deleteUserByEmail(email);
        }
        setShowModal(true);
        setIsloggedOut(true);
    }

    if (isLoggedOut) {
        return <Logout />;
    }

    function handlePassword() {
        setChangeClicked(true);
        if (changeClicked) {
            console.log(changeClicked);
        }
    }
    function handleSubmit() {
        console.log("Password changed");
        if (email && password) {
            console.log(email);
            changePassword(password);
            setChangeClicked(false);
        }
    }

    return (
        <>
            <div className="p-24 bg-background-kea min-h-screen">
                <div className="bg-white bg-opacity-15 p-10 rounded-lg shadow-lg">
                    <h1 className="font-bold text-2xl pb-8">User Profile</h1>
                    <p className="pb-8 text-lg">You are signed in with: {localStorage.getItem("email")}</p>
                    <div className="flex justify-between items-center">
                        <p className=" text-lg">Password: ***** </p>
                        {changeClicked ? (
                            <div>
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                                <button className="bg-filler-kea hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={handleSubmit}>
                                    Save
                                </button>
                                <button className="bg-filler-kea hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={() => setChangeClicked(false)}>
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <button className="bg-filler-kea hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={handlePassword}>
                                Change
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col items-start">
                        <button className="bg-filler-kea hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-4 cursor-pointer" onClick={handleLogout}>
                            Logout
                        </button>
                        <button className="bg-red-600 text-white hover:text-red-700 cursor-pointer py-2 px-4 text-lg rounded" onClick={() => setShowModal(true)}>
                            Delete my account
                        </button>
                    </div>
                </div>
            </div>
            {showModal && (
                <>
                    <div className="fixed inset-0 z-50 bg-black opacity-50"></div>
                    <div id="confirmModal" tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center">
                        <div className="relative p-4 w-full max-w-md h-full md:h-auto mx-auto">
                            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                <button
                                    type="button"
                                    className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <h2 className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete your account?</h2>
                                <div className="flex justify-center items-center space-x-4">
                                    <button
                                        type="button"
                                        className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                        onClick={() => setShowModal(false)}
                                    >
                                        No, cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                                        onClick={handleDeleteAccount}
                                    >
                                        Yes, I'm sure
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
