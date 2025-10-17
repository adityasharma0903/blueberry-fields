import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingContactButtons from "./FloatingContactButtons";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  React.useEffect(() => {
    // Configure a single IntersectionObserver for the whole app
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            // Unobserve once revealed to avoid re-work
            observer.unobserve(target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1,
      }
    );

    // Auto-tag common blocks if they are not already annotated
    const autoTagSelectors = [
      'section',
      '.card-hover',
      'img',
      'video',
      'h1, h2, h3, h4',
      'p',
      'li',
    ];

    document.querySelectorAll(autoTagSelectors.join(',')).forEach((el) => {
      const element = el as HTMLElement;
      if (!element.hasAttribute('data-animate')) {
        // Choose sensible defaults per element type
        if (element.matches('h1, h2, h3, h4')) {
          element.setAttribute('data-animate', 'fade-up');
        } else if (element.matches('img, video')) {
          element.setAttribute('data-animate', 'zoom-in');
        } else if (element.matches('.card-hover, section')) {
          element.setAttribute('data-animate', 'fade-up');
        } else {
          element.setAttribute('data-animate', 'fade-in');
        }
      }
    });

    // Add stagger to direct children in grids/containers
    const parentsForStagger = document.querySelectorAll('.container, .grid, section');
    parentsForStagger.forEach((parent) => {
      let index = 0;
      parent.querySelectorAll<HTMLElement>('[data-animate]').forEach((child) => {
        child.setAttribute('data-stagger-index', String(index));
        index += 1;
      });
      (parent as HTMLElement).style.setProperty('--stagger', '70ms');
    });

    // Observe all data-animate elements
    const animatables = document.querySelectorAll<HTMLElement>('[data-animate]');
    animatables.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Layout;