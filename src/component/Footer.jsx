import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Unwana David Orok. Made with{" "}
              <Heart className="inline h-4 w-4 text-red-500 fill-current animate-pulse" />{" "}
              using React <br />
            Let's create something amazing together 🚀
            </p>
          </div>
          

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/unwana573"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/unwana-orok-6b7ab02a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110 group"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        
      </div>
    </footer>
  );
};

export default Footer;