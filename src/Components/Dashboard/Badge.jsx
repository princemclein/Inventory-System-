import "../Dashboard/Badge.css";

function Badge({ variant = "info", children }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
