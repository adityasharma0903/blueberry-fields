import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingContactButtons from "./FloatingContactButtons";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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