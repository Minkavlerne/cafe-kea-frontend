import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <HomePage />
    </div>
  );
}
