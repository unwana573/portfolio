import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import project1 from "../assets/eazymovie.png";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Movie Websites",
      description: "A dynamic movie platform featuring real-time insights, audience tracking, and advanced content analytics — built with modern web technologies for a seamless viewing experience",
      image: project1,
      technologies: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://eazy-movies.vercel.app",
      githubUrl: "https://github.com/unwana573/Eazy-movies.git",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "Full-featured e-commerce application with payment integration, inventory management, and seamless user experience across all devices.",
      image: project2,
      technologies: ["React Native", "Express.js", "MongoDB", "Stripe", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: project3,
      technologies: ["Vue.js", "Python", "FastAPI", "WebSocket", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="portfolio-card overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent lg:bg-gradient-to-r lg:from-background/60 lg:to-transparent"></div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline"
                            className="bg-accent/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="hero" className="group w-full sm:w-auto">
                          <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-45 transition-transform" />
                          Live Demo
                        </Button>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="group w-full sm:w-auto">
                          <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          View Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Button variant="outline-hero" size="xl" className="group">
            View All Projects
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
