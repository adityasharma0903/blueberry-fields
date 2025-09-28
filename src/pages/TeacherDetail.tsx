import React from 'react';
import { useParams } from 'react-router-dom';
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
  CheckCircle,
  ArrowLeft,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

import teacherReading from '@/assets/teacher-reading.jpg';
import principal from '@/assets/principal.jpg';
import library from '@/assets/library.jpg';

const TeacherDetail = () => {
  const { teacherSlug } = useParams();
  
  const facultyMembers = [
    {
      name: "Mrs. Malvika Bansal",
      position: "Principal",
      qualification: "M.Ed, B.Ed from Panjab University",
      experience: "15+ years",
      specialization: "Educational Leadership, Curriculum Development",
      image: principal,
      achievements: ["Best Principal Award 2023", "Educational Excellence Certificate"],
      about: "Mrs. Malvika Bansal brings over 15 years of experience in educational leadership and curriculum development. She has a passion for creating innovative learning environments that foster creativity and critical thinking in young minds. Her expertise in early childhood education has helped shape the school's progressive curriculum.",
      contact: {
        email: "malvika.bansal@blueberryfields.edu",
        phone: "+91 9876543210"
      }
    },
    {
      name: "Mr. Upesh Banshal",
      position: "Chairman",
      qualification: "M.A. Child Psychology, B.Ed",
      experience: "12+ years", 
      specialization: "Early Childhood Development, Play-based Learning",
      image: teacherReading,
      achievements: ["Certified Montessori Teacher", "Child Psychology Specialist"],
      about: "Mr. Upesh Banshal is a certified Montessori teacher with extensive experience in child psychology. He specializes in play-based learning methodologies and has developed innovative approaches to early childhood education that make learning fun and engaging for young children.",
      contact: {
        email: "upesh.banshal@blueberryfields.edu",
        phone: "+91 9876543211"
      }
    },
    {
      name: "Mrs. Alka Chauhan",
      position: "Senior Primary Teacher",
      qualification: "M.A. English, B.Ed",
      experience: "10+ years",
      specialization: "Social Studies (SST)",
      image: library,
      achievements: ["Creative Teaching Award", "English Literature Expert"],
      about: "Mrs. Alka Chauhan is an experienced English teacher with a Master's degree in English Literature. She has a unique ability to make complex concepts simple and engaging for young learners. Her creative teaching methods have earned her recognition and awards.",
      contact: {
        email: "alka.chauhan@blueberryfields.edu",
        phone: "+91 9876543212"
      }
    },
    {
      name: "Ms. Richa Gulati",
      position: "Mathematics & Science Coordinator",
      qualification: "M.Sc. Mathematics, B.Ed",
      experience: "8+ years",
      specialization: "Science",
      image: teacherReading,
      achievements: ["STEM Excellence Award", "Math Olympiad Coach"],
      about: "Ms. Richa Gulati is our Mathematics and Science coordinator with a strong background in STEM education. She has successfully coached students for various math competitions and has developed hands-on science experiments that make learning interactive and fun.",
      contact: {
        email: "richa.gulati@blueberryfields.edu",
        phone: "+91 9876543213"
      }
    },
    {
      name: "Mrs. Jyoti Bhallah",
      position: "Art & Craft Specialist",
      qualification: "M.F.A, Diploma in Art Education",
      experience: "7+ years",
      specialization: "Hindi",
      image: principal,
      achievements: ["Best Art Teacher 2022", "Children's Art Exhibition Curator"],
      about: "Mrs. Jyoti Bhallah is our creative art specialist who brings color and imagination to our classrooms. With a Master's in Fine Arts, she has curated numerous children's art exhibitions and has a talent for bringing out the artistic potential in every child.",
      contact: {
        email: "jyoti.bhallah@blueberryfields.edu",
        phone: "+91 9876543214"
      }
    },
    {
      name: "Mrs. Neelam Rana",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "Music",
      image: library,
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"],
      about: "Mrs. Neelam Rana is our physical education instructor who promotes healthy living and physical fitness among students. She is a certified yoga instructor and has organized various sports events that encourage teamwork and healthy competition.",
      contact: {
        email: "neelam.rana@blueberryfields.edu",
        phone: "+91 9876543215"
      }
    },
    {
      name: "Mrs. Neelam Rani",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "Punjabi",
      image: library,
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"],
      about: "Mrs. Neelam Rani specializes in Punjabi language instruction and cultural education. She brings the rich heritage of Punjab to our classrooms through traditional stories, songs, and cultural activities that help students connect with their roots.",
      contact: {
        email: "neelam.rani@blueberryfields.edu",
        phone: "+91 9876543216"
      }
    },
    {
      name: "Mrs. Sheetal Sharma",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "English",
      image: library,
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"],
      about: "Mrs. Sheetal Sharma is an enthusiastic English teacher who makes language learning enjoyable through interactive activities, storytelling, and creative writing exercises. Her innovative teaching methods help students develop strong communication skills.",
      contact: {
        email: "sheetal.sharma@blueberryfields.edu",
        phone: "+91 9876543217"
      }
    },
    {
      name: "Mrs. Shreya Thakur",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "Computer",
      image: library,
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"],
      about: "Mrs. Shreya Thakur is our computer science instructor who introduces students to the world of technology in a fun and engaging way. She teaches basic computer skills, coding fundamentals, and digital literacy that prepare students for the modern world.",
      contact: {
        email: "shreya.thakur@blueberryfields.edu",
        phone: "+91 9876543218"
      }
    },
    {
      name: "Mrs. Aashi Bahuguna",
      position: "Physical Education Instructor",
      qualification: "M.P.Ed, Sports Coaching Certificate",
      experience: "6+ years",
      specialization: "Sports",
      image: library,
      achievements: ["Sports Excellence Award", "Yoga Instructor Certified"],
      about: "Mrs. Aashi Bahuguna is our sports coordinator who promotes physical fitness and healthy competition among students. She organizes various sports activities and events that help students develop teamwork, leadership, and sportsmanship qualities.",
      contact: {
        email: "aashi.bahuguna@blueberryfields.edu",
        phone: "+91 9876543219"
      }
    }
  ];

  // Find the teacher by slug
  const teacher = facultyMembers.find(t => 
    t.name.toLowerCase().replace(/\s+/g, '-') === teacherSlug
  );

  if (!teacher) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Teacher Not Found</h1>
            <p className="text-muted-foreground mb-8">The teacher you're looking for doesn't exist.</p>
            <Button 
              onClick={() => window.history.back()}
              className="bg-primary text-primary-foreground hover:bg-primary-light rounded-full"
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

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
          <div className="flex items-center justify-between mb-8">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Faculty
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              {teacher.name}
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              {teacher.position} • {teacher.specialization}
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Teacher Profile */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Teacher Image and Basic Info */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-soft overflow-hidden">
                <div className="relative">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full">
                    <span className="text-primary-foreground text-sm font-medium">{teacher.experience}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{teacher.name}</h3>
                  <p className="text-primary font-medium mb-4">{teacher.position}</p>
                  <p className="text-muted-foreground mb-4">{teacher.specialization}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <GraduationCap size={20} className="text-primary" />
                      <span className="text-sm">{teacher.qualification}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail size={20} className="text-primary" />
                      <span className="text-sm">{teacher.contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={20} className="text-primary" />
                      <span className="text-sm">{teacher.contact.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6">About {teacher.name.split(' ')[1]}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{teacher.about}</p>
                </CardContent>
              </Card>

              {/* Achievements Section */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6">Achievements & Recognition</h3>
                  <div className="space-y-4">
                    {teacher.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Award size={20} className="text-secondary" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Teaching Philosophy */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6">Teaching Philosophy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <Heart size={20} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Student-Centered Learning</h4>
                        <p className="text-sm text-muted-foreground">Focusing on individual student needs and learning styles</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target size={20} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Goal-Oriented Approach</h4>
                        <p className="text-sm text-muted-foreground">Setting clear learning objectives and tracking progress</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <BookOpen size={20} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Interactive Teaching</h4>
                        <p className="text-sm text-muted-foreground">Using engaging methods to make learning fun and effective</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users size={20} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Collaborative Learning</h4>
                        <p className="text-sm text-muted-foreground">Encouraging teamwork and peer learning</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeacherDetail;
