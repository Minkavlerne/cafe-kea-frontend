import { useState } from "react";

import Logout from "../security/Logout";
import { deleteUserByEmail, changePassword } from "../services/apiFacade";

export default function UserProfile() {
  const email = localStorage.getItem("email");
  const [changeClicked, setChangeClicked] = useState(false);
  const [isLoggedOut, setIsloggedOut] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogout = () => {
    setIsloggedOut(true);
  };

  function handleDeleteAccount() {
    if (email) {
      deleteUserByEmail(email);
    }
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
        <button className="pb-8 pt-8 text-lg text-black-500 hover:text-red-700 cursor-pointer" onClick={handleLogout}>
          Logout
        </button>
        <p className="text-red-500 hover:text-red-700 cursor-pointer text-lg" onClick={handleDeleteAccount}>
          Delete my account
        </p>
      </div>
    </div>
  );
}
