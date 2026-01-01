import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">
            <MessageSquare className="w-3 h-3" />
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="terminal-card">
              <div className="terminal-card-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">contact_info.json</span>
              </div>
              <div className="p-6 space-y-6">
                {/* Email */}
                <a
                  href="mailto:yashkhunt90@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-mono text-foreground group-hover:text-primary transition-colors">
                      yashkhunt90@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:9033043868"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 border border-border hover:border-primary transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-terminal-green/10 text-terminal-green group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-mono text-foreground group-hover:text-primary transition-colors">
                      +91 9033043868
                    </p>
                  </div>
                </a>

                {/* Social Links */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/yashrk3103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="http://www.linkedin.com/in/yash-khunt-a72440250"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="terminal-card">
              <div className="terminal-card-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">send_message.sh</span>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                    <span className="text-primary">$</span> name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="input-terminal"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                    <span className="text-primary">$</span> email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="input-terminal"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                    <span className="text-primary">$</span> message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="input-terminal resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-terminal w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⟳</span>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>$ send message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
