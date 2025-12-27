import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useScrollspy, useScrollTo } from "@/hooks/useScrollspy";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];
  const activeSection = useScrollspy(sectionIds);
  const scrollToSection = useScrollTo();

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  activeSection === item.id
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => handleNavClick("contact")}
              className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 rounded-md shadow-lg shadow-blue-500/20 transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>

          <button
            className="md:hidden text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 text-sm font-medium transition-all duration-200 rounded-md ${
                    activeSection === item.id 
                      ? "text-white bg-white/10" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                size="sm"
                onClick={() => handleNavClick("contact")} 
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium w-full rounded-md shadow-lg shadow-blue-500/20"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;