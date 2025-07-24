"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const ProjectsSection = dynamic(() => import("./components/ProjectsSection"));
const ContactSection = dynamic(() => import("./components/ContactSection"));

export default function FullStackPortfolio() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </Suspense>
  );
}
