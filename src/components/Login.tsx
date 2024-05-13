import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthProvider";
import { User } from "../services/authFacade";
import picture from "../assets/kaffekop.png";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const [error, setError] = useState(null);

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData) as unknown as User;

        setError(null);
        console.log(error);
        console.log(user);
        auth.signIn(user)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <div className="min-h-screen inset-0 flex items-center justify-center" style={{ backgroundImage: `url(${picture})`, backgroundSize: "cover", backgroundPosition: "cover" }}>
            <form className="bg-background-kea shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md" onSubmit={handleSubmit}>
                <h1 className="block text-white-700 text-center font-bold mb-2">Login</h1>
                <div className="text-center">
                    Email: <input className="mt-2 shadow apearance-none border rounded w-half block mx-auto" type="text" name="email" value={user.email} onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))} required />
                </div>
                <div className="text-center">
                    Password: <input className="mt-2 shadow appearance-none border rounded w-half block mx-auto" type="password" name="password" value={user.password} onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))} required />
                </div>
                <div className="text-center mt-4">
                    <button className="bg-filler-kea hover:bg-text-kea shadow hover:text-white font-bold py-2 px-4 rounded" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
