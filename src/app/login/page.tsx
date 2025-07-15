// app/admin/login/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password } = credentials;

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white max-w-md w-full rounded-xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-700">Login Here</h2>
          <p className="text-sm text-muted-foreground mt-2">Sign in to manage your NFC store</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <Input
              placeholder="Enter email-id"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <Input
              type="password"
              placeholder="Enter password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold"
          >
            Login
          </Button>

          <div className="flex justify-between text-sm text-blue-600 mt-3">
            <Link href="/login/register" className="hover:underline">Create Customer Account</Link>
            <Link href="/login/forgot-password" className="hover:underline">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
