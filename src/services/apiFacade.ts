import { API_URL } from "../settings";
import { handleHttpErrors } from "./fetchUtils";

const COFFEE_URL = API_URL + "api/coffee";
const USER_URL = API_URL + "api/user-with-role";

async function getAllCoffee() {
  return fetch(COFFEE_URL).then(handleHttpErrors);
}

async function getUserByEmail(email: string) {
  if (email) {
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

export { getAllCoffee, getUserByEmail, changePassword, deleteUserByEmail };
