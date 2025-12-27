import { Card } from "./ui/card";

const About = () => {
  const achievements = [
    { number: "20+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
    { number: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About{" "}
              Me
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed text-base">
                <p>
                  I'm a passionate frontend developer with over 5 years of hands-on experience
                  building responsive, user-friendly interfaces and crafting engaging digital experiences. 
                  My focus is on transforming designs into clean, accessible, and high-performance frontend solutions.
                </p>
                <p>
                  Alongside my frontend expertise, I have less than 6 months of experience
                  working with backend technologies, where I’m actively building my skills in creating APIs, 
                  handling databases, and understanding how frontend applications integrate with server-side systems.
                </p>
                <p>
                  I’m highly committed to continuous learning and growth, with a strong interest in evolving into a 
                  well-rounded full-stack developer. I enjoy exploring new technologies, improving my workflows, 
                  and building scalable applications that solve real-world problems.
                </p>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6 animate-fade-in">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 p-8 text-center group"
              >
                <div className="space-y-3">
                  <h4 className="text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </h4>
                  <p className="text-sm lg:text-base text-gray-400 font-medium">
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