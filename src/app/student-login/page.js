"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/component/Reusable/input"; // ✅ Ensure correct import
import Link from "next/link";
import { Question } from "@/component/questions";

export default function Std_Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // ✅ Update state correctly
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        console.log(res);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        if (data.token) {
            localStorage.setItem("token", data.token); // ✅ Store token
            setTimeout(() => {
              router.push("/get-questions"); // 🔄 Redirect to Question Page
              router.refresh(); // ✅ Force Reload
          }, 100);
        } else {
            alert(data.error || "Login failed");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Login failed. Please try again.");
    }
};


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Login</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <div className="mb-3">
          <label><b>Email</b></label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label><b>Password</b></label>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary w-50">Login</button>
        <Link href="/update-password">
          <button className="btn btn-success w-50">Forgot Password</button>
        </Link>
      </form>

      <div className="mt-3 text-center">
        <p>Don't have an account?</p>
        <Link href="/signup">
          <button className="btn btn-success w-100">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
