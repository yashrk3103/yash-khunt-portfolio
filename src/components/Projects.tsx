import { LazyMotion, domAnimation, m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder, Sparkles, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'Zirwa Qurbani Service',
    subtitle: 'E-Commerce & Booking Platform',
    description:
      'Full-stack booking platform built with Next.js App Router featuring slot-based order management, a multi-step checkout flow, real-time status tracking, and automated invoice generation.',
    bullets: [
      'Slot-based order management with multi-step checkout flow using Next.js App Router',
      'Dynamic order system with real-time status tracking, discount engine & auto invoice generation',
      'Responsive mobile-first UI across 10+ pages with reusable TypeScript components',
      'Client-side state management via React Hooks and localStorage for cross-page persistence',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    github: 'https://github.com/yashrk3103/bak-next',
    live: 'https://www.zirwaqurbani.in/',
  },
  {
    title: 'AI-Based Invoice Generator',
    subtitle: 'Powered By Gemini AI',
    description:
      'Full-stack AI-powered invoice generation system enabling automated invoice creation from user inputs and uploaded documents with role-based access control.',
    bullets: [
      'Automated invoice creation from user inputs & uploaded documents using Gemini API',
      'AI-driven data extraction to generate structured invoices with minimal manual intervention',
      'Secure REST APIs for invoice CRUD with role-based access control',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
    github: 'https://github.com/yashrk3103/AI-Invoice-Generator',
    live: 'https://vercel-front-ten.vercel.app/',
  },
  {
    title: 'User Management System',
    subtitle: 'Secure RBAC Platform',
    description:
      'Full-stack MERN platform with JWT/bcrypt authentication and Role-Based Access Control for Admin, Manager, and User tiers with comprehensive audit logging.',
    bullets: [
      'JWT & bcrypt auth with token validation, session timeout, and inactive user lockout',
      'RBAC architecture with data isolation and protected API endpoints for 3 role tiers',
      'Admin panel with user lifecycle management, search/filtering, and detailed audit logging',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'bcrypt'],
    github: 'https://github.com/yashrk3103/user-management',
    live: 'https://user-management-system01.netlify.app',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <LazyMotion features={domAnimation}>
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">
            <Folder className="size-3" />
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Live, production-grade applications built with modern full-stack technologies
          </p>
        </m.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <m.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="project-card flex flex-col"
            >
              {/* Terminal Header */}
              <div className="terminal-card-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-auto flex items-center gap-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Source Code"
                    className="p-1.5 hover:bg-secondary rounded-md transition-colors text-muted-foreground hover:text-primary"
                  >
                    <Github className="size-4" />
                  </a>
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Featured Badge */}
                <div className="flex items-center gap-1.5 mb-3">
                  <Sparkles className="size-3 text-terminal-yellow" />
                  <span className="text-xs font-mono text-terminal-yellow uppercase">Live Project</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold font-mono mb-0.5">{project.title}</h3>
                <p className="text-xs font-mono text-primary mb-3">{project.subtitle}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5 flex-1">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="size-3.5 text-terminal-green mt-0.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-mono font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-border text-sm font-mono rounded-lg hover:bg-secondary hover:text-primary transition-all duration-200"
                  >
                    <Github className="size-4" />
                    Code
                  </a>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* View More CTA */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yashrk3103"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-terminal-outline"
          >
            <Github className="size-4" />
            View All Projects on GitHub
          </a>
        </m.div>
      </div>
    </section>
    </LazyMotion>
  );
};

export default Projects;