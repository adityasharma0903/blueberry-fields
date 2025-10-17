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
const SCRIPT_URL = import.meta.env.VITE_CONTACT_URL;
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
        "#885, Blueberry Fields School,",
        "Adjacent Sukhmani Engineering College, Sarswati vihar,",
        "Derabassi, Punjab - 140507",
      ],
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 9646781248",
        "+91 9041041248",
      ],
      color: "bg-secondary"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "blueberryfieldsschool@gmail.com"
      ],
      color: "bg-primary"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "School: 8:00 AM - 2:00 PM",
        "Office: 8:00 AM - 2:00 PM",
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
                        Located at #885, Blueberry Fields School, Sec-16, Sarswati vihar, Dera Bassi
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
                        Adjacent to Sukhmani Engineering College, Derabassi
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary-light rounded-full"
                  asChild
                >
                  <a
                    href="https://maps.app.goo.gl/XeyBAZGJXFBgo9CJ7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin size={20} className="mr-2" />
                    Get Directions
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary border-primary-foreground rounded-full"
                  onClick={() => window.location.href = "tel:9646781248"}
                >
                  <Phone size={20} className="mr-2" />
                  Call for Help
                </Button>


              </div>
            </div>

            <div className="relative">
              <Card className="border-0 shadow-strong overflow-hidden">
                <div className="bg-gray-200 h-64 lg:h-80 flex items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d773.4939305734298!2d76.83967878544932!3d30.58063289131161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDM0JzUwLjkiTiA3NsKwNTAnMjIuNyJF!5e0!3m2!1sen!2sin!4v1758972614420!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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