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
import { useToast } from '@/hooks/use-toast';
import { 
  Users, 
  Calendar, 
  FileText, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import heroClassroom from '@/assets/hero-classroom.jpg';
import teacherReading from '@/assets/teacher-reading.jpg';

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    childAge: '',
    preferredGrade: '',
    previousSchool: '',
    interests: '',
    medicalInfo: '',
    inquiryType: 'admission',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Admission inquiry submitted:', formData);
    
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "We'll contact you within 24 hours to schedule a visit.",
    });

    // Reset form
    setFormData({
      childName: '',
      parentName: '',
      email: '',
      phone: '',
      address: '',
      childAge: '',
      preferredGrade: '',
      previousSchool: '',
      interests: '',
      medicalInfo: '',
      inquiryType: 'admission',
      message: ''
    });
  };

  const admissionSteps = [
    {
      step: 1,
      title: "Submit Inquiry",
      description: "Fill out our admission form with child's details and preferences",
      icon: FileText
    },
    {
      step: 2,
      title: "School Visit", 
      description: "Schedule a campus tour to meet our faculty and see our facilities",
      icon: MapPin
    },
    {
      step: 3,
      title: "Document Submission",
      description: "Submit required documents and complete the application process",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Receive admission confirmation and welcome package",
      icon: Users
    }
  ];

  const classStrength = [
    { grade: "Nursery", strength: "15 students per class", available: "5 seats" },
    { grade: "KG-I", strength: "18 students per class", available: "3 seats" },
    { grade: "KG-II", strength: "20 students per class", available: "7 seats" },
    { grade: "Class I", strength: "22 students per class", available: "4 seats" },
    { grade: "Class II", strength: "25 students per class", available: "6 seats" },
    { grade: "Class III", strength: "25 students per class", available: "8 seats" },
    { grade: "Class IV", strength: "28 students per class", available: "2 seats" },
    { grade: "Class V", strength: "30 students per class", available: "5 seats" }
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
              <span className="text-secondary">Admissions</span> Open
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Join our nurturing community where every child's potential is recognized and developed
            </p>
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-medium px-8 py-4 text-lg rounded-full"
            >
              Apply Now
            </Button>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Student Strength */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Class Information</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Current Student Strength & Availability
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain small class sizes to ensure individual attention and quality education for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classStrength.map((classInfo, index) => (
              <Card key={index} className="border-0 shadow-soft card-hover">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold mb-2">{classInfo.grade}</h3>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">{classInfo.strength}</div>
                    <div className="text-lg font-bold text-primary">{classInfo.available}</div>
                    <div className="text-xs text-muted-foreground">Available</div>
                  </div>
                  <div className={`mt-4 px-3 py-1 rounded-full text-xs font-medium ${
                    parseInt(classInfo.available) > 5 
                      ? 'bg-green-100 text-green-800' 
                      : parseInt(classInfo.available) > 2 
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {parseInt(classInfo.available) > 5 ? 'Open' : parseInt(classInfo.available) > 2 ? 'Limited' : 'Few Seats'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Easy Process</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Admission Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-soft text-center card-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <step.icon size={32} className="text-primary-foreground" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-secondary-foreground font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
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
            <Badge className="bg-secondary text-secondary-foreground mb-4">Get Started</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Admission Inquiry Form
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Fill out the form below and our admissions team will contact you to guide you through the process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-strong">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="childName">Child's Full Name *</Label>
                      <Input
                        id="childName"
                        value={formData.childName}
                        onChange={(e) => handleInputChange('childName', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="childAge">Child's Age</Label>
                      <Input
                        id="childAge"
                        value={formData.childAge}
                        onChange={(e) => handleInputChange('childAge', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredGrade">Preferred Grade</Label>
                      <Select value={formData.preferredGrade} onValueChange={(value) => handleInputChange('preferredGrade', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nursery">Nursery</SelectItem>
                          <SelectItem value="kg1">KG-I</SelectItem>
                          <SelectItem value="kg2">KG-II</SelectItem>
                          <SelectItem value="class1">Class I</SelectItem>
                          <SelectItem value="class2">Class II</SelectItem>
                          <SelectItem value="class3">Class III</SelectItem>
                          <SelectItem value="class4">Class IV</SelectItem>
                          <SelectItem value="class5">Class V</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="previousSchool">Previous School (if any)</Label>
                    <Input
                      id="previousSchool"
                      value={formData.previousSchool}
                      onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interests">Child's Interests & Hobbies</Label>
                    <Textarea
                      id="interests"
                      value={formData.interests}
                      onChange={(e) => handleInputChange('interests', e.target.value)}
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="medicalInfo">Medical Information (Allergies, Special Needs, etc.)</Label>
                    <Textarea
                      id="medicalInfo"
                      value={formData.medicalInfo}
                      onChange={(e) => handleInputChange('medicalInfo', e.target.value)}
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiryType">Type of Inquiry</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admission">Admission Inquiry</SelectItem>
                        <SelectItem value="visit">School Visit</SelectItem>
                        <SelectItem value="information">General Information</SelectItem>
                        <SelectItem value="transfer">Transfer Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="mt-2"
                      rows={4}
                      placeholder="Any specific questions or requirements..."
                    />
                  </div>

                  <div className="text-center pt-6">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-primary text-primary-foreground hover:bg-primary-light px-12 py-4 rounded-full"
                    >
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-primary-foreground mb-4">Get in Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Contact Our Admissions Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-soft text-center p-6">
              <Phone size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </Card>

            <Card className="border-0 shadow-soft text-center p-6">
              <Mail size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">admissions@blueberryfields.edu.in</p>
            </Card>

            <Card className="border-0 shadow-soft text-center p-6">
              <MapPin size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Main Road, Derabassi, Punjab</p>
            </Card>

            <Card className="border-0 shadow-soft text-center p-6">
              <Clock size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Office Hours</h3>
              <p className="text-muted-foreground">Mon-Fri: 9 AM - 4 PM</p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;