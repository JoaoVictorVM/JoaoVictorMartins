"use client";
import { useState } from "react";
import Header from "@/components/layout/header";
import HeroSection from "@/components/pages/home/hero-section";
import AboutSection from "@/components/pages/home/about-section";
import MoreSection from "@/components/pages/home/more-section";
import ProjectsSection from "@/components/pages/home/projects-section";
import FooterSection from "@/components/pages/home/footer-section";

import SectionIndicators from "@/components/layout/sectionIndicators";
import ScrollManager from "@/components/hooks/scrollManager";

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
            <ProjectsSection />


        </main>
    )
}