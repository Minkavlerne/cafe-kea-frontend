import { API_URL } from "../settings";
import { User } from "./entityFacade";
import { handleHttpErrors } from "./fetchUtils";

const COFFEE_URL = API_URL + "api/coffee";
const USER_URL = API_URL + "api/user-with-role";
const TICKET_URL = API_URL + "api/tickets";

async function getAllCoffee() {
    return fetch(COFFEE_URL).then(handleHttpErrors);
}

async function getUserByEmail(email: string) {
    if (email) {
        console.log(email);
        return fetch(USER_URL + "/" + email).then(handleHttpErrors);
    }
}

async function deleteUserByEmail(email: string) {
    if (email) {
        return fetch(USER_URL + "/" + email, {
            method: "DELETE",
        }).then(handleHttpErrors);
    }
}
async function changePassword(password: string) {
    const email = localStorage.getItem("email");
    if (password) {
        return fetch(USER_URL + "/" + email, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password: password, email: email }),
        }).then(handleHttpErrors);
    }
}

async function addUser(user: User) {
    return fetch(USER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then(handleHttpErrors);
}

async function getAllTickets() {
    return fetch(TICKET_URL).then(handleHttpErrors);
}

async function addCoffeeToCurrentUser(coffeeId: number) {
    const email = localStorage.getItem("email");
    console.log(email);
    if (email) {
        return fetch(`${USER_URL}/${email}/coffee`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(coffeeId),
        }).then(handleHttpErrors);
    }
}

async function addTicketToCurrentUser(ticketId: number) {
    const email = localStorage.getItem("email");
    if (email) {
        return fetch(`${USER_URL}/${email}/ticket`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ticketId),
        }).then(handleHttpErrors);
    }
}


async function removeQuantityFromTicket(email: string, ticketId: string) {
    if (email) {
        return fetch(`${USER_URL}/${email}/ticket/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(handleHttpErrors);
    }
}

async function removeCoffee(email: string, coffeeId: string) {
    if (email) {
        return fetch(`${USER_URL}/${email}/coffee/${coffeeId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(handleHttpErrors);
    }
}

export { addUser, getAllCoffee, getUserByEmail, changePassword, deleteUserByEmail, addCoffeeToCurrentUser, getAllTickets, addTicketToCurrentUser, removeQuantityFromTicket, removeCoffee };