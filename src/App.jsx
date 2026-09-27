import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Inventory from "./Pages/Inventory.jsx";
import StockHistory from "./Pages/StockHistory";
import Settings from "./Pages/Settings";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/stock-history" element={<StockHistory />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
