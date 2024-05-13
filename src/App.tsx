import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SignUp from "./components/SignUp";
import LoginPage from "./components/Login";
import UserProfile from "./components/UserProfile";
import Logout from "./security/Logout";
import ReceiptsPage from "./pages/ReceiptsPage";
import StatsPage from "./pages/StatsPage";
import VolunteerPage from "./pages/VolunteerPage";

export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/settings" element={<UserProfile />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/receipts" element={<ReceiptsPage />} />
                <Route path="/stats" element={<StatsPage />} />
                <Route path="*">"404 Not Found"</Route>
                <Route path="/volunteer" element={<VolunteerPage />} />
            </Routes>
        </div>
    );
}
