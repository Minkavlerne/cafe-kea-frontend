import { getUserByEmail } from "../services/apiFacade";
import { useEffect, useState } from "react";
import { CoffeeDto, TicketDto } from "../services/entityFacade";

export default function CustomerReceipts() {
  const email = localStorage.getItem("email");
  const [coffees, setCoffee] = useState<CoffeeDto[]>([]);
  const [tickets, setTicket] = useState<TicketDto[]>([]);

  useEffect(() => {
    if (email) {
      getUserByEmail(email).then((data) => {
        setCoffee(data.coffees);
        setTicket(data.tickets);
        console.log(data);
      });
    }
  }, [email]);

return (
  <div className="pt-20 flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-4">Your receipts</h1>
    <div className="flex justify-between w-full max-w-2xl">
      <div className="w-1/2 pr-5 mr-4 bg-white shadow rounded p-4 overflow-auto max-h-96">
        <h2 className="text-2xl font-semibold mb-2">Coffee</h2>
        <ul>
          {coffees.map((coffee) => {
            const date = new Date(coffee.createdAt);
            const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getFullYear()}`;
            return (
              <li key={coffee.id} className="mb-2 border-b border-gray-200 py-4">
                <p className="font-semibold text-lg">{coffee.coffeeDto.name}</p>
                <p className="text-gray-600">{coffee.coffeeDto.price} kr</p>
                <p className="text-sm text-gray-500">Purchase date: {formattedDate}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-1/2 pl-4 ml-4 bg-white shadow rounded p-4 overflow-auto max-h-96">
        <h2 className="text-2xl font-semibold mb-2">Tickets</h2>
        <ul>
          {tickets.map((ticket) => {
            const date = new Date(ticket.createdAt);
            const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getFullYear()}`;
            return (
              <li key={ticket.id} className="mb-2 border-b border-gray-200 py-4">
                <p className="font-semibold text-lg">{ticket.ticketDto.name}</p>
                <p className="text-gray-600">{ticket.ticketDto.price} kr</p>
                <p className="text-sm text-gray-500">Purchase date: {formattedDate}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
);
}
