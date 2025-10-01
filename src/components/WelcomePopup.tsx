import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  Star, 
  BookOpen, 
  Users, 
  Award, 
  Heart,
  GraduationCap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

import heroClassroom from '@/assets/hero-classroom.jpg';
import playground from '@/assets/playground.jpg';
import teacherReading from '@/assets/teacher-reading.jpg';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup every time user visits/reloads the index page
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAdmissionClick = () => {
    handleClose();
    navigate('/admissions');
    // Scroll to admission form after navigation
    setTimeout(() => {
      const formElement = document.querySelector('form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum for Classes 1-5"
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Qualified and experienced educators"
    },
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "Individual attention for every child"
    },
    {
      icon: Award,
      title: "Affordable Fees",
      description: "Only ₹3,200 per month, no admission fee"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden lg:overflow-hidden overflow-y-auto">
        <Card className="border-0 shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-500 h-full lg:h-full">
          <CardContent className="p-0">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            >
              <X size={20} className="text-gray-600" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full lg:h-full">
              {/* Left Side - Images */}
              <div className="relative h-80 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
                <img 
                  src={heroClassroom} 
                  alt="Welcome to Blueberry Fields"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 text-white">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <GraduationCap size={40} className="text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                      Welcome to
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary">
                      Blueberry Fields School
                    </h2>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <Star size={20} className="text-secondary fill-current" />
                    <Star size={20} className="text-secondary fill-current" />
                    <Star size={20} className="text-secondary fill-current" />
                    <Star size={20} className="text-secondary fill-current" />
                    <Star size={20} className="text-secondary fill-current" />
                  </div>
                  
                  <p className="text-lg text-white/90 max-w-md">
                    Nurturing young minds with love, care, and quality education in Derabassi
                  </p>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-6 lg:p-8 bg-white h-full lg:h-full flex flex-col">
                <div className="space-y-6 flex-1 overflow-hidden lg:overflow-hidden overflow-y-auto">
                  {/* Header */}
                  <div className="text-center">
                    <Badge className="bg-primary text-primary-foreground mb-4 text-sm">
                      Admissions Open 2024-25
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-800 mb-3">
                      Join Our Prestigious School
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Give your child the best start in life with our comprehensive education program 
                      designed for Classes 1 to 5.
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <feature.icon size={16} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-xs">{feature.title}</h4>
                          <p className="text-xs text-gray-600 leading-tight">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="bg-primary/5 rounded-xl p-4">
                    <h4 className="font-heading font-bold text-base mb-3 text-center">Why Choose Us?</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-primary" />
                        <span className="text-xs text-gray-700">Small class sizes</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-primary" />
                        <span className="text-xs text-gray-700">Expert teachers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-primary" />
                        <span className="text-xs text-gray-700">Safe environment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-primary" />
                        <span className="text-xs text-gray-700">Affordable fees</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button 
                      onClick={handleAdmissionClick}
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary-light font-medium py-3 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    >
                      <GraduationCap size={18} className="mr-2" />
                      Apply for Admission Now
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                    
                    <Button 
                      onClick={handleClose}
                      variant="outline"
                      size="lg"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium py-2 rounded-full"
                    >
                      Explore Our Website
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="text-center pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600 mb-1">
                      <strong>Contact:</strong> +91 9646781248 | +91 9041041248
                    </p>
                    <p className="text-xs text-gray-500">
                      #885, Blueberry Fields School, Sec-16, Dera Bassi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WelcomePopup;
