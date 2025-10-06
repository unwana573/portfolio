import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const About = () => {
  const achievements = [
    { number: "20+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
    { number: "100%", label: "Satisfaction Rate" },
  ];

  const interests = [
    "Open Source", "AI/ML", "Cloud Computing", "Mobile Development", 
    "DevOps", "Blockchain", "Cybersecurity", "IoT"
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate front-end developer with over 5 years of experience 
                  creating digital solutions that bridge the gap between design and 
                  functionality. My journey began with a curiosity for how things work 
                  and evolved into a deep love for crafting user experiences.
                </p>
                <p>
                  I specialize in modern web technologies and have a keen eye for design. 
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or mentoring aspiring developers.
                </p>
                <p>
                  I believe in the power of technology to solve real-world problems 
                  and am constantly learning new ways to create more efficient, 
                  accessible, and beautiful applications.
                </p>
              </div>
            </div>

            {/* <div className="space-y-3">
              <h4 className="text-lg font-medium">Current Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {achievements.map((achievement, index) => (
              <Card key={index} className="portfolio-card p-6 text-center">
                <div className="space-y-2">
                  <h4 className="text-3xl font-bold gradient-text">
                    {achievement.number}
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
