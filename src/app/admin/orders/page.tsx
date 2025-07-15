'use client';
import { useState } from "react";

const initialOrders = [
  { id: '#1001', customer: 'Krishna Patel', date: '2025-07-15', total: '₹499', status: 'Delivered' },
  { id: '#1002', customer: 'Ravi Shah', date: '2025-07-14', total: '₹349', status: 'Shipped' }
];

export default function OrdersPage() {
  const [search, setSearch] = useState('');
  const [orders, setOrders] = useState(initialOrders);

  const filtered = orders.filter(order => order.customer.toLowerCase().includes(search.toLowerCase()));

  const handleDelete = (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this order?");
    if (confirmed) setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📦 Orders List</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by customer" className="mb-4 p-2 border rounded w-full max-w-sm" />
      <table className="w-full table-auto border-collapse shadow-md">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Total</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(order => (
            <tr key={order.id} className="hover:bg-blue-50">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">{order.date}</td>
              <td className="p-3">{order.total}</td>
              <td className="p-3">{order.status}</td>
              <td className="p-3">
                <button className="text-red-600 hover:underline" onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}