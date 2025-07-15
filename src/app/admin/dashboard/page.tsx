'use client'
import * as React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Mon', orders: 30 },
  { name: 'Tue', orders: 45 },
  { name: 'Wed', orders: 90 },
  { name: 'Thu', orders: 130 },
  { name: 'Fri', orders: 190 },
  { name: 'Sat', orders: 100 },
  { name: 'Sun', orders: 70 }
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-3xl font-bold mt-2">122</p>
        </div>
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Customers</h2>
          <p className="text-3xl font-bold mt-2">88</p>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Products</h2>
          <p className="text-3xl font-bold mt-2">36</p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">📈 Weekly Orders</h2>
      <div className="h-80 bg-white p-4 rounded-xl shadow-md">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#6366f1" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}