import { Coffee, Ticket } from "../services/entityFacade";
import { useState } from "react";
import { addCoffeeToCurrentUser, addTicketToCurrentUser } from "../services/apiFacade";

interface BuyMenuProps {
    title: string;
    coffees?: Coffee[];
    tickets?: Ticket[];
}

export default function BuyMenu(props: BuyMenuProps) {
    const [selectedCoffee, setSelectedCoffee] = useState<Coffee | null>(null);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleCoffeeClick = (coffee: Coffee) => {
        setSelectedCoffee(coffee);
        setShowModal(true);
    };

    const handleTicketClick = (ticket: Ticket) => {
        setSelectedTicket(ticket);
        setShowModal(true);
    };

    const handleConfirmClick = () => {
        // handle the buy operation here
        if (selectedCoffee) {
            addCoffeeToCurrentUser(selectedCoffee.id).then((data) => {
                console.log(data);
            });
        }
        if (selectedTicket) {
            addTicketToCurrentUser(selectedTicket.id).then((data) => {
                console.log(data);
            });
        }
        setShowModal(false);
    };
    return (
        <>
            <div className="pt-20">
                <h1 className="text-center font-bold pt-2 pb-10 text-xl">{props.title}</h1>
                {props.coffees && (
                    <div className="grid grid-cols-4 gap-4 px-8">
                        {props.coffees.map((c) => {
                            return (
                                <div className="flex flex-col items-center justify-center px-5 bg-filler-kea hover:bg-green-700 text-white font-bold py-2 rounded" key={c.id} onClick={() => handleCoffeeClick(c)}>
                                    <h2>{c.name}</h2>
                                    <p>{c.price} kr.</p>
                                </div>
                            );
                        })}
                    </div>
                )}
                {props.tickets && (
                    <div className="grid grid-cols-2 gap-4 px-8">
                        {props.tickets.map((t) => {
                            return (
                                <div className="flex flex-col items-center justify-center px-5 bg-filler-kea hover:bg-green-700 text-white font-bold py-2 rounded" key={t.id} onClick={() => handleTicketClick(t)}>
                                    <h2>{t.name}</h2>
                                    <p>{t.price} kr.</p>
                                </div>
                            );
                        })}
                    </div>
                )}
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
                                <h2 className="mb-4 text-gray-500 dark:text-gray-300">
                                    Are you sure you want to buy {selectedCoffee?.name || selectedTicket?.name} for {selectedCoffee?.price || selectedTicket?.price} kr.?
                                </h2>
                                <div className="flex justify-center items-center space-x-4">
                                    <button
                                        type="button"
                                        className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                        onClick={() => setShowModal(false)}
                                    >
                                        No, cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-900"
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
