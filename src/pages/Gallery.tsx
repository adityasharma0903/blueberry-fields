import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ZoomIn, Camera, Calendar } from 'lucide-react';

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
    
    // JSONP request ke liye random callback function name
    const callbackName = 'jsonpCallback_' + Date.now(); 

    // 1. Script element create karein
    const script = document.createElement('script');
    
    // 2. URL mein 'callback' parameter add karein
    script.src = `${SCRIPT_URL_GALLERY}?action=getPhotos&callback=${callbackName}`;
    
    // 3. Global window object par callback function define karein
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
        // Cleaning up
        delete window[callbackName];
        script.remove();
        setLoading(false);
      }
    };
    
    // 4. Script ko document body mein append karein (request shuru)
    document.body.appendChild(script);

    // Error/Timeout handling (Optional but recommended)
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
      <section className="py-16">
        <div className="text-center mb-8">
          <Badge>Browse by Category</Badge>
          <h2 className="text-2xl font-bold">Photo Gallery</h2>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-7 gap-2 mb-4">
            {galleryCategories.map(cat => (
              <TabsTrigger key={cat.id} value={cat.id}>{cat.name}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory}>
            {loading ? (
              <div className="text-center py-10">Loading photos...</div>
            ) : filteredImages.length === 0 ? (
              <div className="text-center py-10">No photos found.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredImages.map(img => (
                  <Card key={img.imageUrl} className="cursor-pointer" onClick={() => setSelectedImage(img)}>
                    <div className="relative">
                      <img src={img.imageUrl} alt={img.title} className="w-full h-48 object-cover"/>
                      <div className="absolute top-2 right-2 bg-white/90 p-1 rounded-full">
                        <Camera size={14} />
                      </div>
                    </div>
                    <CardContent>
                      <h3 className="font-bold text-sm">{img.title}</h3>
                      <p className="text-xs text-muted-foreground">{img.description}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Calendar size={12} /> {new Date(img.Timestamp).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
            <div className="bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
              <img src={selectedImage.imageUrl} alt={selectedImage.title} className="w-full h-96 object-cover"/>
              <div className="p-4">
                <h3 className="font-bold text-lg">{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Gallery;
