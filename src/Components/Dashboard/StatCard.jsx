import "../../Styles/Dashboard/StatCard.css";

export default function StatCard({ icon, label, value, variant = "neutral" }) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className={`stat-icon stat-icon-${variant}`}>{icon}</div>
        <p className="stat-label">{label}</p>
      </div>
      <h2 className="stat-value">{value}</h2>
    </div>
  );
}
