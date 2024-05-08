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
    used: boolean;
}

export interface TicketDto {
    id: number;
    ticketDto: Ticket;
    customerId: number;
    createdAt: string;
    quantity: number;
    used: boolean;
}

export interface User {
    email: string;
    password: string;
}
