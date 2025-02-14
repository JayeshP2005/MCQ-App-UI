"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/component/Reusable/input";
import { fnvalidate } from "@/include/reuseble/validation";

const validationRules = {
  username: ["Min5char"],
  email: ["Emailformate"],
  password: ["Passformate"],
};

export default function Signup() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({ username: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };

    let inputObj = { value, criteria: validationRules[name], errormessage: "" };
    fnvalidate(inputObj);

    setFormData(newFormData);
    setErrors({ ...errors, [name]: inputObj.errormessage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = { username: "", email: "", password: "" };

    Object.keys(formData).forEach((field) => {
      let inputObj = { value: formData[field], criteria: validationRules[field], errormessage: "" };
      fnvalidate(inputObj);
      newErrors[field] = inputObj.errormessage;
      if (inputObj.errormessage) isValid = false;
    });

    setErrors(newErrors);

    if (!isValid) {
      alert("Please fix the validation errors before submitting.");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      alert(data.message || "Signup successful!");
      if (data.success) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          lbl="Username"
          value={formData.username}
          fnchange={handleChange}
        />
        {errors.username && <p className="text-danger">{errors.username}</p>}

        <Input
          type="email"
          name="email"
          lbl="Email"
          value={formData.email}
          fnchange={handleChange}
        />
        {errors.email && <p className="text-danger">{errors.email}</p>}

        <Input
          type="password"
          name="password"
          lbl="Password"
          value={formData.password}
          fnchange={handleChange}
        />
        {errors.password && <p className="text-danger">{errors.password}</p>}

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

