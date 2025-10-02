import React, { useRef, useState } from "react";

import Layout from '../components/Layout';
import WaveDivider from '../components/WaveDivider';
import WelcomePopup from '../components/WelcomePopup';
import BackgroundCarousel from '../components/BackgroundCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { 
  BookOpen, 
  Users, 
  Award, 
  Heart, 
  Star, 
  Play,
  ArrowRight,
  Quote,
  Calendar,
  MapPin
} from 'lucide-react';

// Import images (Removed the ones replaced by URLs)
import heroClassroom from '@/assets/hero-classroom.jpg';
import playground from '@/assets/playground.jpg';
import teacherReading from '@/assets/teacher-reading.jpg';
import artClass from '@/assets/art-class.jpg';
import main from '@/assets/main.mp4';
import logo from '@/assets/logo.jpg';
import activity from '@/assets/activity.jpg';
import celeberate from '@/assets/celeberate.jpg';
import school from '@/assets/school.jpg';

const Home = () => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToVideoSection = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const features = [
    {
      icon: BookOpen,
      title: "LEARNING",
      description: "Interactive and engaging curriculum designed for young minds",
      color: "bg-primary"
    },
    {
      icon: Heart,
      title: "CARE",
      description: "Nurturing environment with individual attention for every child",
      color: "bg-secondary"
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description: "Strong parent-school partnership for holistic development",
      color: "bg-primary"
    },
    {
      icon: Award,
      title: "EXCELLENCE",
      description: "Quality education with focus on character building",
      color: "bg-primary"
    }
  ];

  const programs = [
    {
      title: "Nursery Program",
      age: "Age 3-4 years",
      description: "Foundation learning through play-based activities, basic motor skills development, and social interaction.",
      image: artClass,
      features: ["Play-based Learning", "Motor Skills", "Social Development"]
    },
    {
      title: "Kindergarten Program", 
      age: "Age 4-6 years",
      description: "Structured learning with focus on literacy, numeracy, and creative expression through art and music.",
      image: teacherReading,
      features: ["Literacy Foundation", "Creative Arts", "Problem Solving"]
    },
    {
      title: "Elementary Program",
      age: "Age 6-11 years", 
      description: "Comprehensive curriculum covering all subjects with emphasis on critical thinking and academic excellence.",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      features: ["Academic Excellence", "Critical Thinking", "Leadership Skills"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "My daughter loves coming to school every day. The teachers are so caring and the learning environment is fantastic!",
      rating: 5
    },
    {
      name: "Rajesh Kumar", 
      role: "Parent",
      content: "The holistic development approach at Blueberry Fields has made such a positive impact on my son's confidence.",
      rating: 5
    },
    {
      name: "Anjali Singh",
      role: "Parent", 
      content: "Excellent infrastructure and qualified teachers. I'm very happy with my child's progress here.",
      rating: 5
    }
  ];

  const newsArticles = [
    {
      title: "Annual Sports Day Celebration",
      excerpt: "Students showcased their athletic talents in a day filled with fun activities and healthy competition.",
      image: playground,
      date: "March 15, 2024",
      category: "Events"
    },
    {
      title: "Science Exhibition Success",
      excerpt: "Young scientists presented innovative projects demonstrating creativity and scientific thinking.",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      date: "March 10, 2024", 
      category: "Academics"
    },
    {
      title: "New Art Wing Inauguration",
      excerpt: "State-of-the-art art studio opened to foster creativity and artistic expression among students.",
      image: artClass,
      date: "March 5, 2024",
      category: "Infrastructure"
    }
  ];

  return (
    <Layout>
      <WelcomePopup />
      {/* Hero Section */}
      <section className="bg-primary relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Carousel */}
        <BackgroundCarousel />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 text-secondary animate-float opacity-60 z-10">
          <Star size={32} fill="currentColor" />
        </div>
        <div className="absolute top-40 right-32 text-secondary animate-float opacity-40 z-10" style={{ animationDelay: '2s' }}>
          <Star size={24} fill="currentColor" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-secondary animate-float opacity-50 z-10" style={{ animationDelay: '4s' }}>
          <Star size={28} fill="currentColor" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                Best Kindergarten For
                <span className="block text-secondary">Your Children</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Nurturing young minds with love, care, and quality education in Derabassi. 
                Building strong foundations for lifelong learning and character development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-medium px-8 py-4 text-lg rounded-full"
                >
                  Enroll Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-primary-foreground text-primary border-primary-foreground font-medium px-8 py-4 text-lg rounded-full"
                  onClick={scrollToVideoSection}
                >
                  <Play size={20} className="mr-2" />
                  Virtual Tour
                </Button>
              </div>
            </div>
            
            {/* <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src={heroClassroom} 
                    alt="Happy children in classroom" 
                    className="w-full h-48 object-cover organic-shape shadow-strong"
                  />
                  <img 
                    src={artClass} 
                    alt="Art activities" 
                    className="w-full h-32 object-cover organic-shape-2 shadow-strong"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src={teacherReading} 
                    alt="Teacher reading to children" 
                    className="w-full h-32 object-cover organic-shape-3 shadow-strong"
                  />
                  <img 
                    src={playground} 
                    alt="Children playing" 
                    className="w-full h-48 object-cover organic-shape shadow-strong"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-soft">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4 rounded-full"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-accent/30 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dtbelwhff/image/upload/v1759120312/girlchild_pfzy2y.jpg"
                alt="School library" 
                className="w-full h-96 object-cover rounded-3xl shadow-medium "
              />
              <div className="absolute -top-4 -right-4 bg-secondary p-4 rounded-2xl shadow-strong">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-secondary-foreground">2+</div>
                  <div className="text-sm text-secondary-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Badge className="bg-secondary text-secondary-foreground">About Our School</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                The best playschool 
                <span className="text-primary"> for ideal your kids</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Blueberry Fields School, we believe every child is unique and deserves personalized attention. 
                Our experienced educators create a nurturing environment where children develop confidence, 
                creativity, and a lifelong love for learning.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">✓ Qualified Teachers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">✓ Safe Environment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">✓ Small Class Sizes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">✓ Individual Attention</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-light rounded-full">
                Learn More About Us
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Hidden on mobile */}
      <section className="py-20 bg-primary relative overflow-hidden hidden md:block">
        {/* Decorative Stars */}
        <div className="absolute top-20 left-16 text-secondary animate-float opacity-40">
          <Star size={28} fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-20 text-secondary animate-float opacity-60" style={{ animationDelay: '3s' }}>
          <Star size={24} fill="currentColor" />
        </div>

        {/* <WaveDivider position="top" /> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Our Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Most Popular Programs
              <span className="block">instead of classes.</span>
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive programs designed for different age groups, ensuring every child receives 
              appropriate learning experiences for their developmental stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="bg-background border-0 shadow-strong card-hover">
                <div className="p-6">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <Badge variant="outline" className="mb-3">{program.age}</Badge>
                  <h3 className="font-heading font-bold text-xl mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-light rounded-full">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* Video Tour Section */}
      <section ref={videoSectionRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-primary-foreground mb-4">Virtual Tour</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Take a Video Tour
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our beautiful campus and facilities through our virtual tour. 
              See where your child will learn, play, and grow.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
<video
  ref={videoRef}
  src="/videos/main.mp4"
  poster={logo}
  className="w-full h-96 object-cover rounded-3xl shadow-strong"
  controls={isPlaying}
/>


      {/* Overlay Play Button */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/20 rounded-3xl flex items-center justify-center">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary-light w-20 h-20 rounded-full p-0"
            onClick={() => {
              videoRef.current?.play();
              setIsPlaying(true);
            }}
          >
            <Play size={32} />
          </Button>
        </div>
      )}
    </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-16 left-20 text-primary animate-float opacity-60">
          <Star size={32} fill="currentColor" />
        </div>
        <div className="absolute bottom-16 right-16 text-primary animate-float opacity-40" style={{ animationDelay: '2s' }}>
          <Star size={24} fill="currentColor" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground">Our Faculty</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground">
                Meet Expert Teacher
              </h2>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Our dedicated and qualified teachers are passionate about early childhood education. 
                They bring years of experience and innovative teaching methods to create engaging 
                learning experiences for every child.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-heading font-bold text-secondary-foreground">10+</div>
                  <div className="text-sm text-secondary-foreground/80">Expert Teachers</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl">
                  <div className="text-2xl font-heading font-bold text-secondary-foreground">15+</div>
                  <div className="text-sm text-secondary-foreground/80">Years Experience</div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary-light rounded-full"
              >
                Meet Our Team
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src={teacherReading} alt="Teacher 1" className="w-full h-48 object-cover organic-shape shadow-strong" />
              <img src="https://res.cloudinary.com/dtbelwhff/image/upload/v1759120316/principal_wf9pxu.jpg" alt="Teacher 2" className="w-full h-48 object-cover organic-shape-2 shadow-strong" />
              <img src="https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg" alt="Teacher 3" className="w-full h-48 object-cover organic-shape-3 shadow-strong" />
              <img src={artClass} alt="Teacher 4" className="w-full h-48 object-cover organic-shape shadow-strong" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-primary-foreground mb-4">Photo Gallery</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a glimpse into daily life at Blueberry Fields School. 
              See our students learning, playing, and creating memories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="https://res.cloudinary.com/dtbelwhff/image/upload/v1759120311/independence_ehq9b1.jpg" alt="Gallery 1" className="w-full h-48 object-cover rounded-xl shadow-soft card-hover" />
            <img src={activity} alt="Gallery 2" className="w-full h-48 object-cover rounded-xl shadow-soft card-hover" />
            <img src="https://res.cloudinary.com/dtbelwhff/image/upload/v1759120320/skating_iztfjz.jpg" alt="Gallery 3" className="w-full h-48 object-cover rounded-xl shadow-soft card-hover" />
            <img src={celeberate} alt="Gallery 4" className="w-full h-48 object-cover rounded-xl shadow-soft card-hover " />
            <img src="https://res.cloudinary.com/dtbelwhff/image/upload/v1759120315/medical_ltgajx.jpg" alt="Gallery 5" className="w-full h-48 object-cover rounded-xl shadow-soft card-hover" />
            <img src={school} alt="Gallery 6" className="w-full h-48 object-cover rounded-xl shadow-soft card-hover" />
            <img src="https://res.cloudinary.com/dtbelwhff/image/upload/v1759120315/independence2_zjrd4k.jpg" alt="Gallery 7" className="w-full h-48 object-cover rounded-xl shadow-soft card-hover" />
            <img src="https://res.cloudinary.com/dtbelwhff/image/upload/v1759120314/dandia_yudb86.png" alt="Gallery 8" className="w-full h-48 object-cover rounded-xl shadow-soft card-hover" />
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-light rounded-full">
              View All Photos
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-20 left-20 text-secondary animate-float opacity-40">
          <Star size={28} fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-32 text-secondary animate-float opacity-60" style={{ animationDelay: '4s' }}>
          <Star size={24} fill="currentColor" />
        </div>

        {/* <WaveDivider position="top" /> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              What did the guardians say to us
            </h2>
            <Quote size={48} className="text-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-0 shadow-strong p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Badge className="bg-primary text-primary-foreground mb-4">Latest Updates</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Latest News,
                <span className="block">Blog & Articles</span>
              </h2>
            </div>
            <Button 
              variant="outline" 
              className="rounded-full"
            >
              View All
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-soft card-hover overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={16} className="mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto rounded-none">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-16 left-24 text-primary animate-float opacity-50">
          <Star size={32} fill="currentColor" />
        </div>
        <div className="absolute bottom-16 right-20 text-primary animate-float opacity-60" style={{ animationDelay: '3s' }}>
          <Star size={28} fill="currentColor" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary text-primary-foreground mb-6">Stay Connected</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
            Enter Your Email To
            <span className="block">Get The Latest News</span>
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about school events, 
            important announcements, and educational resources.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-0 text-secondary-foreground placeholder-secondary-foreground/60"
            />
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary-light px-8 rounded-full"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;