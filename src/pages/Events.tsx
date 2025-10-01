import React, { useState } from 'react';
import Layout from '../components/Layout';
import WaveDivider from '../components/WaveDivider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star,
  Camera,
  Award,
  Music,
  Palette,
  BookOpen,
  Trophy,
  Heart
} from 'lucide-react';
import annualDay from '@/assets/annual-day.jpg';
import artClass from '@/assets/art-class.jpg';
import playground from '@/assets/playground.jpg';
import heroClassroom from '@/assets/hero-classroom.jpg';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('upcoming');

  const upcomingEvents = [
    {
      title: "Annual Sports Day 2024",
      date: "March 25, 2024",
      time: "9:00 AM - 3:00 PM",
      venue: "School Playground",
      description: "Join us for a day of athletic competitions, fun games, and team spirit as our students showcase their sporting talents.",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120318/sports-day_hhezvb.jpg",
      category: "Sports",
      participants: "All Students",
      icon: Trophy,
      highlights: ["Track & Field Events", "Team Games", "Prize Distribution", "Parent Participation"]
    },
    {
      title: "Science Exhibition",
      date: "April 8, 2024", 
      time: "10:00 AM - 2:00 PM",
      venue: "School Auditorium",
      description: "Young scientists will present their innovative projects and experiments, showcasing creativity and scientific thinking.",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      category: "Academic",
      participants: "Classes III-V",
      icon: BookOpen,
      highlights: ["Student Projects", "Interactive Demos", "Science Fair", "Innovation Awards"]
    },
    {
      title: "Spring Arts Festival",
      date: "April 15, 2024",
      time: "6:00 PM - 8:00 PM", 
      venue: "School Auditorium",
      description: "Celebrate creativity with art exhibitions, music performances, and cultural programs by our talented students.",
      image: artClass,
      category: "Cultural",
      participants: "All Students",
      icon: Palette,
      highlights: ["Art Exhibition", "Music Concert", "Dance Performances", "Cultural Show"]
    },
    {
      title: "Earth Day Celebration",
      date: "April 22, 2024",
      time: "11:00 AM - 1:00 PM",
      venue: "School Garden",
      description: "Environmental awareness activities including tree plantation, recycling workshops, and eco-friendly projects.",
      image: playground,
      category: "Environmental",
      participants: "All Students",
      icon: Heart,
      highlights: ["Tree Plantation", "Eco Projects", "Green Pledges", "Nature Walk"]
    }
  ];

  const pastEvents = [
    {
      title: "Annual Day Celebration 2023",
      date: "December 15, 2023",
      time: "6:00 PM - 9:00 PM",
      venue: "School Auditorium",
      description: "A spectacular evening showcasing student talents through dance, drama, music, and cultural performances.",
      image: annualDay,
      category: "Cultural",
      participants: "All Students",
      icon: Music,
      highlights: ["Cultural Performances", "Prize Distribution", "Student Achievements", "Grand Finale"],
      gallery: [annualDay, artClass, heroClassroom, "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg"]
    },
    {
      title: "Winter Sports Championship",
      date: "January 20, 2024",
      time: "9:00 AM - 4:00 PM", 
      venue: "School Sports Ground",
      description: "Inter-class sports competition featuring various indoor and outdoor games with enthusiastic participation.",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120318/sports-day_hhezvb.jpg",
      category: "Sports",
      participants: "Classes I-V",
      icon: Trophy,
      highlights: ["Multiple Sports", "Team Spirit", "Fair Play Awards", "Championship Trophy"],
      gallery: ["https://res.cloudinary.com/dtbelwhff/image/upload/v1759120318/sports-day_hhezvb.jpg", playground, heroClassroom, "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg"]
    },
    {
      title: "Reading Week Festival",
      date: "February 10, 2024",
      time: "10:00 AM - 3:00 PM",
      venue: "School Library",
      description: "Week-long celebration of reading with storytelling sessions, book fairs, and author interactions.",
      image: "https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg",
      category: "Academic", 
      participants: "All Students",
      icon: BookOpen,
      highlights: ["Story Telling", "Book Fair", "Reading Competition", "Author Visit"],
      gallery: ["https://res.cloudinary.com/dtbelwhff/image/upload/v1759120313/library_epo9cc.jpg", heroClassroom, artClass, annualDay]
    }
  ];

  const eventCategories = [
    { name: "Academic", color: "bg-primary", icon: BookOpen },
    { name: "Cultural", color: "bg-secondary", icon: Music },
    { name: "Sports", color: "bg-primary", icon: Trophy },
    { name: "Environmental", color: "bg-secondary", icon: Heart }
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
              School <span className="text-secondary">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Celebrating learning, creativity, and achievements through memorable experiences
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Event Categories */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Event Categories</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
              Diverse Learning Experiences
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
            {eventCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-soft text-center card-hover">
                <CardContent className="p-4 lg:p-6">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4`}>
                    <category.icon size={20} className="lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-base lg:text-lg font-heading font-bold">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 lg:mb-12 max-w-md mx-auto">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6 lg:space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="border-0 shadow-soft card-hover overflow-hidden">
                    <div className="relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 lg:h-56 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-secondary px-3 py-1 rounded-full">
                        <span className="text-secondary-foreground text-xs lg:text-sm font-medium">
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full">
                        <span className="text-xs lg:text-sm">{event.participants}</span>
                      </div>
                    </div>
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex items-center space-x-2 lg:space-x-3 mb-3 lg:mb-4">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-full flex items-center justify-center">
                          <event.icon size={16} className="lg:w-5 lg:h-5 text-primary-foreground" />
                        </div>
                        <h3 className="text-lg lg:text-xl font-heading font-bold">{event.title}</h3>
                      </div>
                      
                      <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                        <div className="flex items-center space-x-2 text-sm lg:text-base">
                          <Calendar size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm lg:text-base">
                          <Clock size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm lg:text-base">
                          <MapPin size={16} className="text-muted-foreground" />
                          <span className="text-muted-foreground">{event.venue}</span>
                        </div>
                      </div>

                      <p className="text-sm lg:text-base text-muted-foreground mb-4 lg:mb-6">{event.description}</p>

                      <div className="space-y-3 lg:space-y-4">
                        <h4 className="font-semibold text-sm lg:text-base">Event Highlights:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {event.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <Star size={12} className="lg:w-3.5 lg:h-3.5 text-secondary fill-current flex-shrink-0" />
                              <span className="text-xs lg:text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-light rounded-full mt-4">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-6 lg:space-y-8">
              <div className="space-y-8 lg:space-y-12">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="border-0 shadow-soft overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-secondary px-3 py-1 rounded-full">
                          <span className="text-secondary-foreground text-xs lg:text-sm font-medium">
                            {event.category}
                          </span>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 lg:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-4 lg:mb-6">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center">
                              <event.icon size={20} className="lg:w-6 lg:h-6 text-primary-foreground" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-heading font-bold">{event.title}</h3>
                          </div>
                          
                          <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                            <div className="flex items-center space-x-2">
                              <Calendar size={16} className="text-muted-foreground" />
                              <span className="text-sm lg:text-base text-muted-foreground">{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users size={16} className="text-muted-foreground" />
                              <span className="text-sm lg:text-base text-muted-foreground">{event.participants}</span>
                            </div>
                          </div>

                          <p className="text-sm lg:text-base text-muted-foreground mb-6">{event.description}</p>

                          <div className="space-y-4">
                            <h4 className="font-semibold">Event Highlights:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {event.highlights.map((highlight, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                  <Award size={14} className="text-primary flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {event.gallery && (
                          <div className="mt-6 lg:mt-8">
                            <h4 className="font-semibold mb-4 flex items-center">
                              <Camera size={16} className="mr-2" />
                              Event Gallery
                            </h4>
                            <div className="grid grid-cols-4 gap-2">
                              {event.gallery.map((img, i) => (
                                <img 
                                  key={i} 
                                  src={img} 
                                  alt={`${event.title} ${i + 1}`}
                                  className="w-full h-16 lg:h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-16 lg:py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-8 lg:top-16 left-12 lg:left-24 text-primary animate-float opacity-50">
          <Star size={24} className="lg:w-8 lg:h-8" fill="currentColor" />
        </div>
        <div className="absolute bottom-8 lg:bottom-16 right-12 lg:right-20 text-primary animate-float opacity-60" style={{ animationDelay: '3s' }}>
          <Star size={20} className="lg:w-7 lg:h-7" fill="currentColor" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-primary text-primary-foreground mb-6">Stay Updated</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-secondary-foreground mb-4 lg:mb-6">
            Never Miss an Event
          </h2>
          <p className="text-secondary-foreground/80 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Subscribe to our event newsletter and get notified about upcoming activities, 
            celebrations, and special programs at Blueberry Fields School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 lg:px-6 py-3 lg:py-4 rounded-full border-0 text-secondary-foreground placeholder-secondary-foreground/60"
            />
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary-light px-6 lg:px-8 rounded-full"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;