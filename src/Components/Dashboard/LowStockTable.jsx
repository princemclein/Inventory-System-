import "../../Styles/Dashboard/LowStockTable.css";

const lowstock = [
  {
    product: "USB C-Cable",
    category: "Cables",
    currentStock: 2,
    reorderLevel: 5,
  },
  {
    product: "Soldering Paste",
    category: "Soldering",
    currentStock: 10,
    reorderLevel: 20,
  },
  {
    product: "Resistor Pack",
    category: "Resistor",
    currentStock: 50,
    reorderLevel: 200,
  },
];

export default function LowStockTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Current Stock</th>
          <th>Reorder Level</th>
        </tr>
      </thead>

      <tbody>
        {lowstock.map((item) => {
          return (
            <tr key={item.product}>
              <td>{item.product}</td>
              <td>{item.category}</td>
              <td>{item.currentStock}</td>
              <td>{item.reorderLevel}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
