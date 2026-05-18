import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu first, then scroll after exit animation completes.
  // Without this, the browser's native hash scroll races with the
  // AnimatePresence exit animation and ends up at the wrong position.
  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const sectionId = href.replace('#', '');
    // 300ms matches the exit animation duration (0.25s + small buffer)
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <LazyMotion features={domAnimation}>
      <>
        <m.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : ''
          }`}
        >
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <a href="#home" className="flex items-center gap-2 text-xl font-semibold font-mono text-primary">
                <Terminal className="size-6" />
                <span>YK</span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="nav-link">
                    {item.label}
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <a href="#contact" className="btn-terminal text-sm">
                  Get In Touch
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground"
              >
                {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </nav>
          </div>
        </m.header>

        {/* Mobile Menu — separate fixed element so it doesn't clip pointer events */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden' }}
              className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border"
            >
              <div className="container mx-auto p-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleMobileNavClick(e, item.href)}
                      className="px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors font-mono text-sm"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={(e) => handleMobileNavClick(e, '#contact')}
                    className="btn-terminal text-center mt-2"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </>
    </LazyMotion>
  );
};

export default Navbar;
