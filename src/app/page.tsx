"use client";

import { Topbar } from "@/components/Nav/topbar";

import Hero from "@/components/Hero/Hero";
import Mission from "@/components/Mission/Mission";
import Profit from "@/components/Profit/Profit";
import Columns from "@/components/AI/Columns";
import Pass from "@/components/Pass/Pass";
import Coming from "@/components/Coming/Coming";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Topbar />
      <Hero />
      <div className="w-11/12 lg:w-5/6 mx-auto max-w-7xl">
        <Mission />
        <Profit />
        <Columns />
        <Pass />
        <Coming />
        <Footer />
      </div>
    </main>
  );
}
