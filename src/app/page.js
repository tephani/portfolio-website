import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectSection from "./components/ProjectSection";
// import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
        <NavBar />
        <div class="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <br></br>
          <TechStackSection />
          <br></br>
          <ProjectSection />
          <br></br>
          <Experience />
          {/* <EmailSection /> */}
        </div>
        <Footer />
      </main>
    </div>
  );
}
