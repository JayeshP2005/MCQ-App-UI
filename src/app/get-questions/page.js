"use client";
import { useEffect, useState } from "react"; // ✅ Import useState
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";
import { Get_Question } from "@/component/GetQuestions/GetQuestions";  // ✅ Ensure correct import

export default function QuestionPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [token, setToken] = useState(null); // ✅ Define token state

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken); // ✅ Store token in state

    console.log("Stored Token:", storedToken); // Debugging log

    if (!storedToken) {
      router.push("/student-login"); // 🔄 Redirect to login if no token
    }
  }, []);

  if (!token) return <p>Loading...</p>; // ✅ Prevents undefined errors

  const handleLogout = () => {
            dispatch(logout());
            router.push("/student-login");
        };

  return (
    <div>
      <button onClick={handleLogout} className="btn btn-danger position-absolute end-0 top-0 mt-1">Logout</button>
      <h2 className="text-center bg-dark text-white">React MCQ Test</h2>
      <Get_Question />  {/* ✅ Render your existing Question component */}
    </div>
  );
}

