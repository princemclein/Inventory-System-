import { Home, Package, History, Settings } from "lucide-react";
import "../Styles/SideBar.css";
import NavItem from "../Components/NavItem.jsx";

export default function Sidebar() {
  return (
    <nav>
      <NavItem to="/" icon={<Home />} label="Dashboard" />
      <NavItem to="/inventory" icon={<Package />} label="Inventory" />
      <NavItem to="/stock-history" icon={<History />} label="Stock History" />
      <NavItem to="/settings" icon={<Settings />} label="Settings" />
    </nav>
  );
}
