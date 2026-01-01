import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'AI-Based Invoice Generator',
    description: 'MERN stack application powered by Gemini AI for automated data extraction, invoice generation, payment reminders, and comprehensive dashboard analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini AI', 'Express.js'],
    github: 'https://github.com/yashrk3103',
    live: '#',
    featured: true,
  },
  {
    title: 'Secure E2E Encrypted Chat',
    description: 'Real-time messaging application with AES & RSA encryption, secure key exchange, and focus on data confidentiality and integrity.',
    tech: ['Flask', 'Socket.IO', 'AES', 'RSA', 'Python'],
    github: 'https://github.com/yashrk3103',
    live: '#',
    featured: true,
  },
  {
    title: 'Email/SMS Spam Detector',
    description: 'NLP-based spam detection with Naive Bayes classifier, featuring LIME-based model explainability and Streamlit UI for interactive analysis.',
    tech: ['Python', 'NLP', 'Naive Bayes', 'LIME', 'Streamlit'],
    github: 'https://github.com/yashrk3103',
    live: '#',
    featured: true,
  },
  {
    title: 'Movie Website UI',
    description: 'Frontend demo project showcasing modern UI design patterns and responsive layouts for a movie browsing experience.',
    tech: ['React', 'CSS3', 'Responsive Design'],
    github: 'https://github.com/yashrk3103',
    live: '#',
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
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
            <Folder className="w-3 h-3" />
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on with attention to detail and user experience
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`project-card ${project.featured ? 'lg:col-span-1' : ''}`}
            >
              {/* Terminal Header */}
              <div className="terminal-card-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-auto flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 hover:bg-secondary rounded-md transition-colors text-muted-foreground hover:text-primary"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 hover:bg-secondary rounded-md transition-colors text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="flex items-center gap-1.5 mb-3">
                    <Sparkles className="w-3 h-3 text-terminal-yellow" />
                    <span className="text-xs font-mono text-terminal-yellow uppercase">Featured</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold font-mono mb-3 group-hover:text-primary">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Terminal Command */}
                <div className="pt-4 border-t border-border">
                  <code className="text-xs font-mono text-muted-foreground">
                    <span className="text-primary">$</span> open project --view
                  </code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
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
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
