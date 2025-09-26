import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import WaveDivider from '../components/WaveDivider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Upload, 
  Users, 
  MessageCircle, 
  Calendar, 
  Star,
  Camera,
  ImageIcon,
  Trash2,
  Edit,
  Eye,
  Download,
  Mail,
  Phone,
  Settings,
  BarChart3,
  FileText,
  Clock,
  Filter
} from 'lucide-react';

// Paste your Google Apps Script Web App URL here. This is the same URL used for form submission.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwBlBxUscyb7Fu8Vqfkq8-quReGu-a_HC5xHkRL1avbdb9usNkUReCAGVPM1WTtPbWCCw/exec';

const SCRIPT_URL_INQUIRIES = 'https://script.google.com/macros/s/AKfycbzA0DqrOCZPfyjyYw_mwMEW2XkVDb8tPorwnXJAHXPHjQ7zevwkAZypydBPey6qixfK/exec';

// ... other SCRIPT_URL constants
const SCRIPT_URL_GALLERY = 'https://script.google.com/macros/s/AKfycbyQcbD4XrTOcgDpZ2M04wX4psSl8viavrsjMReZix4Ma05TzisjFTUoaVbk1XCGzQU5/exec';

// put these at top of Admin.tsx (outside component)
const CLOUD_NAME = "dtbelwhff";   // e.g. blueberryfields
const UPLOAD_PRESET = "blueberry_unsigned"; // the unsigned preset you created

// Self-contained Layout component
// const Layout = ({ children }) => {
//   return (
//     <div className="bg-background font-sans text-foreground">
//       <main>{children}</main>
//     </div>
//   );
// };

// // Self-contained WaveDivider component
// const WaveDivider = ({ position }) => {
//   return (
//     <div className={`w-full ${position === 'bottom' ? 'relative' : ''}`}>
//       <svg
//         className={`w-full h-auto text-background fill-current ${position === 'bottom' ? 'block' : 'hidden'}`}
//         viewBox="0 0 1440 100"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//       >
//         <path d="M0,0C0,0,240,100,720,100S1440,0,1440,0V-0L0,0Z"></path>
//       </svg>
//     </div>
//   );
// };

const Admin = () => {
  const { toast } = useToast();
  const [photoUpload, setPhotoUpload] = useState({
    category: '',
    title: '',
    description: '',
    file: null
  });
  const [feedbacks, setFeedbacks] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(true);
  const [loadingInquiries, setLoadingInquiries] = useState(true);
  const [filterType, setFilterType] = useState('all');

  // New state for admission inquiry filter
  const [inquiryFilter, setInquiryFilter] = useState('all');

  // Fetch feedbacks and inquiries on component mount
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(SCRIPT_URL + '?action=getFeedbacks', {
          method: 'GET',
          mode: 'cors',
        });
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
        toast({
          title: "Failed to load feedbacks",
          description: "There was an error retrieving data from the server.",
          variant: "destructive"
        });
      } finally {
        setLoadingFeedbacks(false);
      }
    };

    const fetchInquiries = async () => {
      try {
        const response = await fetch(SCRIPT_URL_INQUIRIES + '?action=getInquiries', {
          method: 'GET',
          mode: 'cors',
        });
        const data = await response.json();
        setInquiries(data);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
        toast({
          title: "Failed to load inquiries",
          description: "There was an error retrieving data from the server.",
          variant: "destructive"
        });
      } finally {
        setLoadingInquiries(false);
      }
    };

    fetchFeedbacks();
    fetchInquiries();
  }, [toast]);

  // Handle status change
  const handleStatusChange = async (uniqueId, newStatus) => {
    const confirmed = window.confirm(`Are you sure you want to change the status to ${newStatus}?`);
    if (!confirmed) return;

    try {
      const response = await fetch(SCRIPT_URL_INQUIRIES, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          action: 'updateStatus', // Correctly added the action parameter
          uniqueId, 
          newStatus 
        }),
      });

      console.log('Status update response:', response);
      toast({
        title: "Status Updated",
        description: `Inquiry status for ID ${uniqueId} changed to ${newStatus}.`,
      });

      // Update the local state to reflect the change immediately
      setInquiries(prev => prev.map(inquiry => 
        inquiry["Unique ID"] === uniqueId ? { ...inquiry, "Status": newStatus } : inquiry
      ));

    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Status Update Failed",
        description: "There was an error updating the status on the server.",
        variant: "destructive",
      });
    }
  };

// In Admin.tsx

const handlePhotoUpload = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!photoUpload.file || !photoUpload.category) {
    toast({
      title: "Missing Information",
      description: "Please select a file and category before uploading.",
      variant: "destructive",
    });
    return;
  }

  try {
    // 1. Upload to Cloudinary
    const formData = new FormData();
    formData.append("file", photoUpload.file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", "blueberry_gallery");

    const cloudinaryRes = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const cloudinaryData = await cloudinaryRes.json();
    const imageUrl = cloudinaryData.secure_url;

    toast({
      title: "Cloudinary Success!",
      description: "Saving data to gallery...",
    });

    // 2. Send data to Google Apps Script (no-cors)
    const photoData = {
      imageUrl: imageUrl,
      category: photoUpload.category,
      title: photoUpload.title || "",
      description: photoUpload.description || "",
    };

    await fetch(SCRIPT_URL_GALLERY, {
      method: "POST",
      mode: "no-cors", // <-- IMPORTANT
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(photoData),
    });

    // yahan JSON parse nahi hoga, direct success assume karna padega
    toast({
      title: "Success!",
      description: "Photo has been added to the gallery.",
    });
    setPhotoUpload({ category: "", title: "", description: "", file: null });

  } catch (err: any) {
    console.error("Upload Error:", err);
    toast({
      title: "Upload Failed",
      description: `An error occurred: ${err.message}`,
      variant: "destructive",
    });
  }
};



  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoUpload(prev => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const stats = [
    { title: 'Total Students', value: '245', icon: Users, color: 'bg-primary' },
    { title: 'Total Feedbacks', value: feedbacks.length, icon: MessageCircle, color: 'bg-secondary' },
    { title: 'Campus Visits', value: '12', icon: Calendar, color: 'bg-primary' },
    { title: 'Gallery Photos', value: '156', icon: Camera, color: 'bg-secondary' }
  ];

  const filteredFeedbacks = feedbacks.filter(feedback => 
    filterType === 'all' || feedback.type === filterType
  );

  const filteredInquiries = inquiries.filter(inquiry =>
    inquiryFilter === 'all' || (inquiry.Status || '').toLowerCase() === inquiryFilter
  );

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
              Admin <span className="text-secondary">Dashboard</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Manage school content, inquiries, and administrative tasks
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Dashboard Stats */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Dashboard Overview</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
              Quick Statistics
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-soft text-center card-hover">
                <CardContent className="p-6 lg:p-8">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6`}>
                    <stat.icon size={24} className="lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                  <h3 className="text-base lg:text-lg font-medium text-muted-foreground">{stat.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Tabs */}
      <section className="py-16 lg:py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="admission-inquiries" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4 mb-8 lg:mb-12">
              <TabsTrigger value="photo-upload">Photo Upload</TabsTrigger>
              <TabsTrigger value="feedbacks">Feedbacks</TabsTrigger>
              <TabsTrigger value="admission-inquiries">Admission Inquiries</TabsTrigger>
              <TabsTrigger value="gallery">Gallery Manager</TabsTrigger>
            </TabsList>

            {/* Photo Upload Tab */}
            <TabsContent value="photo-upload" className="space-y-6 lg:space-y-8">
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Upload size={24} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-heading font-bold">Upload Photos to Gallery</h3>
                  </div>

                  <form onSubmit={handlePhotoUpload} className="space-y-4 lg:space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="photoCategory">Select Category *</Label>
                          <Select value={photoUpload.category} onValueChange={(value) => setPhotoUpload(prev => ({ ...prev, category: value }))}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Choose gallery category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="classroom">Classroom Activities</SelectItem>
                              <SelectItem value="events">School Events</SelectItem>
                              <SelectItem value="facilities">School Facilities</SelectItem>
                              <SelectItem value="sports">Sports & Activities</SelectItem>
                              <SelectItem value="celebrations">Celebrations</SelectItem>
                              <SelectItem value="carousel">Homepage Carousel</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="photoTitle">Photo Title</Label>
                          <Input
                            id="photoTitle"
                            value={photoUpload.title}
                            onChange={(e) => setPhotoUpload(prev => ({ ...prev, title: e.target.value }))}
                            placeholder="Enter a descriptive title"
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="photoDescription">Photo Description</Label>
                          <Textarea
                            id="photoDescription"
                            value={photoUpload.description}
                            onChange={(e) => setPhotoUpload(prev => ({ ...prev, description: e.target.value }))}
                            placeholder="Describe what's happening in the photo"
                            className="mt-2"
                            rows={3}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="photoFile">Select Photo *</Label>
                        <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <input
                            id="photoFile"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <label htmlFor="photoFile" className="cursor-pointer">
                            <ImageIcon size={48} className="text-gray-400 mx-auto mb-4" />
                            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-500 mt-2">PNG, JPG, JPEG up to 5MB</p>
                            {photoUpload.file && (
                              <p className="text-sm text-primary mt-2 font-medium">
                                Selected: {photoUpload.file.name}
                              </p>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-primary text-primary-foreground hover:bg-primary-light rounded-full"
                    >
                      <Upload size={20} className="mr-2" />
                      Upload Photo
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Feedbacks Tab */}
            <TabsContent value="feedbacks" className="space-y-6 lg:space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-xl lg:text-2xl font-heading font-bold">Feedbacks</h3>
                <div className="flex items-center space-x-2">
                  <Filter size={16} />
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Feedbacks</SelectItem>
                      <SelectItem value="feedback">General Feedback</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                      <SelectItem value="suggestion">Suggestion</SelectItem>
                      <SelectItem value="compliment">Compliment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                {loadingFeedbacks ? (
                  <div className="text-center text-muted-foreground">Loading feedbacks...</div>
                ) : feedbacks.length > 0 ? (
                  filteredFeedbacks.map((feedback, index) => (
                    <Card key={index} className="border-0 shadow-soft">
                      <CardContent className="p-4 lg:p-6">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge className="text-xs bg-secondary text-secondary-foreground">
                              {feedback.type ? feedback.type.toUpperCase() : 'FEEDBACK'}
                            </Badge>
                            {/* Priority badge logic can be added here if you collect it */}
                          </div>

                          <div>
                            <h4 className="font-heading font-bold text-base lg:text-lg">{feedback.subject || 'No Subject'}</h4>
                            <p className="text-sm text-muted-foreground mt-1">From: {feedback.name}</p>
                          </div>

                          <p className="text-sm lg:text-base text-muted-foreground">{feedback.message}</p>

                          <div className="flex flex-wrap items-center gap-4 text-xs lg:text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Mail size={14} />
                              <span>{feedback.email}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Phone size={14} />
                              <span>{feedback.phone}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{new Date(feedback.Timestamp).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center text-muted-foreground">No feedbacks found.</div>
                )}
              </div>
            </TabsContent>

            {/* Admission Inquiries Tab */}
            <TabsContent value="admission-inquiries" className="space-y-6 lg:space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-xl lg:text-2xl font-heading font-bold">Admission Inquiries</h3>
                <div className="flex items-center space-x-2">
                  <Filter size={16} />
                  <Select value={inquiryFilter} onValueChange={setInquiryFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Inquiries</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                {loadingInquiries ? (
                  <div className="text-center text-muted-foreground">Loading inquiries...</div>
                ) : filteredInquiries.length > 0 ? (
                  filteredInquiries.map((inquiry, index) => (
                    <Card key={index} className="border-0 shadow-soft">
                      <CardContent className="p-4 lg:p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                          <div className="lg:col-span-3 space-y-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <Badge className="text-xs bg-primary text-primary-foreground">
                                {inquiry.Status ? inquiry.Status.toUpperCase() : 'PENDING'}
                              </Badge>
                              <span className="text-xs text-muted-foreground font-semibold">
                                ID: {inquiry["Unique ID"]}
                              </span>
                            </div>

                            <div>
                              <h4 className="font-heading font-bold text-base lg:text-lg">Inquiry for {inquiry["Child's Full Name"]}</h4>
                              <p className="text-sm text-muted-foreground mt-1">From: {inquiry["Parent/Guardian Name"]}</p>
                            </div>

                            <p className="text-sm lg:text-base text-muted-foreground">{inquiry.Message}</p>

                            <div className="flex flex-wrap items-center gap-4 text-xs lg:text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Mail size={14} />
                                <a href={`mailto:${inquiry["Email Address"]}`} className="text-blue-500 hover:underline">
                                  {inquiry["Email Address"]}
                                </a>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Phone size={14} />
                                <a href={`tel:${inquiry["Phone Number"]}`} className="text-blue-500 hover:underline">
                                  {inquiry["Phone Number"]}
                                </a>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar size={14} />
                                <span>
                                  {inquiry.Timestamp
                                    ? (() => {
                                        const d = new Date(inquiry.Timestamp);
                                        const day = String(d.getDate()).padStart(2, '0');
                                        const month = String(d.getMonth() + 1).padStart(2, '0');
                                        const year = d.getFullYear();
                                        return `${day}/${month}/${year}`;
                                      })()
                                    : ''}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users size={14} />
                                <span>Preferred Grade: {inquiry["Preferred Grade"] || 'N/A'}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="lg:col-span-1 flex flex-col items-start lg:items-end justify-between">
                            <Select 
                              value={inquiry.Status.toLowerCase()} 
                              onValueChange={(value) => handleStatusChange(inquiry["Unique ID"], value)}
                            >
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Change Status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="resolved">Resolved</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center text-muted-foreground">No admission inquiries found.</div>
                )}
              </div>
            </TabsContent>

            {/* Gallery Manager Tab */}
            <TabsContent value="gallery" className="space-y-6 lg:space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-xl lg:text-2xl font-heading font-bold">Gallery Management</h3>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary-light">
                  <Upload size={16} className="mr-2" />
                  Bulk Upload
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {/* Mock data for gallery */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Admin Features */}
      <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-8 lg:top-16 left-8 lg:left-16 text-secondary animate-float opacity-40">
          <Star size={20} className="lg:w-7 lg:h-7" fill="currentColor" />
        </div>
        <div className="absolute bottom-8 lg:bottom-16 right-12 lg:right-20 text-secondary animate-float opacity-60" style={{ animationDelay: '3s' }}>
          <Star size={18} className="lg:w-6 lg:h-6" fill="currentColor" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Admin Tools</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Administrative Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="bg-background border-0 shadow-strong text-center">
              <CardContent className="p-6 lg:p-8">
                <BarChart3 size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-heading font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-sm text-muted-foreground">Track website visits, engagement, and user behavior</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-strong text-center">
              <CardContent className="p-6 lg:p-8">
                <FileText size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-heading font-bold mb-2">Content Management</h3>
                <p className="text-sm text-muted-foreground">Edit pages, update information, and manage content</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-strong text-center">
              <CardContent className="p-6 lg:p-8">
                <Settings size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-heading font-bold mb-2">System Settings</h3>
                <p className="text-sm text-muted-foreground">Configure school settings, users, and permissions</p>
              </CardContent>
            </Card>
          </div>
        </div>

      </section>
    </Layout>
  );
};

export default Admin;