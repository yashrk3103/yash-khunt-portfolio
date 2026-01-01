import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Shield, Plug, Brain, Cloud, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    description: 'Build scalable MERN stack applications with authentication, dashboards, and real-world features.',
    color: 'text-terminal-cyan',
    bgColor: 'bg-terminal-cyan/10',
  },
  {
    icon: Shield,
    title: 'Secure Application Development',
    description: 'Implement secure authentication, encryption concepts, and best practices for web security.',
    color: 'text-terminal-green',
    bgColor: 'bg-terminal-green/10',
  },
  {
    icon: Plug,
    title: 'API Development & Integration',
    description: 'Design and develop RESTful APIs and integrate AI or third-party services seamlessly.',
    color: 'text-terminal-blue',
    bgColor: 'bg-terminal-blue/10',
  },
  {
    icon: Brain,
    title: 'AI-Integrated Web Solutions',
    description: 'Develop intelligent web apps for automation, classification, and data extraction.',
    color: 'text-terminal-magenta',
    bgColor: 'bg-terminal-magenta/10',
  },
  {
    icon: Cloud,
    title: 'Deployment & Hosting',
    description: 'Deploy applications using Vercel, Netlify, and Docker-based workflows efficiently.',
    color: 'text-terminal-yellow',
    bgColor: 'bg-terminal-yellow/10',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">
            <Sparkles className="w-3 h-3" />
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              <div className="p-6">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${service.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-mono mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Terminal-style indicator */}
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs font-mono text-muted-foreground">
                    <span className="text-primary">$</span> service --start
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
