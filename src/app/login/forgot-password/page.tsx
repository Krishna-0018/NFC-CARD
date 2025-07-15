"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset for:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-700">Forgot Password</h2>
          <p className="text-sm text-muted-foreground mt-2">We will email you a reset link</p>
        </div>

        {submitted ? (
          <p className="text-center text-green-600 font-medium">
            ✅ If the email exists, a reset link has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold"
            >
              Send Reset Link
            </Button>

            <p className="text-center text-sm mt-3">
              Remember password? <Link href="/login" className="text-blue-600 hover:underline">Back to Login</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
