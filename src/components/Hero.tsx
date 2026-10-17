import { useState, useEffect, useRef } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const roles = [
  'Full-Stack Developer',
  'MERN Stack Developer',
  'Software Engineer',
];

const Hero = () => {
  const currentRoleRef = useRef(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleRef.current];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            currentRoleRef.current = (currentRoleRef.current + 1) % roles.length;
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <LazyMotion features={domAnimation}>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Available Badge */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="relative flex size-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
                <span className="relative inline-flex rounded-full size-3 bg-terminal-green"></span>
              </span>
              <span className="text-terminal-green text-sm font-mono uppercase tracking-wider">
                Available for work
              </span>
            </m.div>

            {/* Main Heading */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6"
            >
              Hi,I'm{' '}
              <span className="gradient-text">Yash Khunt</span>
            </m.h1>

            {/* Typing Animation */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-primary font-mono mb-6"
            >
              <span className="text-muted-foreground">{'> '}</span>
              {displayText}
              <span className="typing-cursor" />
            </m.div>

            {/* Description */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl"
            >
              Passionate IT graduate with hands-on experience in full-stack web
              development using the MERN stack. Proficient in building responsive, 
              scalable, and dynamic web applications.
            </m.p>

            {/* CTA Buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a href="#projects" className="btn-terminal">
                View Projects
              </a>
              <a href="#contact" className="btn-terminal-outline">
                Contact Me
              </a>
            </m.div>

            {/* Social Links */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/yashrk3103"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover-glow border border-border"
              >
                <Github className="size-5" />
              </a>
              <a
                href="http://www.linkedin.com/in/yash-khunt-a72440250"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover-glow border border-border"
              >
                <Linkedin className="size-5" />
              </a>
              <a
                href="mailto:yashkhunt90@gmail.com"
                className="p-3 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover-glow border border-border"
              >
                <Mail className="size-5" />
              </a>
            </m.div>
          </m.div>

          {/* Right Content - Profile Card */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-2xl blur-xl opacity-50 animate-pulse-glow" />
              
              {/* Profile Card */}
              <div className="relative terminal-card max-w-sm">
                {/* Terminal Header */}
                <div className="terminal-card-header">
                  <span className="terminal-dot terminal-dot-red" />
                  <span className="terminal-dot terminal-dot-yellow" />
                  <span className="terminal-dot terminal-dot-green" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">profile</span>
                </div>
                
                {/* Profile Image */}
                <div className="p-6">
                  <div className="relative mb-4">
                    <img
                      src={profilePhoto}
                      alt="Yash Khunt"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <div className="absolute bottom-2 right-2 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-mono text-primary border border-primary/30">
                      {'</>'} Developer
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold font-mono text-foreground">Yash Khunt</h3>
                  <p className="text-muted-foreground text-sm mb-4">Gujarat, India</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-mono">Full-Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono uppercase tracking-wider">Scroll Down</span>
            <m.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="size-5" />
            </m.div>
          </a>
        </m.div>
      </div>
    </section>
    </LazyMotion>
  );
};

export default Hero;
