"use client";
import { useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Header() {
    // const dispatch = useDispatch();
    // const router = useRouter();

    // const handleLogout = () => {
    //     dispatch(logout());
    //     router.push("/login");
    // };

    return (
        <header>
            <div>
            <Link href={"/login"} className="position-absolute start-0 mt-2  text-white">Teacher login</Link>
            <h1 className="text-center bg-primary text-white">My App</h1>
            </div>
        </header>
    );
}
