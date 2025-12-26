import Navigation from "../component/Navigation";
import Hero from "../component/Hero";
import About from "../component/About";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
