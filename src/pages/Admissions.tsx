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
    preferredGrade: '',
    message: ''
  });

  // IMPORTANT: Paste your Google Apps Script Web App URL here
  const SCRIPT_URL = import.meta.env.VITE_INQUIRIES_URL;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors mode
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Submission response:', response);

      toast({
        title: "Inquiry Submitted Successfully!",
        description: "We'll contact you within 24 hours.",
      });

      // Reset form after successful submission
      setFormData({
        childName: '',
        parentName: '',
        email: '',
        phone: '',
        preferredGrade: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
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
    { grade: "Play Group" },
    { grade: "Nursery" },
    { grade: "LKG" },
    { grade: "UKG" },
    { grade: "Class I-V" },
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
              onClick={() => {
                document.getElementById("admission-form")?.scrollIntoView({ behavior: "smooth" });
              }}
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
              Grades Offered
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain small class sizes to ensure individual attention and quality education for every child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {classStrength.map((classInfo, index) => (
              <Card key={index} className="border border-primary/20 shadow-soft card-hover">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold">{classInfo.grade}</h3>
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
      <section id="admission-form" className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-16 left-16 text-secondary animate-float opacity-40">
          <Star size={28} fill="currentColor" />
        </div>
        <div className="absolute bottom-16 right-20 text-secondary animate-float opacity-60" style={{ animationDelay: '3s' }}>
          <Star size={24} fill="currentColor" />
        </div>

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
                    <Label htmlFor="preferredGrade">Preferred Grade</Label>
                    <Select value={formData.preferredGrade} onValueChange={(value) => handleInputChange('preferredGrade', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="class1">Class I</SelectItem>
                        <SelectItem value="class2">Class II</SelectItem>
                        <SelectItem value="class3">Class III</SelectItem>
                        <SelectItem value="class4">Class IV</SelectItem>
                        <SelectItem value="class5">Class V</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
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
              <p className="text-muted-foreground">+91 9646781248 <br></br> +91 9041041248</p>
            </Card>

            <Card className="border-0 shadow-soft text-center p-6">
              <Mail size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">blueberryfieldsschool@gmail.com</p>
            </Card>

            <Card className="border-0 shadow-soft text-center p-6">
              <MapPin size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">#885, Blueberry Fields School, Sec-16, Adjacent Sukhmani Engineering College, Sarswati vihar, Dera Bassi</p>
            </Card>

            <Card className="border-0 shadow-soft text-center p-6">
              <Clock size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold mb-2">Office Hours</h3>
              <p className="text-muted-foreground">Mon-Fri: 8 AM - 2 PM</p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
