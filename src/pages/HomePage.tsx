import About from "../components/About";
import OpeningHours from "../components/OpeningHours";
import picture from "../assets/61f8D9QOOhWtzfXN43Bg--1--hfoyu.jpg";
import Menu from "../components/Menu";
import { useAuth } from "../security/AuthProvider";
import UserHome from "./UserHome";

export default function HomePage() {
    const auth = useAuth();

    return (
        <>
            {auth.isLoggedIn() && <UserHome />}
            {!auth.isLoggedIn() && (
                <div className="min-h-screen flex flex-col items-center bg-background-kea">
                    {/* <img className="object-cover h-4/6 w-screen" src={picture} alt="" /> */}
                    <div className="absolute inset-0 z-0 w-full max-h-[80%]" style={{ backgroundImage: `url(${picture})`, backgroundSize: "cover", backgroundPosition: "cover" }}></div>
                    <div className="relative">
                        <section className="relative mb-16 z-0 py-8">
                            <div className="grid mx-auto pt-40 p-8 grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                                <div className="mx-auto max-w-lg lg:mx-0 ltr:lg:text-left rtl:lg:text-right hidden lg:block">
                                    <About />
                                </div>
                                <div>
                                    <OpeningHours />
                                </div>
                                {/* This is very hacky to change the position of About and OpeningHours incase the display is smaller to only show one column */}
                                <div className="block lg:hidden">
                                    <About />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="w-2/6 mt-auto mb-8 z-0">
                        <Menu />
                    </div>
                </div>
            )}
        </>
    );
}
