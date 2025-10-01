import React from 'react';
import Layout from '../components/Layout';
import WaveDivider from '../components/WaveDivider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Users, Award, Heart, BookOpen, Target, Eye } from 'lucide-react';
import heroClassroom from '@/assets/hero-classroom.jpg';
import playground from '@/assets/playground.jpg';

const About = () => {
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
              About <span className="text-secondary">Blueberry Fields</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Nurturing young minds since 2023 with love, care, and quality education
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary text-primary-foreground mb-4">Our History</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                Blueberry Fields School was established in 2023 with the vision of creating a strong foundation for young learners. Guided by the belief that every child deserves an inspiring start to their educational journey, we focus on building not only academic excellence but also character, creativity, and confidence.
                </p>
                <p>
                At our school, we emphasize holistic development by blending modern teaching practices with values that nurture curiosity, compassion, and resilience. Our classrooms are designed to provide individual attention, encourage active participation, and create a safe and joyful learning environment.
                </p>
                <p>
                We are committed to preparing children for the future by fostering critical thinking, problem-solving skills, and a love for lifelong learning. Blueberry Fields School continues to grow as a trusted place where children thrive and families feel supported.
                </p>
              </div>  
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={heroClassroom} 
                alt="School history" 
                className="w-full h-48 object-cover organic-shape shadow-medium"
              />
              <img 
                src={playground} 
                alt="School development" 
                className="w-full h-48 object-cover organic-shape-2 shadow-medium mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Desk */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dtbelwhff/image/upload/v1759120316/principal_wf9pxu.jpg"
                alt="Principal" 
                className="w-full h-96 object-cover rounded-3xl shadow-strong"
              />
              {/* <div className="absolute -bottom-4 -right-4 bg-secondary p-6 rounded-2xl shadow-strong">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-secondary-foreground">15+</div>
                  <div className="text-sm text-secondary-foreground">Years Leading</div>
                </div>
              </div> */}
            </div>
            
            <div>
              <Badge className="bg-primary text-primary-foreground mb-4">Leadership</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Principal's Desk</h2>
              <div className="space-y-4">
                <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "At Blueberry Fields School, our aim is to develop honesty, discipline, respect and moral values in child at early stage of life in parallel with on going advanced and smart teaching skills."
                  </p>
                </div>
                <p className="text-muted-foreground">
                  As the Principal of Blueberry Fields School, I am honored to lead a team of dedicated 
                  educators who share our vision of providing transformational learning experiences. 
                  We believe that education should be joyful, meaningful, and tailored to each child's 
                  unique needs and interests.
                </p>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-heading font-bold text-lg mb-2">Mrs. Malvika Bansal</h4>
                  <p className="text-sm text-muted-foreground">
                    M.Ed, B.Ed | Principal<br/>
                    15+ Years in Educational Leadership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
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
            <Badge className="bg-secondary text-secondary-foreground mb-4">Our Purpose</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-background border-0 shadow-strong">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building a learning environment that value diversity, promotes critical thinking and inspires students to reach their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-strong">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye size={32} className="text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We emphasize student growth, well-being, and success, while also promoting high academic standards and achievements. At the same time, we are committed to nurturing well-rounded individuals who excel academically, socially, and emotionally in a dynamic learning environment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background border-0 shadow-medium text-center">
              <CardContent className="p-6">
                <Heart size={32} className="text-primary mx-auto mb-4" />
                <h4 className="font-heading font-bold text-lg mb-2">Care</h4>
                <p className="text-sm text-muted-foreground">Nurturing every child with love and attention</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-0 shadow-medium text-center">
              <CardContent className="p-6">
                <BookOpen size={32} className="text-primary mx-auto mb-4" />
                <h4 className="font-heading font-bold text-lg mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Striving for the highest standards in education</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-0 shadow-medium text-center">
              <CardContent className="p-6">
                <Users size={32} className="text-primary mx-auto mb-4" />
                <h4 className="font-heading font-bold text-lg mb-2">Community</h4>
                <p className="text-sm text-muted-foreground">Building strong partnerships with families</p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-0 shadow-medium text-center">
              <CardContent className="p-6">
                <Award size={32} className="text-primary mx-auto mb-4" />
                <h4 className="font-heading font-bold text-lg mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">Embracing modern teaching methodologies</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-primary-foreground mb-4">Our Achievements</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">1500+</div>
              <p className="text-muted-foreground">Happy Students</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Expert Teachers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">5</div>
              <p className="text-muted-foreground">Award Winning</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;