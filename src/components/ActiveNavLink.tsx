import { useMatch, NavLink } from "react-router-dom";

interface ActiveNavLinkProps {
    to: string;
    children: React.ReactNode;
}

export default function ActiveNavLink({ to, children, ...props }: ActiveNavLinkProps) {
    const match = useMatch(to);
    return (
        <NavLink className={`text-gray-700 text-lg hover:underline ${match ? "underline" : ""}`} to={to} {...props}>
            {children}
        </NavLink>
    );
}
