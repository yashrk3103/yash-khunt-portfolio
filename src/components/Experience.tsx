import { LazyMotion, domAnimation, m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Shield } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Synodica Solutions Pvt. Ltd.',
    location: 'Surat',
    period: 'Jan 2026 – Present', // Updated date
    description: [
      'Developing and customizing modules in Odoo ERP using Python and XML',
      'Managing Linux-based server environments for deployment and testing',
      'Collaborating with senior developers to optimize database queries and performance',
    ],
    tech: ['Python', 'Linux', 'Odoo', 'PostgreSQL'], // Added tech stack
    current: true,
  },
  {
    title: 'Cyber Security Intern',
    company: 'Elevate Labs',
    location: 'Remote',
    period: 'June 2025 – July 2025',
    description: [
      'Working on application security fundamentals',
      'Learning security assessment methodologies',
      'Hands-on experience with security tools',
    ],
    tech: ['Network Traffic Analysis', 'Encryption', ' Python ', 'Vulnerability Scanning' ],
    current: false, // Changed to false since the new one is current
  },
  {
    title: 'Cyber Security Intern',
    company: 'Extion Infotech',
    location: 'Remote',
    period: 'August 2024 – November 2024',
    description: [
      'Gained exposure to real-world cybersecurity challenges',
      'Learned about application security best practices',
      'Participated in security awareness initiatives',
    ],
    tech: ['Kali Linux', 'Network Traffic Analysis', 'Vulnerability Scanning', 'Wireshark', 'DoS/DDoS Attack Mitigation Techniques'],
    current: false,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <LazyMotion features={domAnimation}>
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">
            <Briefcase className="size-3" />
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </m.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="timeline-line" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <m.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="timeline-dot top-2">
                  <Shield className="size-3 text-primary" />
                </div>

                {/* Content Card */}
                <div className="terminal-card hover-glow">
                  <div className="terminal-card-header">
                    <span className="terminal-dot terminal-dot-red" />
                    <span className="terminal-dot terminal-dot-yellow" />
                    <span className="terminal-dot terminal-dot-green" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono">
                      experience_{index + 1}
                    </span>
                    {exp.current && (
                      <span className="ml-auto px-2 py-0.5 text-xs font-mono bg-terminal-green/20 text-terminal-green rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Title & Company */}
                    <h3 className="text-xl font-semibold font-mono text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-mono text-sm mb-3">{exp.company}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="size-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Badge Row (New Addition) */}
                    {exp.tech && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                        {exp.tech.map((t) => (
                          <span key={t} className="px-2 py-1 text-[10px] font-mono bg-secondary text-secondary-foreground rounded border border-border">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
};

export default Experience;