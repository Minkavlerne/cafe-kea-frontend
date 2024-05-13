import { useAuth } from "../security/AuthProvider";
import { IoMdHome } from "react-icons/io";
import { useEffect, useState } from "react";
import ActiveNavLink from "./ActiveNavLink";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const auth = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 20;
            if (show !== isScrolled) {
                setIsScrolled(show);
            }
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);

    return (
        <>
            <nav className={`${isScrolled ? "bg-[#E1BB80]" : "bg-transparent"} transition-colors duration-250 w-screen h-[70px] z-10 fixed`}>
                <ul className="flex items-center justify-around py-4">
                    {/* Not logged in navbar */}
                    {!auth.isLoggedIn() && (
                        <>
                            <li>
                                <ActiveNavLink to="/">
                                    <IoMdHome size={40} />
                                </ActiveNavLink>
                            </li>
                            <li>
                                <ActiveNavLink to="/volunteer">Become Volunteer</ActiveNavLink>
                            </li>
                            <li>
                                <ActiveNavLink to="/login">Login</ActiveNavLink>
                            </li>
                            <li>
                                <ActiveNavLink to="/signup">Signup</ActiveNavLink>
                            </li>
                        </>
                    )}

                    {/* Logged in navbar */}
                    {auth.isLoggedIn() && (
                        <>
                            <li>
                                <ActiveNavLink to="/">Tickets</ActiveNavLink>
                            </li>
                            <li>
                                <ActiveNavLink to="/receipts">Receipts</ActiveNavLink>
                            </li>
                            <li>
                                <ActiveNavLink to="/stats">Stats</ActiveNavLink>
                            </li>
                            <li>
                                <ActiveNavLink to="/settings">Settings</ActiveNavLink>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>
    );
}
