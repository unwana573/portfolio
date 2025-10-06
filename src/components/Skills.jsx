import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import SkillProgress from "./SkillProgress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3", "Progressive Web Apps", "Mobile-First Design"],
      color: "from-blue-500 to-purple-600"
    },
    // {
    //   title: "Backend Development",
    //   icon: "⚙️",
    //   skills: ["Python", "FastAPI", "PostgreSQL", ],
    //   color: "from-green-500 to-teal-600"
    // }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="portfolio-card p-6 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <div className={`h-1 w-16 mx-auto rounded-full bg-gradient-to-r ${category.color}`}></div>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillProgress
                    key={skillIndex}
                    skill={skill}
                    percentage={Math.floor(Math.random() * 20) + 80}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        {/* <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Agile/Scrum", "Test-Driven Development", "RESTful APIs", "Microservices",
              , "Mobile-First Design", "Performance Optimization",
              "Security Best Practices", "Database Design", "Code Review"
            ].map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
