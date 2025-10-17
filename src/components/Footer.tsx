import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Star } from 'lucide-react';
// Import the logo image from the assets folder
import logoImage from '@/assets/logo-image.jpg'; // Ensure this path is correct

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-20 text-secondary animate-float opacity-60">
        <Star size={24} fill="currentColor" />
      </div>
      <div className="absolute top-20 right-32 text-secondary animate-float opacity-40" style={{ animationDelay: '3s' }}>
        <Star size={18} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-1/4 text-secondary animate-float opacity-30" style={{ animationDelay: '1.5s' }}>
        <Star size={20} fill="currentColor" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center overflow-hidden">
                {/* Replace the span with an img tag for the logo */}
                <img src={logoImage} alt="Blueberry Fields School Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Blueberry Fields</h3>
                <p className="text-sm opacity-90">School Derabassi</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Nurturing young minds with love, care, and quality education. 
              We provide a safe and inspiring environment for children from Nursery to 5th Grade.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100090585805215&rdid=uEAAcPIH8v7xlQcZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18cTp5cFNj%2F#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/blueberryfieldsschool" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Twitter size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">About Us</Link></li>
              <li><Link to="/curriculum" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">Curriculum</Link></li>
              <li><Link to="/admissions" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">Admissions</Link></li>
              <li><Link to="/faculty" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">Faculty</Link></li>
              <li><Link to="/facilities" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">Facilities</Link></li>
              {/* <li><Link to="/events" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">Events</Link></li> */}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6 hidden md:block">
            <h4 className="text-lg font-heading font-bold">Our Programs</h4>
            <ul className="space-y-3">
              <li><span className="text-sm opacity-90">Play Group</span></li>
              <li><span className="text-sm opacity-90">Nursery</span></li>
              <li><span className="text-sm opacity-90">LKG</span></li>
              <li><span className="text-sm opacity-90">UKG </span></li>
              <li><span className="text-sm opacity-90">Class I-V </span></li>
              <li><Link to="/curriculum" className="text-sm text-secondary hover:text-secondary-light transition-all duration-300">View Full Curriculum →</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-bold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>#885, Blueberry Fields School, Sec-16,</p>
                  <p>Adjacent Sukhmani Engineering College</p>
                  <p>Sarswati Vihar, Dera Bassi,</p>
                  <p>District-S.A.S Nagar, Punjab 140507</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span className="text-sm opacity-90">+91 9646781248, +91 9041041248</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span className="text-sm opacity-90">blueberryfieldsschool@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-secondary mt-1 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>Mon - Fri: 8:00 AM - 3:00 PM</p>
                  <p>Office Hours: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90">
              © 2025 Blueberry Fields School. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <p className="text-sm opacity-90">
                Developed by{' '}
                <a
                  href="https://mokshdigital.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-all duration-300 underline underline-offset-2"
                >
                  Moksh Digital
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;