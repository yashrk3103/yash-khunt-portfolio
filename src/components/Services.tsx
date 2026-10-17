import { LazyMotion, domAnimation, m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Plug, Brain, Cloud, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    description: 'Build scalable MERN stack applications with authentication, dashboards, and real-world features.',
    color: 'text-terminal-cyan',
    bgColor: 'bg-terminal-cyan/10',
  },
  {
    icon: Database,
    title: 'Backend & Database Development',
    description: 'Build reliable backend services, data models, and integrations for production-ready applications.',
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
    <LazyMotion features={domAnimation}>
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">
            <Sparkles className="size-3" />
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </m.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              <div className="p-6">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${service.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`size-6 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold font-mono mb-3 group-hover:text-primary transition-colors">
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
            </m.div>
          ))}
        </div>
      </div>
    </section>
    </LazyMotion>
  );
};

export default Services;
