import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Fee Structure', path: '/fees' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-primary text-primary-foreground fixed top-0 left-0 right-0 z-50">
      {/* Decorative Elements */}
      <div className="absolute top-2 left-10 text-secondary animate-float">
        <Star size={20} fill="currentColor" />
      </div>
      <div className="absolute top-6 right-20 text-secondary animate-float" style={{ animationDelay: '2s' }}>
        <Star size={16} fill="currentColor" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - This whole block links to the homepage "/" */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-heading font-bold text-secondary-foreground">B</span>
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold">Blueberry Fields</h1>
              <p className="text-sm opacity-90">School Derabassi</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-primary-light ${
                  isActivePath(item.path) ? 'bg-secondary text-secondary-foreground' : 'hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-medium px-6 py-2 rounded-full"
            >
              <Link to="/admissions">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActivePath(item.path) 
                    ? 'bg-secondary text-secondary-foreground' 
                    : 'hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button 
                asChild 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary-light"
              >
                <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                  Enroll Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;