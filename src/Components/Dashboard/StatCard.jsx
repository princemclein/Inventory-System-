import "../Dashboard/StatCard.css";

function StatCard({ icon, label, value, sublabel, variant = "neutral" }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon stat-icon-${variant}`}>{icon}</div>
      <p className="stat-label">{label}</p>
      <h2 className="stat-value">{value}</h2>
      <p className="stat-sublabel">{sublabel}</p>
    </div>
  );
}
