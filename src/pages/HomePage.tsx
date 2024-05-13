import picture from "../assets/Coffee_Ticket.png";
import Menu from "../components/Menu";
import { useAuth } from "../security/AuthProvider";
import UserHome from "./UserHome";

export default function HomePage() {
    const auth = useAuth();

    return (
        <>
            {auth.isLoggedIn() && <UserHome />}
            {!auth.isLoggedIn() && (
                <div className="min-h-screen flex flex-col items-center bg-background-kea pt-[70px]">
                    <img className="object-cover w-screen top-[70px]" src={picture} alt="" />
                    <div className="w-2/6 mt-auto mb-8 z-0">
                        <Menu />
                    </div>
                </div>
            )}
        </>
    );
}
