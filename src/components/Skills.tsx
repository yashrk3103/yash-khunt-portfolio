import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Wrench, Terminal, Cpu, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'text-terminal-cyan',
    bgColor: 'bg-terminal-cyan/10',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: Terminal,
    color: 'text-terminal-green',
    bgColor: 'bg-terminal-green/10',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-terminal-blue',
    bgColor: 'bg-terminal-blue/10',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    title: 'Dev Tools',
    icon: Wrench,
    color: 'text-terminal-yellow',
    bgColor: 'bg-terminal-yellow/10',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Docker', 'Vercel', 'Netlify'],
  },
  {
    title: 'Languages',
    icon: Cpu,
    color: 'text-terminal-magenta',
    bgColor: 'bg-terminal-magenta/10',
    skills: ['JavaScript', 'Python', 'C', 'C++', 'Bash'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    skills: ['Leadership', 'Teamwork', 'Communication', 'Problem Solving', 'Time Management'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
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
            <Code2 className="w-3 h-3" />
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Skill Set</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="terminal-card hover-glow"
            >
              <div className="terminal-card-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">
                  {category.title.toLowerCase()}.json
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-bold font-mono">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 terminal-card p-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground">
            <span className="text-sm font-mono">Other:</span>
            {['Responsive UI', 'Chart.js', 'Socket.IO', 'AES/RSA Encryption', 'Streamlit'].map((skill) => (
              <span key={skill} className="text-sm font-mono hover:text-primary transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
