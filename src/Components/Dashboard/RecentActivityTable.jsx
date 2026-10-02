const activity = [
  {
    time: "Sep 26, 2025 11:42 AM",
    product: "Arduino Uno",
    action: "Added",
    quantity: "+20",
    user: "Admin",
  },
  {
    time: "Sep 26, 2025 10:00 PM",
    product: "Solderless Breadboard",
    action: "Added",
    quantity: "+15",
    user: "Admin",
  },
  {
    time: "Sep 25, 2025 11:42 AM",
    product: "Male to Male wire",
    action: "Removed",
    quantity: "-10",
    user: "Admin",
  },
  {
    time: "Sep 25, 2025 12:50 PM",
    product: "LED",
    action: "Added",
    quantity: "+50",
    user: "Admin",
  },
  {
    time: "Sep 25, 2025 3:24 PM",
    product: "9V Batteries",
    action: "Added",
    quantity: "+5",
    user: "Admin",
  },
];

export default function RecentActivityTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Products</th>
          <th>Action</th>
          <th>Quantity</th>
          <th>User</th>
        </tr>
      </thead>

      <tbody>
        {activity.map((item) => {
          return (
            <tr key={item.time}>
              <td>{item.time}</td>
              <td>{item.product}</td>
              <td>{item.action}</td>
              <td>{item.quantity}</td>
              <td>{item.user}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
