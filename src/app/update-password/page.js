"use client";
import { useState } from "react";
import { Input } from "@/component/Reusable/input";
import Link from "next/link";
import { serverCall } from "@/include/reuseble/serverCall";

export default function ResetPassword() {
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            const response = await serverCall.sendpost("/api/auth/reset-password", {
                email,
                oldPassword,
                newPassword,
            });

            if (response.data.success) {
                setMessage("Password updated successfully!");
            } else {
                setError(response.data.error || "Failed to reset password.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("Something went wrong.");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Reset Password</h2>
            {message && <p className="text-success">{message}</p>}
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <Input type="email" name="email" lbl="Enter your Email" value={email} fnchange={(e) => setEmail(e.target.value)} required />
                <Input type="password" name="oldPassword" lbl="Old Password" value={oldPassword} fnchange={(e) => setOldPassword(e.target.value)} required />
                <Input type="password" name="newPassword" lbl="New Password" value={newPassword} fnchange={(e) => setNewPassword(e.target.value)} required />
                <button type="submit" className="btn btn-primary">Update Password</button>
            </form>
            <p className="mt-3">
                Forgot Password? <Link href="/forgot-password">Click here</Link>
            </p>
        </div>
    );
}
