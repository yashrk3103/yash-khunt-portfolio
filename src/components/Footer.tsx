import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-primary">
              <Terminal className="size-5" />
              <span className="font-mono font-bold">YK</span>
            </div>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Yash Khunt. All rights reserved.
            </span>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span className="text-primary">&gt;</span>
            <span>Crafting secure, scalable web experiences</span>
            <span className="text-primary animate-pulse">_</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/yashrk3103"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="http://www.linkedin.com/in/yash-khunt-a72440250"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:yashkhunt90@gmail.com"
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
