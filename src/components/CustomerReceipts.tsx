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
    <div className="pt-20 justify-center">
      <h1>Your receipts</h1>
      <h2>Coffee</h2>
      <ul>
        {coffees.map((coffee) => (
          <li key={coffee.id}>
            {coffee.coffeeDto.name} - {coffee.coffeeDto.price} kr
          </li>
        ))}
      </ul>
      <h2>Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.ticketDto.name} - {ticket.ticketDto.price} kr
          </li>
        ))}
      </ul>
    </div>
  );
}
