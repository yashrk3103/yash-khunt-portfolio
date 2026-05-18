import { LazyMotion, domAnimation, m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Shield, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <LazyMotion features={domAnimation}>
    <section id="about" className="py-24 relative" ref={ref}>
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Know More <span className="text-primary">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer focused on building secure, scalable applications
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="terminal-card">
              <div className="terminal-card-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">about.md</span>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I am an IT undergraduate with a deep passion for building real-world applications 
                  that solve meaningful problems. My journey in development started with curiosity 
                  and has evolved into a dedicated pursuit of excellence in full-stack development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong focus on <span className="text-primary">security</span>, 
                  <span className="text-primary"> scalability</span>, and 
                  <span className="text-primary"> clean architecture</span>, I strive to create 
                  applications that are not just functional but also maintainable and efficient.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technologies 
                  and best practices in the ever-evolving world of web development.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-6"
            >
              {[
                { value: '8.77', label: 'CGPA' },
                { value: '3+', label: 'Live Projects' },
                { value: '3', label: 'Internships' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="terminal-card p-4 text-center hover-glow"
                >
                  <span className="text-2xl sm:text-3xl font-bold text-primary font-mono">
                    {stat.value}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </m.div>
          </m.div>

          {/* Right - Education & Highlights */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div className="terminal-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <h3 className="text-lg font-semibold font-mono">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground">B.Tech in Information Technology</h4>
                  <p className="text-primary text-sm font-mono">Sarvajanik University</p>
                  <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                    <span>2022 – 2026</span>
                    <span className="text-terminal-green">CGPA: 8.77</span>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground">Higher Secondary (PCM)</h4>
                  <p className="text-primary text-sm font-mono">Kaushal Vidyabhavan</p>
                  <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                    <span>2022</span>
                    <span className="text-terminal-green">76%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="terminal-card p-5 hover-glow">
                <div className="p-2 rounded-lg bg-accent/10 text-accent w-fit mb-3">
                  <Code2 className="size-5" />
                </div>
                <h4 className="font-semibold font-mono mb-2">Clean Architecture</h4>
                <p className="text-sm text-muted-foreground">
                  Building maintainable and scalable codebases
                </p>
              </div>
              
              <div className="terminal-card p-5 hover-glow">
                <div className="p-2 rounded-lg bg-terminal-green/10 text-terminal-green w-fit mb-3">
                  <Shield className="size-5" />
                </div>
                <h4 className="font-semibold font-mono mb-2">Security Focused</h4>
                <p className="text-sm text-muted-foreground">
                  Implementing secure authentication & encryption
                </p>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
};

export default About;
