import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const SCRIPT_URL_GALLERY = 'https://script.google.com/macros/s/AKfycbyId-jJeZryjL4YD0PNmCDHUtTscBCgL-M-_p7odbt5oCIWHYsWa9i5k44Xm-69uhK08A/exec';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryCategories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classroom', name: 'Classroom' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'sports', name: 'Sports' },
    { id: 'celebrations', name: 'Celebrations' },
  ];

  useEffect(() => {
    const fetchPhotos = () => {
      setLoading(true);
      
      const callbackName = 'jsonpCallback_' + Date.now(); 

      const script = document.createElement('script');
      
      script.src = `${SCRIPT_URL_GALLERY}?action=getPhotos&callback=${callbackName}`;
      
      window[callbackName] = (data) => {
        try {
          if (Array.isArray(data)) {
            const clean = data.map(item => ({
              imageUrl: item["ImageUrl"] || "",
              category: item["Category"] || "",
              description: item["Description"] || "",
              title: item["Title"] || "",
              Timestamp: item["Timestamp"]
            }));
            setPhotos(clean.reverse());
          } else {
            setPhotos([]);
          }
        } catch (err) {
          console.error("JSONP Data Process Error:", err);
        } finally {
          delete window[callbackName];
          script.remove();
          setLoading(false);
        }
      };
      
      document.body.appendChild(script);

      script.onerror = () => {
          console.error("Fetch Gallery Error: JSONP Script Load Failed");
          delete window[callbackName];
          script.remove();
          setLoading(false);
      };
    };
    fetchPhotos();
  }, []);

  const filteredImages = selectedCategory === 'all'
    ? photos
    : photos.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10">
            <Badge className="mb-2">Browse by Category</Badge>
            <h2 className="text-3xl font-heading font-bold tracking-tight">Photo Gallery</h2>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            {/* Wrapper for centering and horizontal scrolling */}
            <div className="flex justify-center">
              <div className="bg-muted/50 rounded-xl p-1 mb-8 shadow-sm overflow-x-auto w-full max-w-full lg:w-auto lg:max-w-none">
                <TabsList className="flex flex-nowrap gap-1 p-0 h-auto w-max mx-auto">
                  {galleryCategories.map(cat => (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className="
                        rounded-xl 
                        px-6 py-2.5 
                        min-w-[120px]
                        font-medium 
                        text-muted-foreground 
                        whitespace-nowrap 
                        data-[state=active]:bg-background 
                        data-[state=active]:shadow 
                        data-[state=active]:text-foreground
                        data-[state=active]:font-bold
                      "
                    >
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            <TabsContent value={selectedCategory}>
              {loading ? (
                <div className="text-center py-10">Loading photos...</div>
              ) : filteredImages.length === 0 ? (
                <div className="text-center py-10">No photos found.</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredImages.map(img => (
                    <Card
                      key={img.imageUrl}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-card"
                      onClick={() => setSelectedImage(img)}
                    >
                      <div className="relative group">
                        <AspectRatio ratio={4 / 3}>
                          <img src={img.imageUrl} alt={img.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </AspectRatio>
                        <div className="absolute top-2 right-2 bg-white/90 text-foreground p-1.5 rounded-full shadow">
                          <Camera size={14} />
                        </div>
                      </div>
                      <CardContent className="p-4 space-y-1">
                        <h3 className="font-semibold text-base leading-snug line-clamp-1">{img.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{img.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>

          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
              <div className="bg-background rounded-lg overflow-hidden w-full max-w-5xl" onClick={e => e.stopPropagation()}>
                <AspectRatio ratio={16 / 9}>
                  <img src={selectedImage.imageUrl} alt={selectedImage.title} className="w-full h-full object-cover" />
                </AspectRatio>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;