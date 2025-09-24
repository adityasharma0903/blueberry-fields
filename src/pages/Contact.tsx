import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import WaveDivider from '../components/WaveDivider';
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

// Paste your Google Apps Script Web App URL here
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwBlBxUscyb7Fu8Vqfkq8-quReGu-a_HC5xHkRL1avbdb9usNkUReCAGVPM1WTtPbWCCw/exec';

// Self-contained Layout component
// const Layout = ({ children }) => {
//   return (
//     <div className="bg-background font-sans text-foreground">
//       <main>{children}</main>
//     </div>
//   );
// };

// Self-contained WaveDivider component
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

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'feedback'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (SCRIPT_URL === 'https://script.google.com/macros/s/AKfycbwBlBxUscyb7Fu8Vqfkq8-quReGu-a_HC5xHkRL1avbdb9usNkUReCAGVPM1WTtPbWCCw/exec') {
    //   console.error('Please update SCRIPT_URL with your Google Apps Script URL.');
    //   toast({
    //     title: "Error",
    //     description: "Please configure your Google Apps Script URL.",
    //     variant: "destructive"
    //   });
    //   return;
    // }

    setLoading(true);
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackForm),
      });

      console.log('Feedback submitted to Google Apps Script. Status:', response.status);

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

    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your feedback. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
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

          <div className="flex justify-center">
            {/* Feedback Form */}
            <Card className="border-0 shadow-soft w-full lg:w-2/3">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MessageCircle size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold">Feedback Form</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
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
                    disabled={loading}
                  >
                    <Send size={20} className="mr-2" />
                    {loading ? 'Submitting...' : 'Send Feedback'}
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
                    <MapPin size={24} className="text-primary" />
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
                  <MapPin size={20} className="mr-2" />
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