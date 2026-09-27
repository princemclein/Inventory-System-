import "../Styles/NavItem.css";
import { NavLink } from "react-router-dom";

export default function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
