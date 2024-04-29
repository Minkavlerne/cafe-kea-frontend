import { API_URL } from "../settings";
import { handleHttpErrors } from "./fetchUtils";

const COFFEE_URL = API_URL + "api/coffee";

async function getAllCoffee() {
    return fetch(COFFEE_URL).then(handleHttpErrors);
}

export {
    getAllCoffee
}