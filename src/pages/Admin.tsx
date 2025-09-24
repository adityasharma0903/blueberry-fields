import React, { useState } from 'react';
import Layout from '../components/Layout';
import WaveDivider from '../components/WaveDivider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Image as ImageIcon,
  Trash2,
  Edit,
  Eye,
  Download,
  Mail,
  Phone,
  Settings,
  BarChart3,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Filter
} from 'lucide-react';

const Admin = () => {
  const { toast } = useToast();
  const [photoUpload, setPhotoUpload] = useState({
    category: '',
    title: '',
    description: '',
    file: null as File | null
  });

  // Mock data for admin dashboard
  const inquiries = [
    {
      id: 1,
      type: 'admission',
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      subject: 'Admission for KG-I',
      message: 'I would like to know about the admission process for my 4-year-old daughter.',
      date: '2024-03-20',
      status: 'pending',
      priority: 'high'
    },
    {
      id: 2,
      type: 'feedback',
      name: 'Rajesh Kumar',
      email: 'rajesh.k@email.com',
      phone: '+91 98765 43211',
      subject: 'Great teaching quality',
      message: 'I am very impressed with the quality of education my son is receiving.',
      date: '2024-03-19',
      status: 'responded',
      priority: 'low'
    },
    {
      id: 3,
      type: 'visit',
      name: 'Anjali Singh',
      email: 'anjali.singh@email.com',
      phone: '+91 98765 43212',
      subject: 'Campus visit request',
      message: 'We would like to schedule a campus tour for next week.',
      date: '2024-03-18',
      status: 'scheduled',
      priority: 'medium'
    }
  ];

  const galleryImages = [
    {
      id: 1,
      title: 'Annual Day Performance',
      category: 'events',
      uploadDate: '2024-03-15',
      views: 156,
      status: 'published'
    },
    {
      id: 2,
      title: 'Science Lab Activity',
      category: 'classroom',
      uploadDate: '2024-03-14',
      views: 89,
      status: 'published'
    },
    {
      id: 3,
      title: 'Playground Fun',
      category: 'sports',
      uploadDate: '2024-03-13',
      views: 234,
      status: 'draft'
    }
  ];

  const handlePhotoUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoUpload.file || !photoUpload.category) {
      toast({
        title: "Missing Information",
        description: "Please select a file and category before uploading.",
        variant: "destructive"
      });
      return;
    }

    console.log('Photo upload:', photoUpload);
    toast({
      title: "Photo Uploaded Successfully!",
      description: `Image added to ${photoUpload.category} gallery.`
    });

    setPhotoUpload({
      category: '',
      title: '',
      description: '',
      file: null
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoUpload(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleInquiryStatusUpdate = (id: number, status: string) => {
    console.log(`Updating inquiry ${id} status to ${status}`);
    toast({
      title: "Status Updated",
      description: `Inquiry status changed to ${status}.`
    });
  };

  const stats = [
    { title: 'Total Students', value: '245', icon: Users, color: 'bg-primary' },
    { title: 'Pending Inquiries', value: '8', icon: MessageCircle, color: 'bg-secondary' },
    { title: 'Campus Visits', value: '12', icon: Calendar, color: 'bg-primary' },
    { title: 'Gallery Photos', value: '156', icon: Camera, color: 'bg-secondary' }
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
          <Tabs defaultValue="photo-upload" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 lg:mb-12">
              <TabsTrigger value="photo-upload">Photo Upload</TabsTrigger>
              <TabsTrigger value="inquiries">Manage Inquiries</TabsTrigger>
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

            {/* Inquiries Management Tab */}
            <TabsContent value="inquiries" className="space-y-6 lg:space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-xl lg:text-2xl font-heading font-bold">Manage Inquiries & Feedback</h3>
                <div className="flex items-center space-x-2">
                  <Filter size={16} />
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Inquiries</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="responded">Responded</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                {inquiries.map((inquiry) => (
                  <Card key={inquiry.id} className="border-0 shadow-soft">
                    <CardContent className="p-4 lg:p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div className="lg:col-span-3 space-y-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge 
                              className={`text-xs ${
                                inquiry.type === 'admission' ? 'bg-primary text-primary-foreground' :
                                inquiry.type === 'feedback' ? 'bg-secondary text-secondary-foreground' :
                                'bg-muted text-muted-foreground'
                              }`}
                            >
                              {inquiry.type.toUpperCase()}
                            </Badge>
                            <Badge 
                              variant={
                                inquiry.priority === 'high' ? 'destructive' :
                                inquiry.priority === 'medium' ? 'default' : 'secondary'
                              }
                              className="text-xs"
                            >
                              {inquiry.priority.toUpperCase()}
                            </Badge>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                inquiry.status === 'pending' ? 'border-yellow-500 text-yellow-700' :
                                inquiry.status === 'responded' ? 'border-green-500 text-green-700' :
                                'border-blue-500 text-blue-700'
                              }`}
                            >
                              <Clock size={12} className="mr-1" />
                              {inquiry.status.toUpperCase()}
                            </Badge>
                          </div>

                          <div>
                            <h4 className="font-heading font-bold text-base lg:text-lg">{inquiry.subject}</h4>
                            <p className="text-sm text-muted-foreground mt-1">From: {inquiry.name}</p>
                          </div>

                          <p className="text-sm lg:text-base text-muted-foreground">{inquiry.message}</p>

                          <div className="flex flex-wrap items-center gap-4 text-xs lg:text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Mail size={14} />
                              <span>{inquiry.email}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Phone size={14} />
                              <span>{inquiry.phone}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{inquiry.date}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Button size="sm" variant="outline">
                            <Eye size={16} className="mr-2" />
                            View Details
                          </Button>
                          <Select onValueChange={(value) => handleInquiryStatusUpdate(inquiry.id, value)}>
                          <SelectTrigger className="text-sm">
                            <SelectValue placeholder="Change Status" />
                          </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">
                                <div className="flex items-center">
                                  <Clock size={14} className="mr-2" />
                                  Pending
                                </div>
                              </SelectItem>
                              <SelectItem value="responded">
                                <div className="flex items-center">
                                  <CheckCircle size={14} className="mr-2" />
                                  Responded
                                </div>
                              </SelectItem>
                              <SelectItem value="scheduled">
                                <div className="flex items-center">
                                  <Calendar size={14} className="mr-2" />
                                  Scheduled
                                </div>
                              </SelectItem>
                              <SelectItem value="closed">
                                <div className="flex items-center">
                                  <XCircle size={14} className="mr-2" />
                                  Closed
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <Button size="sm" className="bg-primary text-primary-foreground">
                            <Mail size={16} className="mr-2" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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
                {galleryImages.map((image) => (
                  <Card key={image.id} className="border-0 shadow-soft overflow-hidden">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                      <ImageIcon size={48} className="text-gray-400" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge 
                          variant={image.status === 'published' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {image.status.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{image.views} views</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                      <p className="text-xs text-muted-foreground mb-3">Category: {image.category}</p>
                      <p className="text-xs text-muted-foreground mb-4">Uploaded: {image.uploadDate}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline" className="p-1 h-8 w-8">
                            <Eye size={14} />
                          </Button>
                          <Button size="sm" variant="outline" className="p-1 h-8 w-8">
                            <Edit size={14} />
                          </Button>
                          <Button size="sm" variant="outline" className="p-1 h-8 w-8 text-red-500 hover:text-red-700">
                            <Trash2 size={14} />
                          </Button>
                        </div>
                        <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
                          <Download size={14} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
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

        {/* <WaveDivider position="top" /> */}
        
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

        {/* <WaveDivider position="bottom" /> */}
      </section>
    </Layout>
  );
};

export default Admin;