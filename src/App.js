import React from "react";
import './App.css'
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import CareerPage from "./pages/careerPage/CareerPage";
import EducationPage from "./pages/educationPage/EducationPage";
import SkillsPage from "./pages/skillsPage/SkillsPage";
import ProjectPage from './pages/projectPage/ProjectPage';
import ContactPage from './pages/contactPage/ContactPage';




function App() {
  return (
    <div className="jdgt">

      <HomePage />
      <AboutPage  />
      <CareerPage />
      <EducationPage />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
      
    </div>

  );

}

export default App;
