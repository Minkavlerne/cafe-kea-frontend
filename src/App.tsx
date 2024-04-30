import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";

export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/settings" element={<UserProfile />} />
            </Routes>
        </div>
    );
}
