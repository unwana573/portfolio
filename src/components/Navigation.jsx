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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl gradient-text">Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary pb-2 border-b-2 ${
                  activeSection === item.id
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="gradient"
              size="sm"
              onClick={() => handleNavClick("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm font-medium transition-colors hover:text-primary pb-2 border-b-2 ${
                    activeSection === item.id ? "text-primary border-primary" : "text-muted-foreground border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="gradient"
                size="sm"
                onClick={() => handleNavClick("contact")} 
                className="w-fit"
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
