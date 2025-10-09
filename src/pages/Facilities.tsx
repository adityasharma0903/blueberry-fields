import React from 'react';
import Layout from '../components/Layout';
import WaveDivider from '../components/WaveDivider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Monitor,
  FlaskConical,
  Music,
  UtensilsCrossed,
  Users,
  Star,
  CheckCircle,
  PlayCircle,
  Gamepad2,
  Palette,
  HelpCircle,
  BadgePercent,
  Sun, 
  Moon,
  MapPin,
  BriefcaseMedical,
  Shield,
  Cctv
} from 'lucide-react';
// import library from '@/assets/library.jpg';
// import scienceLab from '@/assets/science-lab.jpg';
// import computerLab from '@/assets/computer-lab.jpg';
// import musicRoom from '@/assets/music-room.jpg';
// import playground from '@/assets/playground.jpg';
// import cafeteria from '@/assets/cafeteria.jpg';
// import artClass from '@/assets/art-class.jpg';
// import heroClassroom from '@/assets/hero-classroom.jpg';

const Facilities = () => {
  const facilities = [
    {
      name: "Modern Library",
      description: "Extensive collection of age-appropriate books, digital resources, and quiet reading spaces to foster love for learning.",
      // image: library,
      icon: BookOpen,
      features: ["5000+ Books Collection", "Digital Learning Resources", "Reading Corners", "Story Time Area"],
      highlight: "Interactive Learning Zone"
    },
    {
      name: "Transport",
      description: "Safe and reliable school transport service ensuring comfortable travel for students across the city.",
      // image: library,
      icon: BookOpen,
      features: ["GPS-Enabled Buses", "Trained Drivers & Attendants", "Safe Pick-up & Drop-off", "Comfortable Seating"],
      highlight: "Secure Student Travel"
    },
    {
      name: "Dance Academy",
      description: "A vibrant space where students explore classical and modern dance forms, building confidence, rhythm, and creativity.",
      // image: computerLab,
      icon: Monitor,
      features: ["Trained Instructors", "Classical & Modern Dance", "Annual Performances", "Confidence & Teamwork"],
      highlight: "Express Through Dance"
    },
    {
      name: "Music & Singing",
      description: "A creative hub where students learn vocal and instrumental music, fostering talent, expression, and passion for the arts.",
      // image: musicRoom,
      icon: Music,
      features: ["Vocal & Instrumental Training", "Individual & Group Sessions", "Stage Performances", "Creativity & Expression"],
      highlight: "Melody in Learning"
    },
    {
      name: "Art & Craft Studio",
      description: "Creative workspace with all necessary materials for painting, drawing, and craft activities to nurture artistic skills.",
      // image: artClass,
      icon: Palette,
      features: ["Art Supplies", "Craft Materials", "Display Boards", "Creative Projects"],
      highlight: "Art Exhibitions"
    },
    {
      name: "Playground & Sports Room",
      description: "Large outdoor play area with age-appropriate equipment and sports facilities for physical development and recreation.",
      // image: playground,
      icon: Gamepad2,
      features: ["Swings & Slides", "Sports Equipment", "Safe Play Area", "Physical Activities"],
      highlight: "Daily Outdoor Play"
    },
    {
      name: "Taekwondo",
      description: "A dedicated martial arts program that teaches self-discipline, focus, and physical fitness through Taekwondo training.",
      // image: playground,
      icon: Gamepad2,
      features: ["Self-Defense Techniques", "Discipline & Focus", "Physical Fitness", "Trained Instructors"],
      highlight: "Strength & Confidence"
    },
    {
      name: "Smart Classrooms",
      description: "Technology-enabled classrooms with interactive boards, projectors, and multimedia resources for enhanced learning.",
      // image: heroClassroom,
      icon: Users,
      features: ["Interactive Whiteboards", "Projectors", "Audio-Visual Aids", "Climate Control"],
      highlight: "Interactive Learning"
    },
    {
      name: "Skating Classes",
      description: "Fun and safe skating sessions designed to improve balance, coordination, and confidence in young learners.",
      // image: heroClassroom,
      icon: Users,
      features: ["Safe Skating Gear", "Beginner to Advanced Levels", "Balance & Coordination Training", "Experienced Coaches"],
      highlight: "Glide with Confidence"
    },
    {
      name: "Sibling Waiver",
      description: "A special fee concession offered to families with more than one child enrolled in our school, promoting and supporting sibling education together.",
      // image: heroClassroom,
      icon: BadgePercent,
      features: ["Fee Concession for Siblings", "Applicable for All Grades", "Encourages Family Enrollment", "Simple Application Process"],
      highlight: "Together in Learning and Growth"
    },
    {
      name: "Summer Camp",
      description: "An exciting summer program filled with fun activities, learning opportunities, and team-building experiences that keep students engaged and active.",
      // image: heroClassroom,
      icon: Sun,
      features: [
        "Fun & Educational Activities",
        "Outdoor Games & Sports",
        "Creative Workshops",
        "Experienced Camp Instructors"
      ],
      highlight: "Fun, Learning and Adventure All Summer Long"
    },
    {
      name: "CCTV Cameras",
      description: "State-of-the-art CCTV surveillance ensures the safety and security of students and staff across the campus, providing a secure learning environment.",
      // image: heroClassroom,
      icon: Cctv,
      features: [
        "24/7 Surveillance",
        "Covers All Key Areas",
        "Monitored by Security Personnel",
        "Ensures Student & Staff Safety"
      ],
      highlight: "Safety and Security, Always"
    },
    {
      name: "Medical Camp",
      description: "Regular health check-ups and medical guidance to ensure the well-being of students and staff.",
      // image: heroClassroom,
      icon: BriefcaseMedical,
      features: [
        "Regular Health Check-ups",
        "Medical Guidance and Awareness",
        "On-campus Medical Support",
        "Health Education Sessions"
      ],
      highlight: "Caring for Health and Wellness"
    },
    {
      name: "Educational & Fun Trips",
      description: "Exciting trips that combine learning with fun experiences, helping students explore and understand the world beyond the classroom.",
      // image: heroClassroom,
      icon: MapPin,
      features: [
        "Educational Excursions",
        "Interactive Learning Experiences",
        "Outdoor Adventures",
        "Team-building Activities"
      ],
      highlight: "Learning Through Exploration"
    },
    {
      name: "Evening Classes in Summer",
      description: "Special summer evening sessions to help students revise, learn new skills, and stay engaged during the vacation.",
      // image: heroClassroom,
      icon: Moon,
      features: [
        "Revision & Skill Building",
        "Interactive Sessions",
        "Flexible Timings",
        "Engaging Summer Activities"
      ],
      highlight: "Stay Sharp, Learn More"
    },
    {
      name: "Hygienic & Safe Environment",
      description: "A clean, safe, and well-maintained environment that ensures the health and security of all students and staff.",
      // image: heroClassroom,
      icon: Shield,
      features: [
        "Clean Classrooms & Facilities",
        "Regular Sanitization",
        "Safe Drinking Water",
        "Secure Campus Premises"
      ],
      highlight: "Safety and Hygiene First"
    }

  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: "CCTV Surveillance",
      description: "24/7 monitoring of all areas"
    },
    {
      icon: Users,
      title: "Trained Security",
      description: "Professional security personnel"
    },
    {
      icon: CheckCircle,
      title: "Fire Safety",
      description: "Fire extinguishers and safety drills"
    },
    {
      icon: Shield,
      title: "First Aid",
      description: "Medical facility and trained staff"
    },
    {
      icon: Users,
      title: "Visitor Management",
      description: "Controlled access and visitor logs"
    },
    {
      icon: CheckCircle,
      title: "Safe Transportation",
      description: "GPS tracked buses with attendants"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary relative overflow-hidden py-16 lg:py-20">
        <div className="absolute top-10 lg:top-20 left-10 lg:left-20 text-secondary animate-float opacity-60">
          <Star size={24} className="lg:w-8 lg:h-8" fill="currentColor" />
        </div>
        <div className="absolute bottom-10 lg:bottom-20 right-16 lg:right-32 text-secondary animate-float opacity-40" style={{ animationDelay: '2s' }}>
          <Star size={20} className="lg:w-7 lg:h-7" fill="currentColor" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 lg:mb-6">
              World-Class <span className="text-secondary">Facilities</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              State-of-the-art infrastructure designed to support holistic development of children
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Facilities Grid */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Our Infrastructure</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
              Comprehensive Learning Facilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every facility is designed with safety, learning, and fun in mind to provide the best
              educational environment for children aged 3-11 years.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-0 shadow-soft card-hover overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                  {/* <div className="md:col-span-2 relative">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-secondary px-3 py-1 rounded-full">
                      <span className="text-secondary-foreground text-xs lg:text-sm font-medium">
                        {facility.highlight}
                      </span>
                    </div>
                  </div> */}
                  <div className="md:col-span-3">
                    <CardContent className="p-4 lg:p-6 h-full flex flex-col">
                      <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center">
                          <facility.icon size={20} className="lg:w-6 lg:h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-lg lg:text-xl font-heading font-bold">{facility.name}</h3>
                      </div>
                      <p className="text-sm lg:text-base text-muted-foreground mb-4 lg:mb-6 flex-grow">
                        {facility.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm lg:text-base">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {facility.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <CheckCircle size={14} className="lg:w-4 lg:h-4 text-primary flex-shrink-0" />
                              <span className="text-xs lg:text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-8 lg:top-16 left-8 lg:left-16 text-secondary animate-float opacity-40">
          <Star size={20} className="lg:w-7 lg:h-7" fill="currentColor" />
        </div>
        <div className="absolute bottom-8 lg:bottom-16 right-12 lg:right-20 text-secondary animate-float opacity-60" style={{ animationDelay: '3s' }}>
          <Star size={18} className="lg:w-6 lg:h-6" fill="currentColor" />
        </div>

        {/* <WaveDivider position="top" /> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Safety First</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Safety & Security Features
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Comprehensive safety measures to ensure a secure environment for all our students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="bg-background border-0 shadow-strong text-center">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                    <feature.icon size={24} className="lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-heading font-bold mb-2 lg:mb-3">{feature.title}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* Infrastructure Stats */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Infrastructure Stats</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
              By The Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-4 lg:p-6">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">2</div>
              <p className="text-sm lg:text-base text-muted-foreground">Acre Campus</p>
            </div>
            <div className="text-center p-4 lg:p-6">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">20+</div>
              <p className="text-sm lg:text-base text-muted-foreground">Classrooms</p>
            </div>
            <div className="text-center p-4 lg:p-6">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">5000+</div>
              <p className="text-sm lg:text-base text-muted-foreground">Books in Library</p>
            </div>
            <div className="text-center p-4 lg:p-6">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">100%</div>
              <p className="text-sm lg:text-base text-muted-foreground">Safety Coverage</p>
            </div>
          </div>

          <div className="text-center mt-12 lg:mt-16">
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;