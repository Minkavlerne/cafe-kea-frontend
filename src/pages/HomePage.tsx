import About from "../components/About";
import OpeningHours from "../components/OpeningHours";
import picture from "../assets/61f8D9QOOhWtzfXN43Bg--1--hfoyu.jpg";
import Menu from "../components/Menu";

export default function HomePage() {
    return (
        <>
            <div className="min-h-screen relative bg-background-kea">
                <img className="object-cover h-4/6 w-screen absolute" src={picture} alt="" />
                <div className="absolute left-10 bottom-[2rem] w-3/5">
                    <About />
                </div>
                <div className="absolute right-20 bottom-28">
                    <OpeningHours />
                </div>
                <div className="absolute left-10 top-[720px] w-2/6">
                    <Menu />
                </div>
            </div>
        </>
    );
}
