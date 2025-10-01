import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import WaveDivider from '../components/WaveDivider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Award, 
  BookOpen, 
  Users, 
  GraduationCap,
  Heart,
  Target,
  CheckCircle
} from 'lucide-react';

import teacherReading from '@/assets/teacher-reading.jpg';

const Faculty = () => {
  const navigate = useNavigate();
  
  const facultyMembers = [
    {
      name: "Mrs. Malvika Bansal",
      position: "Principal",
      qualification: "M.Ed, B.Ed from Panjab University",
      experience: "15+ years",
      specialization: "Educational Leadership, Curriculum Development",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120316/principal_wf9pxu.jpg",
      achievements: ["Best Principal Award 2023", "Educational Excellence Certificate"]
    },
    {
      name: "Mr. Upesh Banshal",
      position: "Chairman",
      qualification: "M.A. Child Psychology, B.Ed",
      experience: "12+ years", 
      specialization: "Early Childhood Development, Play-based Learning",
      image: teacherReading,
      achievements: ["Certified Montessori Teacher", "Child Psychology Specialist"]
    },
    {
      name: "Mrs. Alka Chauhan",
      position: "Senior Primary Teacher",
      qualification: "M.A. English, B.Ed",
      experience: "10+ years",
      specialization: "Social Studies (SST)",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      achievements: ["Creative Teaching Award", "English Literature Expert"]
    },
    {
      name: "Ms. Richa Gulati",
      position: "Mathematics & Science Coordinator",
      qualification: "M.Sc. Mathematics, B.Ed",
      experience: "8+ years",
      specialization: "Science",
      image: teacherReading,
      achievements: ["STEM Excellence Award", "Math Olympiad Coach"]
    },
    {
      name: "Mrs. Jyoti Bhallah",
      position: "Art & Craft Specialist",
      qualification: "M.F.A, Diploma in Art Education",
      experience: "7+ years",
      specialization: "Hindi",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120316/principal_wf9pxu.jpg",
      achievements: ["Best Art Teacher 2022", "Children's Art Exhibition Curator"]
    },
    {
      name: "Mrs. Neelam Rana",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "Music",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"]
    },
    {
      name: "Mrs. Neelam Rani",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "Punjabi",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"]
    },
    {
      name: "Mrs. Sheetal Sharma",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "English",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"]
    },
    {
      name: "Mrs. Shreya Thakur",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "Computer",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"]
    },
    {
      name: "Mrs. Sheetal Sharma",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "Maths",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"]
    },
    {
      name: "Mrs. Aashi Bahuguna",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "Sports",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"]
    }
  ];

  const facultyStats = [
    {
      number: "10+",
      label: "Expert Teachers",
      icon: Users,
      description: "Highly qualified and experienced educators"
    },
    {
      number: "100%",
      label: "Qualified Staff",
      icon: GraduationCap,
      description: "All teachers hold relevant degrees and certifications"
    }
    // {
    //   number: "15:1",
    //   label: "Student-Teacher Ratio",
    //   icon: Target,
    //   description: "Ensuring individual attention for every child"
    // }
  ];

  const qualifications = [
    {
      requirement: "Educational Qualification",
      details: ["Bachelor's degree in relevant subject", "B.Ed or equivalent teaching degree", "Master's degree preferred for senior positions"]
    },
    {
      requirement: "Experience & Skills",
      details: ["Minimum 3-5 years teaching experience", "Experience with early childhood education", "Knowledge of modern teaching methodologies"]
    },
    {
      requirement: "Personal Qualities",
      details: ["Patience and empathy with children", "Excellent communication skills", "Commitment to continuous learning"]
    },
    {
      requirement: "Additional Requirements",
      details: ["Background verification completed", "First aid and CPR training", "Regular professional development participation"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary relative overflow-hidden py-20">
        <div className="absolute top-20 left-20 text-secondary animate-float opacity-60">
          <Star size={32} fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-32 text-secondary animate-float opacity-40" style={{ animationDelay: '2s' }}>
          <Star size={28} fill="currentColor" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Our <span className="text-secondary">Faculty</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Meet our passionate and dedicated educators who make learning a joyful experience
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Faculty Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Our Strength</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Faculty Excellence Statistics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
            {facultyStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-soft text-center card-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <stat.icon size={32} className="text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">{stat.number}</div>
                  <h3 className="text-lg font-heading font-bold mb-3">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Meet Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Prestigious Faculty Members
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our carefully selected team of educators brings years of experience and passion for teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="border-0 shadow-soft card-hover overflow-hidden">
                <div className="relative">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full">
                    <span className="text-primary-foreground text-sm font-medium">{faculty.experience}</span>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold mb-2">{faculty.name}</h3>
                  <p className="text-primary font-medium mb-4">{faculty.specialization}</p>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary-light rounded-full"
                    onClick={() => navigate(`/teacher/${faculty.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Qualifications */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-16 left-16 text-secondary animate-float opacity-40">
          <Star size={28} fill="currentColor" />
        </div>
        <div className="absolute bottom-16 right-20 text-secondary animate-float opacity-60" style={{ animationDelay: '3s' }}>
          <Star size={24} fill="currentColor" />
        </div>

        {/* <WaveDivider position="top" /> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Standards</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Faculty Qualification Requirements
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              We maintain the highest standards in faculty recruitment to ensure quality education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualifications.map((qualification, index) => (
              <Card key={index} className="bg-background border-0 shadow-strong">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle size={24} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">{qualification.requirement}</h3>
                  </div>
                  <div className="space-y-3">
                    {qualification.details.map((detail, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* Professional Development */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Continuous Learning</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Professional Development Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We invest in our faculty's growth through regular training and development programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-0 shadow-soft p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <BookOpen size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Monthly Training Sessions</h3>
                    <p className="text-muted-foreground text-sm">Regular workshops on latest teaching methods</p>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-soft p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Users size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Peer Learning Programs</h3>
                    <p className="text-muted-foreground text-sm">Collaborative learning and best practice sharing</p>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-soft p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Heart size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">Child Psychology Workshops</h3>
                    <p className="text-muted-foreground text-sm">Understanding child behavior and development</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <img 
                src={teacherReading} 
                alt="Professional Development" 
                className="w-full h-96 object-cover rounded-3xl shadow-strong"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-2xl shadow-strong">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-secondary-foreground">40+</div>
                  <div className="text-sm text-secondary-foreground">Hours Annual Training</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary-light rounded-full px-8"
            >
              Join Our Teaching Team
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Faculty;