export interface Coffee {
    id: number;
    name: string;
    price: number;
}

export interface Ticket {
    id: number;
    name: string;
    price: number;
}

export interface CoffeeDto {
    id: number;
    coffeeDto: Coffee;
    customerId: number;
    createdAt: string;
}

export interface TicketDto {
    id: number;
    ticketDto: Ticket;
    customerId: number;
    createdAt: string;
    quantity: number;
}

export interface User {
    email: string;
    password: string;
}
