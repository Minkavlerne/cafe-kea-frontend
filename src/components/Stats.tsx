import { useEffect, useState } from "react";
import { CoffeeDto, TicketDto } from "../services/entityFacade";
import { getUserByEmail } from "../services/apiFacade";

export default function Stats() {
  const email = localStorage.getItem("email");
  const [coffeePurchased, setCoffeePurchased] = useState<number | null>(null);
  const [coffeePurchasedThisMonth, setCoffeePurchasedThisMonth] = useState<number | null>(null);
  const [coffeePurchasedThisSemester, setCoffeePurchasedThisSemester] = useState<number | null>(null);
  useEffect(() => {
    if (email) {
      getUserByEmail(email).then((data) => {
        const coffeeCount = data.coffees.length;
        const ticketCount = data.tickets.length;
        setCoffeePurchased(coffeeCount + ticketCount * 10);
        const now = new Date();
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const coffeesThisMonth = data.coffees.filter((coffee: CoffeeDto) => new Date(coffee.createdAt) >= firstDayOfMonth);
        const ticketsThisMonth = data.tickets.filter((ticket: TicketDto) => new Date(ticket.createdAt) >= firstDayOfMonth);
        setCoffeePurchasedThisMonth(coffeesThisMonth.length + ticketsThisMonth.length * 10);
        const isFirstSemester = now.getMonth() < 6;
        const startOfSemester = isFirstSemester ? new Date(now.getFullYear(), 0, 16) : new Date(now.getFullYear(), 7, 15);
        const endOfSemester = isFirstSemester ? new Date(now.getFullYear(), 5, 30) : new Date(now.getFullYear(), 11, 31);
        const coffeesThisSemester = data.coffees.filter((coffee: CoffeeDto) => {
          const coffeeDate = new Date(coffee.createdAt);
          return coffeeDate >= startOfSemester && coffeeDate <= endOfSemester;
        }).length;
        const ticketsThisSemester = data.tickets.filter((ticket: TicketDto) => {
          const ticketDate = new Date(ticket.createdAt);
          return ticketDate >= startOfSemester && ticketDate <= endOfSemester;
        }).length;
        setCoffeePurchasedThisSemester(coffeesThisSemester + ticketsThisSemester * 10);
      });
    }
  }, [email]);

  return (
    <div className="bg-background-kea">
      <div className="bg-background-kea text-text-kea p-20">
        <h1>Hello, {email}!</h1>
        <h2>Here are your stats:</h2>
        <div className="bg-background-kea fixed bottom-0 right-0 m-4 bg-white p-4 rounded shadow-lg">
          <li>You have purchased {coffeePurchased} cups of coffee, all time</li>
          <li>You have purchased {coffeePurchasedThisMonth} cups of coffee this month</li>
          <li>You have purchased {coffeePurchasedThisSemester} this semester</li>
        </div>
      </div>
    </div>
  );
}
