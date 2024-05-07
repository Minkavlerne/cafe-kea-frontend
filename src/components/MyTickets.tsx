import { useState, useEffect } from "react";
import { getUserByEmail } from "../services/apiFacade";
import { Coffee, Ticket } from "../services/entityFacade";

export default function MyTickets() {
    const email = localStorage.getItem("email");
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [coffees, setCoffees] = useState<Coffee[]>([]);

    useEffect(() => {
        if (email) {
            getUserByEmail(email).then((data) => {
                setTickets(data.tickets);
                setCoffees(data.coffees);
            });
        }
    }, [email]);

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <h1 className="text-center pb-2 font-bold">Ticket purchases</h1>
                <div className="grid grid-cols-2 gap-4 px-8">
                    {tickets.map((t) => {
                        return (
                            <div className="flex flex-col items-center justify-center px-5 bg-filler-kea hover:bg-green-700 text-white font-bold py-2 rounded" key={t.id}>
                                <h2>{t.name}</h2>
                                <p>{t.price} kr.</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <h1 className="text-center pb-2 font-bold">Coffee purchases</h1>
                <div className="grid grid-cols-2 gap-4 px-8">
                    {coffees.map((c) => {
                        return (
                            <div className="flex flex-col items-center justify-center px-5 bg-filler-kea hover:bg-green-700 text-white font-bold py-2 rounded" key={c.id}>
                                <h2>{c.name}</h2>
                                <p>{c.price} kr.</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
