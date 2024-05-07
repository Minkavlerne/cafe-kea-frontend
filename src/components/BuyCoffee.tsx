import { LuCoffee, LuTicket } from "react-icons/lu";
import { useState, useEffect } from "react";
import BuyMenu from "./BuyMenu";
import { Coffee, Ticket } from "../services/entityFacade";
import { getAllCoffee, getAllTickets } from "../services/apiFacade";
import MyTickets from "./MyTickets";

export default function BuyCoffee() {
    const [ticketsClicked, setTicketsClicked] = useState<boolean>(false);
    const [coffeeClicked, setCoffeeClicked] = useState<boolean>(false);
    const [coffees, setCoffees] = useState<Coffee[]>([]);
    const [tickets, setTickets] = useState<Ticket[]>([]);

    useEffect(() => {
        getAllCoffee().then((data) => {
            setCoffees(data);
        });
        getAllTickets().then((data) => {
            setTickets(data);
        });
    }, []);

    function goBack() {
        setTicketsClicked(false);
        setCoffeeClicked(false);
    }

    return (
        <>
            {ticketsClicked && <BuyMenu title="Buy Tickets" tickets={tickets} goBack={goBack} />}
            {coffeeClicked && <BuyMenu title="Buy Coffee" coffees={coffees} goBack={goBack} />}
            {!ticketsClicked && !coffeeClicked && (
                <div className="pt-14 pl-8">
                    <p className="text-center py-5">Here you can buy coffee & tickets</p>
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
                    <h1 className="font-bold py-7 text-center">My Tickets</h1>
                    <MyTickets />
                </div>
            )}
        </>
    );
}
