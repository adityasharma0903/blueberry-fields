import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Star } from 'lucide-react';

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
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-secondary-foreground">B</span>
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
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                <Twitter size={20} />
              </a>
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
              <li><Link to="/events" className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">Events</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-lg font-heading font-bold">Our Programs</h4>
            <ul className="space-y-3">
              <li><span className="text-sm opacity-90">Nursery (Age 3-4)</span></li>
              <li><span className="text-sm opacity-90">KG-I (Age 4-5)</span></li>
              <li><span className="text-sm opacity-90">KG-II (Age 5-6)</span></li>
              <li><span className="text-sm opacity-90">Class I (Age 6-7)</span></li>
              <li><span className="text-sm opacity-90">Class II-V (Age 7-11)</span></li>
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
                  <p>Blueberry Fields School</p>
                  <p>Main Road, Derabassi</p>
                  <p>Punjab, India - 140507</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span className="text-sm opacity-90">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span className="text-sm opacity-90">info@blueberryfields.edu.in</span>
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
              © 2024 Blueberry Fields School. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm opacity-90 hover:opacity-100 transition-all duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-sm opacity-90 hover:opacity-100 transition-all duration-300">Terms of Service</Link>
              <Link to="/admin" className="text-sm opacity-90 hover:opacity-100 transition-all duration-300">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;