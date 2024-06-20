import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Coursework from "./components/Coursework";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Awards from "./components/Awards";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-4 lg:px-20 py-4">
        <NavBar />
        <div class="container mt-24 mx-auto px-4 lg:px-20 py-4">
          <HeroSection />
          <AboutSection />
          <br></br>
          <Education />
          <br></br>
          <TechStackSection />
          <br></br>
          <Awards />
          <br></br>
          <Certifications />
          <br></br>
          <ProjectSection />
          <br></br>
          <Experience />
          <br></br>
          <Coursework />
          <br></br>
          <EmailSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
