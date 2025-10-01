import React from 'react';
import Layout from '../components/Layout';
import WaveDivider from '../components/WaveDivider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Palette, 
  Music, 
  Calculator, 
  Globe, 
  Beaker, 
  Star,
  CheckCircle,
  Clock,
  Users,
  Target
} from 'lucide-react';
import artClass from '@/assets/art-class.jpg';
import teacherReading from '@/assets/teacher-reading.jpg';

const Curriculum = () => {
  const subjects = [
    {
      icon: BookOpen,
      title: "English Language Arts",
      description: "Reading, writing, speaking, and listening skills development",
      color: "bg-primary"
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Number concepts, problem-solving, and logical thinking",
      color: "bg-secondary"
    },
    {
      icon: Beaker,
      title: "Science",
      description: "Basic scientific concepts and hands-on experiments",
      color: "bg-primary"
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "Understanding community, culture, and environment",
      color: "bg-secondary"
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description: "Drawing, painting, crafts, and creative expression",
      color: "bg-primary"
    },
    {
      icon: Music,
      title: "Music & Movement",
      description: "Singing, rhythm, and physical coordination",
      color: "bg-secondary"
    }
  ];

  const gradePrograms = [
    {
      grade: "1st",
      age: "3-4 Years",
      focus: "Play-Based Learning",
      subjects: ["Basic Motor Skills", "Social Interaction", "Creative Play", "Story Time", "Music & Dance"],
      activities: ["Sensory Play", "Art & Craft", "Outdoor Games", "Circle Time"]
    },
    {
      grade: "2nd", 
      age: "4-5 Years",
      focus: "Foundation Skills",
      subjects: ["Pre-Reading Skills", "Number Recognition", "Creative Arts", "Physical Development", "Language Development"],
      activities: ["Phonics Introduction", "Shape Recognition", "Fine Motor Skills", "Group Activities"]
    },
    {
      grade: "3rd",
      age: "5-6 Years", 
      focus: "School Readiness",
      subjects: ["Beginning Reading", "Basic Math", "Writing Skills", "Science Exploration", "Social Skills"],
      activities: ["Letter Formation", "Simple Addition", "Nature Walks", "Show & Tell"]
    },
    {
      grade: "4th",
      age: "6-7 Years",
      focus: "Formal Learning",
      subjects: ["English", "Mathematics", "EVS", "Computer Basics", "Art", "Physical Education"],
      activities: ["Reading Comprehension", "Problem Solving", "Project Work", "Sports Activities"]
    },
    {
      grade: "5th",
      age: "7-11 Years",
      focus: "Academic Excellence", 
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Computer Science", "Arts", "PE"],
      activities: ["Research Projects", "Science Experiments", "Cultural Programs", "Leadership Activities"]
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
              Our <span className="text-secondary">Curriculum</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Comprehensive learning programs designed for Nursery to Class V students
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Academic Excellence</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Holistic Learning Approach
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our curriculum is carefully designed to foster intellectual, physical, social, and emotional 
              development through age-appropriate activities and personalized learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Card key={index} className="card-hover border-0 shadow-soft">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <subject.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{subject.title}</h3>
                  <p className="text-muted-foreground">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade-wise Programs */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Grade Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Age-Appropriate Learning
            </h2>
          </div>

          <Tabs defaultValue="nursery" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="nursery">Grade 1</TabsTrigger>
              <TabsTrigger value="kg1">Grade 2</TabsTrigger>
              <TabsTrigger value="kg2">Grade 3</TabsTrigger>
              <TabsTrigger value="class1">Grade 4</TabsTrigger>
              <TabsTrigger value="class2-5">Grade 5</TabsTrigger>
            </TabsList>

            {gradePrograms.map((program, index) => (
              <TabsContent 
                key={index} 
                value={index === 0 ? "nursery" : index === 1 ? "kg1" : index === 2 ? "kg2" : index === 3 ? "class1" : "class2-5"}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <Badge className="bg-primary text-primary-foreground">{program.age}</Badge>
                      <Badge variant="outline">{program.focus}</Badge>
                    </div>
                    <h3 className="text-3xl font-heading font-bold mb-4">{program.grade}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-heading font-bold text-lg mb-3 flex items-center">
                          <BookOpen size={20} className="text-primary mr-2" />
                          Core Subjects
                        </h4>
                        <div className="space-y-2">
                          {program.subjects.map((subject, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <CheckCircle size={16} className="text-primary" />
                              <span className="text-muted-foreground">{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-heading font-bold text-lg mb-3 flex items-center">
                          <Target size={20} className="text-secondary mr-2" />
                          Key Activities
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {program.activities.map((activity, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-secondary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <img 
                      src={index % 3 === 0 ? "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg" : index % 3 === 1 ? artClass : teacherReading} 
                      alt={`${program.grade} classroom`}
                      className="w-full h-64 object-cover rounded-2xl shadow-medium"
                    />
                    <Card className="p-6 bg-primary text-primary-foreground">
                      <h5 className="font-heading font-bold mb-2">Learning Outcomes</h5>
                      <p className="text-sm opacity-90">
                        Students develop {program.focus.toLowerCase()} skills through interactive and engaging 
                        activities tailored for their age group, ensuring steady progress and confidence building.
                      </p>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Assessment System */}
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
            <Badge className="bg-secondary text-secondary-foreground mb-4">Evaluation</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Assessment & Evaluation System
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-0 shadow-strong">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">Continuous Assessment</h3>
                <p className="text-muted-foreground">
                  Regular observation and documentation of student progress through daily activities 
                  and interactions rather than formal testing.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-strong">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen size={32} className="text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">Portfolio System</h3>
                <p className="text-muted-foreground">
                  Collection of student work samples, projects, and achievements to showcase 
                  learning progress and development over time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-strong">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">Regular Feedback</h3>
                <p className="text-muted-foreground">
                  Timely communication with parents about child's progress, strengths, 
                  and areas for improvement through reports and parent-teacher meetings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* Syllabus & Planner */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Academic Planning</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Syllabus & Academic Planner
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured curriculum planning ensures comprehensive coverage of all learning objectives 
              while maintaining flexibility for individual student needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-soft p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Academic Calendar</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                  <span className="font-medium">Session Start</span>
                  <span className="text-primary font-bold">April 1st</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary/10 rounded-lg">
                  <span className="font-medium">Mid-term Break</span>
                  <span className="text-secondary font-bold">October</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                  <span className="font-medium">Winter Break</span>
                  <span className="text-primary font-bold">December</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary/10 rounded-lg">
                  <span className="font-medium">Session End</span>
                  <span className="text-secondary font-bold">March 31st</span>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-soft p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Teaching Methodology</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Play-based learning for younger children</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span>Activity-based learning methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Individual and group projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span>Hands-on experiments and exploration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Digital learning integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span>Regular parent-teacher interaction</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-light rounded-full">
              Download Complete Syllabus
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Curriculum;