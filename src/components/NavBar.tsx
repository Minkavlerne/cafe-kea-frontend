import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="bg-white shadow">
        <ul className="flex justify-around py-4">
            {/* Not logged in navbar */}
          <li>
            <NavLink className="text-gray-700 text-lg hover:text-blue-600" to="/">
              Home
            </NavLink>
          </li>
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

            {/* Logged in navbar */}
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
        </ul>
      </nav>
    </>
  );
}
