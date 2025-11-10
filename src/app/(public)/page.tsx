"use client";
import { useState } from "react";
import Header from "@/components/layout/header";
import HeroSection from "@/components/pages/home/hero-section";
import AboutSection from "@/components/pages/home/about-section";

import ScrollManager from "@/components/hooks/scrollManager";
import SectionIndicators from "@/components/layout/sectionIndicators";
import MoreSection from "@/components/pages/home/more-section";

export default function Home() {
    const [activeSection, setActiveSection] = useState("hero");
    return (
        <main>
            
            <ScrollManager onSectionChange={setActiveSection} />
            <Header />
            <SectionIndicators activeSection={activeSection} />
            <HeroSection />
            <AboutSection />
            <MoreSection />

        </main>
    )
}