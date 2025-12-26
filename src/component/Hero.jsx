import { Button } from "./ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "../assets/orok.jpg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-6">
              <p className="text-blue-500 font-medium tracking-wide uppercase text-sm">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Hi, I'm{" "}
                  Unwana Orok
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-gray-400">
                Full-Stack
              </h2>
            </div>
            
            <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl">
              I build end-to-end digital solutions, blending clean frontend design with robust backend architecture to create impactful, scalable applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-6 text-base rounded-md shadow-lg shadow-blue-500/20 transition-all duration-200"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border-2 border-blue-600 text-blue-500 hover:bg-blue-600/10 font-medium px-8 py-6 text-base rounded-md transition-all duration-200"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <p className="text-sm text-gray-500">Follow me:</p>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-3xl"></div>
              
              {/* Image container */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Unwana Orok - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-blue-500 transition-colors duration-200"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8 text-gray-500" />
      </button>
    </section>
  );
};

export default Hero;