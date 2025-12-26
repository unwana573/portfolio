import { useState, useEffect } from 'react';

export const useScrollspy = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};

export const useScrollTo = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return scrollToSection;
};