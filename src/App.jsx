import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="all-components-bg">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <div style={{ height: '20px' }} />
      <ScrollToTopButton />
    </>
  );
}
