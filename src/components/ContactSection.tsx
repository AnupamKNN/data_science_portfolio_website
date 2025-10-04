import { useState, useRef } from 'react';
import { Mail, Linkedin, Github, Send, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        'service_lm3c8tu',     // Replace with your service ID
        'template_z0rhcch',    // Replace with your template ID
        form.current!,
        'HHr19PaJ7riK1SRVn'      // Replace with your public key
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      form.current?.reset();
      
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anupam.rajput09@outlook.com',
      href: 'mailto:anupam.rajput09@outlook.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/anupam-singh-1l/',
      href: 'https://www.linkedin.com/in/anupam-singh-1l/',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'https://github.com/AnupamKNN',
      href: 'https://github.com/AnupamKNN',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: PhoneCall,
      label: 'Phone',
      value: '+91 7666384632',
      href: 'tel:+91 7666384632',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next data science project or explore collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're looking to transform your business with AI, need expert consultation 
                on data science projects, or want to discuss potential collaborations, I'm here to help. 
                Let's turn your data into actionable insights.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-card rounded-xl hover-lift group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${contact.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {contact.label}
                      </p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold text-lg mb-3 text-foreground">
                🚀 Quick Response Guarantee
              </h4>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent projects 
                or time-sensitive discussions, feel free to mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 hover-lift">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="from_email"
                    name="from_email"
                    type="email"
                    required
                    placeholder="your.email@company.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project consultation, collaboration, etc."
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="from_message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="from_message"
                  name="from_message"
                  required
                  placeholder="Tell me about your project, timeline, budget, and specific requirements..."
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-hero"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                By sending this message, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">
            Prefer a Direct Conversation?
          </h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Sometimes the best way to discuss complex data science projects is over a call. 
            I'm available for consultations and project discussions.
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="btn-outline"
            onClick={() => window.open('https://calendar.app.google/f9eothAUMj9vW8sf6', '_blank')}
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
