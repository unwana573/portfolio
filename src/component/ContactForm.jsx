import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
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
  );
};

export default ContactForm;