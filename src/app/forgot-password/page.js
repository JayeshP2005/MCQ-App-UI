
// "use client";
// import Link from "next/link";
// import { useState } from "react";

// export default function ForgotPassword() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();
//       console.log("dataaa : ",data)
//       if (res.ok) {
//         setMessage("OTP sent to your email.");
//       } else {
//         setMessage(data.error || "Failed to send OTP");
//       }
//     } catch (error) {
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Forgot Password</h2>
//       {message && <p>{message}</p>}

//       {/* ✅ Form should handle submit */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Send OTP</button>
//       </form>

//       {/* ✅ Separate link for another page */}
//       <p>
//         <Link href="/login">Back to Login</Link>
//       </p>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1); // 1 = Email input, 2 = OTP & Password input

  const sendOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      console.log("dataaa : ",data)
      if (res.ok) {
        setMessage("OTP sent to your email.");
        setStep(2); // Move to next step
      } else {
        setMessage(data.error || "Failed to send OTP");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, newPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Password reset successful. Please login.");
        setStep(1);
        setEmail("");
        setOtp("");
        setNewPassword("");
      } else {
        setMessage(data.error || "Failed to reset password");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      {message && <p>{message}{email}</p>}

      {step === 1 ? (
        <form onSubmit={sendOTP}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={resetPassword}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}

      <p>
        <Link href="/login">Back to Login</Link>
      </p>
    </div>
  );
}

