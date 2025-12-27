import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send, CheckCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const serviceId = 'service_sep9pry';
      const templateId = 'template_g4h2ixo';
      const publicKey = 'U9UKkvwc84UBgvZx0';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'orokunwana@gmail.com'
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      
      setShowSuccessModal(true);
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setShowSuccessModal(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending message. Please try emailing me directly at orokunwana@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
            Subject
          </label>
          <Input
            id="subject"
            type="text"
            name="subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Your Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hi..."
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-6 text-base rounded-md shadow-lg shadow-blue-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Send Message
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>
      </form>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">

          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          ></div>
          
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in duration-300">

            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
                <CheckCircle className="h-12 w-12 text-green-500 animate-pulse" />
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Message Sent Successfully! 🎉
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Thank you for reaching out! I've received your message and will get back to you as soon as possible.
              </p>
              <p className="text-gray-400 text-sm">
                Usually within 24 hours ⚡
              </p>
            </div>

            <Button
              onClick={() => setShowSuccessModal(false)}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-all duration-200"
            >
              Got it!
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;