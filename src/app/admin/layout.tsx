// app/admin/layout.tsx
"use client";

import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-tr from-blue-50 to-purple-100 text-blue-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-blue-800 to-purple-700 text-white p-6 space-y-4 shadow-lg border-r-2 border-white/20">
  <h2 className="text-2xl font-bold mb-6">👋 Welcome Admin</h2>
  <nav className="space-y-3">
    <Link href="/admin/dashboard" className="block hover:text-blue-300 rounded-r-xl border-r-2 border-white/30">Dashboard</Link>
    <Link href="/admin/products" className="block hover:text-blue-300 rounded-r-xl border-r-2 border-white/30">Products</Link>
    <Link href="/admin/orders" className="block hover:text-blue-300 rounded-r-xl border-r-2 border-white/30">Orders</Link>
    <Link href="/admin/customers" className="block hover:text-blue-300 rounded-r-xl border-r-2 border-white/30">Customers</Link>
    <Link href="/admin/upload" className="block hover:text-blue-300 rounded-r-xl border-r-2 border-white/30">Upload Product</Link>
  </nav>
</aside>


      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center border-b border-blue-200">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="font-medium">👋 Hello, Admin</span>
            <Image
              src="/avatar.png"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-300"
            />
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="p-10 bg-white flex-1 overflow-y-auto shadow-inner rounded-tl-xl">
          {children}
        </main>
      </div>
    </div>
  );
}
