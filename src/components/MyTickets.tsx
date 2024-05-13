import { useState, useEffect } from "react";
import { getUserByEmail, removeCoffee, removeQuantityFromTicket } from "../services/apiFacade";
import { CoffeeDto, TicketDto } from "../services/entityFacade";

export default function MyTickets() {
    const email = localStorage.getItem("email");
    const [tickets, setTickets] = useState<TicketDto[]>([]);
    const [coffees, setCoffees] = useState<CoffeeDto[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    //const [selectedItem, setSelectedItem] = useState<CoffeeDto | TicketDto | null>(null);
    const [selectedTicket, setSelectedTicket] = useState<TicketDto | null>(null);
    const [selectedCoffee, setSelectedCoffee] = useState<CoffeeDto | null>(null);

    useEffect(() => {
        if (email) {
            getUserByEmail(email).then((data) => {
                setTickets(data.tickets);
                setCoffees(data.coffees);
            });
        }
    }, [email]);

    function handleModalClick(ticket: TicketDto | null, coffee: CoffeeDto | null) {
        setShowModal(true);
        if (ticket) {
            setSelectedTicket(ticket);
            console.log(ticket);
        }
        if (coffee) {
            setSelectedCoffee(coffee);
            console.log(coffee);
        }
    }
    async function handleConfirmClick() {
        if (email) {
            if (selectedTicket) {
                await removeQuantityFromTicket(email, selectedTicket.id.toString());
                setTickets(tickets.map((t) => (t.id === selectedTicket.id ? { ...t, quantity: t.quantity - 1 } : t)).filter((t) => t.quantity > 0));
            }
            if (selectedCoffee) {
                await removeCoffee(email, selectedCoffee.id.toString());
                setCoffees(coffees.filter((c) => c !== selectedCoffee));
            }
        }
        setShowModal(false);
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h1 className="text-center pb-2 font-bold">Ticket purchases</h1>
                    <div className="grid grid-cols-2 gap-4 px-8">
                        {tickets.map((t) => {
                            if (!t.used) {
                                return (
                                    <div onClick={() => handleModalClick(t, null)} className="flex flex-col items-center justify-center px-5 bg-filler-kea hover:bg-[#A37F66] text-white font-bold py-2 rounded" key={t.id}>
                                        <h2>{t.ticketDto.name}</h2>
                                        <p>Quantity: {t.quantity}</p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div>
                    <h1 className="text-center pb-2 font-bold">Coffee purchases</h1>
                    <div className="grid grid-cols-2 gap-4 px-8">
                        {coffees.map((c) => {
                            if (!c.used) {
                                return (
                                    <div onClick={() => handleModalClick(null, c)} className="flex flex-col items-center justify-center px-5 bg-filler-kea hover:bg-[#A37F66] text-white font-bold py-2 rounded" key={c.id}>
                                        <h2>{c.coffeeDto.name}</h2>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
            {showModal && (
                <>
                    <div className="fixed inset-0 z-50 bg-black opacity-50"></div>
                    <div id="confirmModal" tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center">
                        <div className="relative p-4 w-full max-w-md h-full md:h-auto mx-auto">
                            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                                <button
                                    type="button"
                                    className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <h2 className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to use {"1 stamp from " + selectedTicket?.ticketDto.name || selectedCoffee?.coffeeDto.name} </h2>
                                <div className="flex justify-center items-center space-x-4">
                                    <button
                                        type="button"
                                        className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                        onClick={() => (setSelectedTicket(null), setSelectedCoffee(null), setShowModal(false))}
                                    >
                                        No, cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-[#A37F66] focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-900"
                                        onClick={handleConfirmClick}
                                    >
                                        Yes, I'm sure
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
