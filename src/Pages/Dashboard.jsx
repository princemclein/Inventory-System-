import { Box, Database, AlertTriangle, XCircle } from "lucide-react";
import "../Styles/Pages/Dashboard.css";
import PageHeader from "../Components/PageHeader.jsx";
import StatCard from "../Components/Dashboard/StatCard.jsx";
import RecentActivityTable from "../Components/Dashboard/RecentActivityTable.jsx";

export default function Dashboard() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Dashboard"
        subtitle="Overview of your inventory and recent activity."
      />

      {/* 4 Status Card */}
      <div className="stat-cards-row">
        <StatCard icon={<Box size={30} />} label="Total Products" value={6} />
        <StatCard
          icon={<Database size={30} />}
          label="Total Stock"
          value={92}
        />
        <StatCard
          icon={<AlertTriangle size={30} />}
          label="Low Stock Items"
          value={2}
        />
        <StatCard
          icon={<XCircle size={30} />}
          label="Out of Stock Items"
          value={1}
        />
      </div>

      {/* Recent Stock Activity table */}
      <RecentActivityTable />
    </>
  );
}
