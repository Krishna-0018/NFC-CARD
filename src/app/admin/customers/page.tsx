'use client';
import { useState } from "react";

const initialCustomers = [
  { id: '#C001', name: 'Krishna Patel', email: 'krishna@email.com', phone: '+91 98765 43210', joined: '2025-05-22' },
  { id: '#C002', name: 'Ravi Shah', email: 'ravi@email.com', phone: '+91 91234 56789', joined: '2025-06-10' }
];

export default function CustomersPage() {
  const [search, setSearch] = useState('');
  const [customers, setCustomers] = useState(initialCustomers);

  const filtered = customers.filter(cust => cust.name.toLowerCase().includes(search.toLowerCase()));

  const handleDelete = (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this customer?");
    if (confirmed) setCustomers(customers.filter(cust => cust.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">👥 Customer List</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name" className="mb-4 p-2 border rounded w-full max-w-sm" />
      <table className="w-full table-auto border-collapse shadow-md">
        <thead className="bg-purple-100">
          <tr>
            <th className="p-3 text-left">Customer ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Joined</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(cust => (
            <tr key={cust.id} className="hover:bg-purple-50">
              <td className="p-3">{cust.id}</td>
              <td className="p-3">{cust.name}</td>
              <td className="p-3">{cust.email}</td>
              <td className="p-3">{cust.phone}</td>
              <td className="p-3">{cust.joined}</td>
              <td className="p-3">
                <button className="text-red-600 hover:underline" onClick={() => handleDelete(cust.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
