import { NavLink } from "react-router-dom";
import { useAuth } from "../security/AuthProvider";

export default function NavBar() {
  const auth = useAuth();
  return (
    <>
      <nav className="bg-white shadow w-screen h-[70px] z-10 fixed">
        <ul className="flex justify-around py-4">
          {/* Not logged in navbar */}
          {!auth.isLoggedIn() && (
            <>
              <li>
                <NavLink className="text-gray-700 text-lg hover:text-blue-600" to="/volunteer">
                  Become Volunteer
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 text-lg hover:text-blue-600" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 text-lg hover:text-blue-600" to="/signup">
                  Signup
                </NavLink>
              </li>
            </>
          )}

          {/* Logged in navbar */}
          {auth.isLoggedIn() && (
            <>
              <li>
                <NavLink className="text-gray-700 text-lg hover:text-blue-600" to="/tickets">
                  Tickets
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 text-lg hover:text-blue-600" to="/receipts">
                  Receipts
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 text-lg hover:text-blue-600" to="/stats">
                  Stats
                </NavLink>
              </li>
              <li>
                <NavLink className="text-gray-700 text-lg hover:text-blue-600" to="/settings">
                  Settings
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
