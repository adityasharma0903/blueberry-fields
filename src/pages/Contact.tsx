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
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star,
  Send,
  MessageCircle,
  CalendarDays,
  Users,
  Building,
  Route,
  Smartphone
} from 'lucide-react';
import heroClassroom from '@/assets/hero-classroom.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'feedback'
  });

  const [visitForm, setVisitForm] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedbackForm);
    toast({
      title: "Feedback Submitted!",
      description: "Thank you for your valuable feedback. We'll review it carefully.",
    });
    setFeedbackForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'feedback'
    });
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Campus visit scheduled:', visitForm);
    toast({
      title: "Visit Scheduled!",
      description: "We'll confirm your campus visit appointment within 24 hours.",
    });
    setVisitForm({
      parentName: '',
      email: '',
      phone: '',
      childAge: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Campus",
      details: [
        "Blueberry Fields School",
        "Near Main Market, GT Road",
        "Derabassi, Punjab - 140507",
        "India"
      ],
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Main Office: +91 98765 43210",
        "Admissions: +91 98765 43211", 
        "Principal: +91 98765 43212",
        "Emergency: +91 98765 43213"
      ],
      color: "bg-secondary"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@blueberryfields.edu.in",
        "admissions@blueberryfields.edu.in",
        "principal@blueberryfields.edu.in",
        "feedback@blueberryfields.edu.in"
      ],
      color: "bg-primary"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "School: 8:00 AM - 3:00 PM",
        "Office: 9:00 AM - 4:00 PM", 
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ],
      color: "bg-secondary"
    }
  ];

  const quickActions = [
    {
      icon: CalendarDays,
      title: "Schedule a Visit",
      description: "Book a personalized campus tour",
      action: "Book Now"
    },
    {
      icon: MessageCircle,
      title: "Admission Inquiry",
      description: "Get information about admissions",
      action: "Inquire Now"
    },
    {
      icon: Users,
      title: "Parent Meeting",
      description: "Meet with our educational team", 
      action: "Schedule"
    },
    {
      icon: Phone,
      title: "Emergency Contact",
      description: "24/7 support for urgent matters",
      action: "Call Now"
    }
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
              Get In <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              We're here to answer your questions and help you join our school family
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Contact Information</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
              Multiple Ways to Reach Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-soft text-center card-hover">
                <CardContent className="p-6 lg:p-8">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6`}>
                    <info.icon size={24} className="lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-heading font-bold mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm lg:text-base text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="border-0 shadow-soft card-hover">
                <CardContent className="p-4 lg:p-6 text-center">
                  <action.icon size={32} className="text-primary mx-auto mb-3 lg:mb-4" />
                  <h4 className="font-heading font-bold text-sm lg:text-base mb-2">{action.title}</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground mb-3 lg:mb-4">{action.description}</p>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-light rounded-full w-full">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 lg:py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Connect With Us</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
              Send Us a Message
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Feedback Form */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MessageCircle size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold">Feedback Form</h3>
                </div>

                <form onSubmit={handleFeedbackSubmit} className="space-y-4 lg:space-y-6">
                  <div>
                    <Label htmlFor="feedbackName">Your Name *</Label>
                    <Input
                      id="feedbackName"
                      value={feedbackForm.name}
                      onChange={(e) => setFeedbackForm(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="feedbackEmail">Email *</Label>
                      <Input
                        id="feedbackEmail"
                        type="email"
                        value={feedbackForm.email}
                        onChange={(e) => setFeedbackForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="feedbackPhone">Phone</Label>
                      <Input
                        id="feedbackPhone"
                        value={feedbackForm.phone}
                        onChange={(e) => setFeedbackForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="feedbackType">Type of Inquiry</Label>
                    <Select value={feedbackForm.type} onValueChange={(value) => setFeedbackForm(prev => ({ ...prev, type: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="feedback">General Feedback</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                        <SelectItem value="compliment">Compliment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="feedbackSubject">Subject *</Label>
                    <Input
                      id="feedbackSubject"
                      value={feedbackForm.subject}
                      onChange={(e) => setFeedbackForm(prev => ({ ...prev, subject: e.target.value }))}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="feedbackMessage">Message *</Label>
                    <Textarea
                      id="feedbackMessage"
                      value={feedbackForm.message}
                      onChange={(e) => setFeedbackForm(prev => ({ ...prev, message: e.target.value }))}
                      required
                      className="mt-2"
                      rows={4}
                      placeholder="Please share your feedback with us..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary-light rounded-full"
                  >
                    <Send size={20} className="mr-2" />
                    Send Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Campus Visit Form */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Building size={24} className="text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold">Schedule Campus Visit</h3>
                </div>

                <form onSubmit={handleVisitSubmit} className="space-y-4 lg:space-y-6">
                  <div>
                    <Label htmlFor="visitParentName">Parent/Guardian Name *</Label>
                    <Input
                      id="visitParentName"
                      value={visitForm.parentName}
                      onChange={(e) => setVisitForm(prev => ({ ...prev, parentName: e.target.value }))}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="visitEmail">Email *</Label>
                      <Input
                        id="visitEmail"
                        type="email"
                        value={visitForm.email}
                        onChange={(e) => setVisitForm(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="visitPhone">Phone *</Label>
                      <Input
                        id="visitPhone"
                        value={visitForm.phone}
                        onChange={(e) => setVisitForm(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="childAge">Child's Age</Label>
                    <Input
                      id="childAge"
                      value={visitForm.childAge}
                      onChange={(e) => setVisitForm(prev => ({ ...prev, childAge: e.target.value }))}
                      className="mt-2"
                      placeholder="e.g., 4 years"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={visitForm.preferredDate}
                        onChange={(e) => setVisitForm(prev => ({ ...prev, preferredDate: e.target.value }))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select value={visitForm.preferredTime} onValueChange={(value) => setVisitForm(prev => ({ ...prev, preferredTime: value }))}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9am-11am">9:00 AM - 11:00 AM</SelectItem>
                          <SelectItem value="11am-1pm">11:00 AM - 1:00 PM</SelectItem>
                          <SelectItem value="2pm-4pm">2:00 PM - 4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="visitMessage">Additional Message</Label>
                    <Textarea
                      id="visitMessage"
                      value={visitForm.message}
                      onChange={(e) => setVisitForm(prev => ({ ...prev, message: e.target.value }))}
                      className="mt-2"
                      rows={4}
                      placeholder="Any specific areas you'd like to see or questions you have..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary-light rounded-full"
                  >
                    <CalendarDays size={20} className="mr-2" />
                    Schedule Visit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
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
            <Badge className="bg-secondary text-secondary-foreground mb-4">Find Us</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Location & Directions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <Card className="bg-background border-0 shadow-strong">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Route size={24} className="text-primary" />
                    <h3 className="text-xl font-heading font-bold">How to Reach</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">By Car:</h4>
                      <p className="text-sm text-muted-foreground">
                        Located on GT Road, near Main Market Derabassi. Ample parking available on campus.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">By Public Transport:</h4>
                      <p className="text-sm text-muted-foreground">
                        Regular bus service from Chandigarh and nearby cities. Auto-rickshaws available from Derabassi bus stand.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Landmarks:</h4>
                      <p className="text-sm text-muted-foreground">
                        Near SBI Bank, opposite City Hospital, 2 km from Railway Station.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  size="lg" 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary-light rounded-full"
                >
                  <Smartphone size={20} className="mr-2" />
                  Get Directions
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full"
                >
                  <Phone size={20} className="mr-2" />
                  Call for Help
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-strong overflow-hidden">
                <div className="bg-gray-200 h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Blueberry Fields School, Derabassi</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>
    </Layout>
  );
};

export default Contact;