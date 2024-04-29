import { useState } from "react";

interface User {
  email: string;
  password: string;
}

const formUser = {
  email: "",
  password: "",
};

export default function SignUp() {
  const [user, setUser] = useState<User>(formUser);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = await fetch("http://localhost:8080/api/user-with-role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(newUser);
  };

  return (
    <div>
      <h1 className="block text-gray-700 text-lg font-bold mb-2">Sign Up</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        Email: <input type="text" placeholder="Email" required />
        Password: <input type="password" required />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
