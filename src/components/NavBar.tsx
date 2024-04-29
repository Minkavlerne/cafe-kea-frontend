import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="bg-background-kea bg-opacity-45">
        <ul className="flex justify-around py-4">
          {/* Not logged in navbar */}
          <li>
            <NavLink className="bg-filler-kea text-text-kea text-lg hover:text-background-kea px-4 py-2 rounded-md" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-filler-kea text-text-kea text-lg hover:text-background-kea px-4 py-2 rounded-md" to="/volunteer">
              Become Volunteer
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-filler-kea text-text-kea text-lg hover:text-background-kea px-4 py-2 rounded-md" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-filler-kea text-text-kea text-lg hover:text-background-kea px-4 py-2 rounded-md" to="/signup">
              Signup
            </NavLink>
          </li>

          {/* Logged in navbar */}
          <li>
            <NavLink className="bg-filler-kea text-text-kea text-lg hover:text-background-kea px-4 py-2 rounded-md" to="/tickets">
              Tickets
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-filler-kea text-text-kea text-lg hover:text-background-kea px-4 py-2 rounded-md" to="/receipts">
              Receipts
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-filler-kea text-text-kea text-lg hover:text-background-kea px-4 py-2 rounded-md" to="/stats">
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-filler-kea text-text-kea text-lg hover:text-background-kea px-4 py-2 rounded-md" to="/settings">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
