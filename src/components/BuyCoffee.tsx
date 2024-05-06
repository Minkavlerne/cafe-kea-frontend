import { LuCoffee, LuTicket } from "react-icons/lu";
import { useState, useEffect } from "react";
import BuyMenu from "./BuyMenu";
import { Coffee } from "../services/entityFacade";
import { getAllCoffee } from "../services/apiFacade";

export default function BuyCoffee() {
    const [ticketsClicked, setTicketsClicked] = useState<boolean>(false);
    const [coffeeClicked, setCoffeeClicked] = useState<boolean>(false);
    const [coffees, setCoffees] = useState<Coffee[]>([]);

    useEffect(() => {
        getAllCoffee().then((data) => {
            setCoffees(data);
        });
    }, []);

    return (
        <>
            {ticketsClicked && <BuyMenu title="Buy Tickets" />}
            {coffeeClicked && <BuyMenu title="Buy Coffee" coffees={coffees} />}
            {!ticketsClicked && !coffeeClicked && (
                <div className="pt-14 pl-8">
                    <h1 className="font-bold py-7 text-center">My Tickets</h1>
                    <p className="text-center pb-[10rem]">Here you can buy coffee & tickets</p>
                    <div className="flex flex-row justify-center gap-10">
                        <button onClick={() => setTicketsClicked(true)} className="flex flex-col items-center justify-center px-5 bg-filler-kea hover:bg-green-700 text-white font-bold py-2 rounded">
                            <LuTicket size={50} />
                            Buy tickets
                        </button>
                        <button onClick={() => setCoffeeClicked(true)} className="flex flex-col items-center justify-center px-5 bg-filler-kea hover:bg-green-700 text-white font-bold py-2 rounded">
                            <LuCoffee size={50} />
                            Buy one drink
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
