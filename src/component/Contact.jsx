import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Download } from "lucide-react";
import ContactForm from "./ContactForm";
import resumePDF from "../assets/resume.pdf";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "orokunwana@gmail.com",
      href: "mailto:orokunwana@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 811 638 9571",
      href: "tel:+2348116389571"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Akwa Ibom State, Uyo",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/unwana573" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/unwana-orok-6b7ab02a0/" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Unwana_Orok_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <Card className="lg:col-span-3 bg-white/5 border border-white/10 backdrop-blur-sm p-8 lg:p-10 animate-slide-in-left">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
                  Send Me a Message
                </h3>
                <p className="text-gray-400 text-base">
                  I'd love to hear about your project. Send me a message and I'll get back to you within 24 hours.
                </p>
              </div>

              <ContactForm />
            </div>
          </Card>

          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 p-5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors flex-shrink-0">
                        <Icon className="h-5 w-5 text-blue-500 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white mb-1">{item.label}</p>
                        <p className="text-gray-400 text-sm break-words">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <SocialIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm p-6">
              <div className="text-center space-y-4">
                <h4 className="text-xl font-semibold text-white">
                  Let's Create Something Amazing
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
                <Button 
                  onClick={handleDownloadResume}
                  className="bg-transparent border-2 border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white font-medium px-6 py-5 rounded-md transition-all duration-200 group"
                >
                  <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;