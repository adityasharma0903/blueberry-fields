import React, { useState } from 'react';
import Layout from '../components/Layout';
import WaveDivider from '../components/WaveDivider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Camera, 
  Play, 
  Download,
  Heart,
  Share2,
  ZoomIn,
  Calendar,
  Users
} from 'lucide-react';

// Import all images
import heroClassroom from '@/assets/hero-classroom.jpg';
import playground from '@/assets/playground.jpg';
import teacherReading from '@/assets/teacher-reading.jpg';
import library from '@/assets/library.jpg';
import artClass from '@/assets/art-class.jpg';
import principal from '@/assets/principal.jpg';
import scienceLab from '@/assets/science-lab.jpg';
import computerLab from '@/assets/computer-lab.jpg';
import musicRoom from '@/assets/music-room.jpg';
import cafeteria from '@/assets/cafeteria.jpg';
import annualDay from '@/assets/annual-day.jpg';
import sportsDay from '@/assets/sports-day.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryCategories = [
    { id: 'all', name: 'All Photos', count: 48 },
    { id: 'classroom', name: 'Classroom Activities', count: 12 },
    { id: 'events', name: 'School Events', count: 15 },
    { id: 'facilities', name: 'Facilities', count: 10 },
    { id: 'sports', name: 'Sports & Activities', count: 8 },
    { id: 'celebrations', name: 'Celebrations', count: 3 }
  ];

  const galleryImages = [
    // Classroom Activities
    {
      id: 1,
      src: heroClassroom,
      title: "Interactive Learning Session",
      description: "Students engaged in hands-on learning activities",
      category: "classroom",
      date: "March 2024",
      likes: 24
    },
    {
      id: 2,
      src: teacherReading,
      title: "Story Time Circle",
      description: "Teacher conducting storytelling session",
      category: "classroom", 
      date: "March 2024",
      likes: 18
    },
    {
      id: 3,
      src: artClass,
      title: "Art & Craft Workshop",
      description: "Creative expression through arts and crafts",
      category: "classroom",
      date: "February 2024", 
      likes: 32
    },
    {
      id: 4,
      src: library,
      title: "Library Reading Time",
      description: "Children exploring books in our modern library",
      category: "classroom",
      date: "February 2024",
      likes: 21
    },

    // School Events  
    {
      id: 5,
      src: annualDay,
      title: "Annual Day Performance",
      description: "Cultural performances by talented students",
      category: "events",
      date: "December 2023",
      likes: 95
    },
    {
      id: 6,
      src: sportsDay,
      title: "Sports Day Championship",
      description: "Athletic competitions and team spirit",
      category: "events",
      date: "January 2024",
      likes: 67
    },

    // Facilities
    {
      id: 7,
      src: scienceLab,
      title: "Science Laboratory",
      description: "Modern lab equipment for young scientists",
      category: "facilities",
      date: "March 2024",
      likes: 15
    },
    {
      id: 8,
      src: computerLab,
      title: "Computer Learning Center", 
      description: "Digital literacy and coding classes",
      category: "facilities",
      date: "March 2024",
      likes: 12
    },
    {
      id: 9,
      src: musicRoom,
      title: "Music & Dance Studio",
      description: "Nurturing artistic talents and creativity",
      category: "facilities",
      date: "February 2024",
      likes: 19
    },
    {
      id: 10,
      src: cafeteria,
      title: "School Cafeteria",
      description: "Nutritious meals and healthy eating habits",
      category: "facilities", 
      date: "March 2024",
      likes: 8
    },

    // Sports & Activities
    {
      id: 11,
      src: playground,
      title: "Outdoor Playtime",
      description: "Physical activities and recreational fun",
      category: "sports",
      date: "March 2024",
      likes: 28
    },

    // Celebrations
    {
      id: 12,
      src: principal,
      title: "Achievement Recognition",
      description: "Celebrating student accomplishments",
      category: "celebrations",
      date: "February 2024",
      likes: 41
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const featuredVideo = {
    thumbnail: heroClassroom,
    title: "A Day at Blueberry Fields School",
    description: "Experience the joy of learning through our virtual school tour",
    duration: "3:45"
  };

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
              Photo <span className="text-secondary">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Capturing precious moments and memories of learning, growth, and joy
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Featured Video */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Featured Content</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
              School Virtual Tour
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-strong overflow-hidden">
              <div className="relative">
                <img 
                  src={featuredVideo.thumbnail} 
                  alt={featuredVideo.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="bg-secondary text-secondary-foreground hover:bg-secondary-light w-16 h-16 lg:w-20 lg:h-20 rounded-full p-0"
                  >
                    <Play size={24} className="lg:w-8 lg:h-8" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full">
                  <span className="text-sm">{featuredVideo.duration}</span>
                </div>
              </div>
              <CardContent className="p-6 lg:p-8 text-center">
                <h3 className="text-xl lg:text-2xl font-heading font-bold mb-2">{featuredVideo.title}</h3>
                <p className="text-muted-foreground">{featuredVideo.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 lg:py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Browse by Category</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
              Explore Our Memories
            </h2>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <div className="overflow-x-auto mb-8 lg:mb-12">
              <TabsList className="grid grid-cols-6 w-full min-w-fit lg:min-w-0 gap-1 lg:gap-0">
                {galleryCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-xs lg:text-sm whitespace-nowrap px-2 lg:px-4"
                  >
                    <div className="text-center">
                      <div>{category.name}</div>
                      <div className="text-xs opacity-70">({category.count})</div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={selectedCategory} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {filteredImages.map((image) => (
                  <Card 
                    key={image.id} 
                    className="border-0 shadow-soft card-hover overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <Camera size={14} className="text-primary" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-heading font-bold text-sm lg:text-base mb-2 line-clamp-2">
                        {image.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-muted-foreground mb-3 line-clamp-2">
                        {image.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Calendar size={12} className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{image.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart size={12} className="text-red-500" />
                          <span className="text-xs text-muted-foreground">{image.likes}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary-light rounded-full px-8"
                >
                  Load More Photos
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Statistics */}
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
            <Badge className="bg-secondary text-secondary-foreground mb-4">Our Collection</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Gallery Statistics
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-secondary mb-2">500+</div>
              <p className="text-sm lg:text-base text-primary-foreground/90">Total Photos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-secondary mb-2">25+</div>
              <p className="text-sm lg:text-base text-primary-foreground/90">Events Covered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-secondary mb-2">1000+</div>
              <p className="text-sm lg:text-base text-primary-foreground/90">Happy Moments</p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-secondary mb-2">Weekly</div>
              <p className="text-sm lg:text-base text-primary-foreground/90">New Updates</p>
            </div>
          </div>
        </div>

        {/* <WaveDivider position="bottom" /> */}
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-64 lg:h-96 object-cover"
              />
              <Button 
                variant="ghost" 
                size="sm"
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </Button>
            </div>
            <div className="p-4 lg:p-6">
              <h3 className="text-lg lg:text-xl font-heading font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-sm lg:text-base text-muted-foreground mb-4">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart size={16} className="text-red-500" />
                    <span className="text-sm text-muted-foreground">{selectedImage.likes}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download size={16} className="mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;