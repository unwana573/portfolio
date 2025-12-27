import { Card } from "./ui/card";
import SkillProgress from "./SkillProgress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Progressive Web Apps", level: 80 },
        { name: "Mobile-First Design", level: 87 }
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Python", level: 70 },
        { name: "FastAPI", level: 65 },
        { name: "PostgreSQL", level: 72 }
      ],
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-black/20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            My{" "}
              Skills
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl">{category.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {category.title}
                  </h3>
                  <div
                    className={`h-1 w-20 rounded-full bg-linear-to-r ${category.color}`}
                  ></div>
                </div>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillProgress
                    key={skillIndex}
                    skill={skill.name}
                    percentage={skill.level}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;