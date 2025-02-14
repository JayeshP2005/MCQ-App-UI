"use client";
import { Header } from "@/component/header";
import { Footer } from "@/component/footer";
import { Question } from "@/component/questions";
import Std_Login from "./student-login/page";

export default function Home() {
  return (
      <div >
      {/* <Header/> */}
      <Std_Login/>
      {/* <Footer/> */}
      </div>
  );
}
