import React, { useState } from 'react';
import Layout from '../components/Layout';
import WaveDivider from '../components/WaveDivider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DollarSign, 
  CreditCard, 
  Calendar, 
  CheckCircle, 
  Star,
  BookOpen,
  Bus,
  Utensils,
  Shield,
  Calculator
} from 'lucide-react';

const Fees = () => {
  const [selectedGrade, setSelectedGrade] = useState('class1');

  const feeStructure = [
    {
      grade: 'Class I',
      key: 'class1',
      monthly: 3200,
      includes: ['Tuition Fee', 'All Textbooks', 'Notebooks', 'Computer Classes', 'Monthly Tests', 'Progress Reports']
    },
    {
      grade: 'Class II',
      key: 'class2',
      monthly: 3200,
      includes: ['Tuition Fee', 'All Textbooks', 'Notebooks', 'Computer Classes', 'Monthly Tests', 'Progress Reports']
    },
    {
      grade: 'Class III',
      key: 'class3',
      monthly: 3200,
      includes: ['Tuition Fee', 'All Textbooks', 'Notebooks', 'Computer Classes', 'Science Lab', 'Monthly Tests', 'Progress Reports']
    },
    {
      grade: 'Class IV',
      key: 'class4',
      monthly: 3200,
      includes: ['Tuition Fee', 'All Textbooks', 'Notebooks', 'Computer Classes', 'Science Lab', 'Library Access', 'Monthly Tests', 'Progress Reports']
    },
    {
      grade: 'Class V',
      key: 'class5',
      monthly: 3200,
      includes: ['Tuition Fee', 'All Textbooks', 'Notebooks', 'Computer Classes', 'Science Lab', 'Library Access', 'Monthly Tests', 'Progress Reports']
    }
  ];

  const transportFees = [
    { route: 'Adarsh Nagar', monthly: 1100, distance: 'Within 4km' },
    { route: 'Shakti Nagar', monthly: 1100, distance: 'Within 4km' },
    { route: 'Gulabgarh', monthly: 1100, distance: 'Within 4km' }
  ];

  const additionalFees = [
    {
      service: 'Lunch Program',
      monthly: 2000,
      annual: 20000,
      description: 'Nutritious homemade meals prepared fresh daily'
    },
    {
      service: 'Extended Day Care',
      monthly: 1500,
      annual: 15000,
      description: 'After-school care till 5:30 PM with supervised activities'
    },
    {
      service: 'Summer Camp',
      monthly: 0,
      annual: 8000,
      description: 'Fun-filled summer activities and learning programs'
    },
    {
      service: 'Sports Training',
      monthly: 800,
      annual: 8000,
      description: 'Professional sports coaching and equipment'
    },
    {
      service: 'Music Classes',
      monthly: 1000,
      annual: 10000,
      description: 'Individual and group music lessons with instruments'
    }
  ];

  const paymentMethods = [
    {
      method: 'Bank Transfer',
      icon: CreditCard,
      description: 'Direct bank transfer to school account',
      details: 'Account: Blueberry Fields School, Bank: Punjab National Bank'
    },
    {
      method: 'Online Payment',
      icon: DollarSign,
      description: 'Pay online through our secure payment portal',
      details: 'Credit/Debit Cards, UPI, Net Banking accepted'
    },
    {
      method: 'Cheque Payment',
      icon: Calendar,
      description: 'Post-dated cheques for advance payments',
      details: 'Payable to "Blueberry Fields School"'
    },
    {
      method: 'Cash Payment',
      icon: Shield,
      description: 'Direct cash payment at school office',
      details: 'Office Hours: 9 AM - 4 PM (Mon-Fri)'
    }
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
              Fee <span className="text-secondary">Structure</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Transparent and affordable fee structure with no hidden charges
            </p>
          </div>
        </div>
        <WaveDivider position="bottom" />
      </section>

      {/* Academic Fee Structure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Academic Fees</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Academic Fee Structure 2024-25
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fee structure covering all academic activities, materials, and assessments.
            </p>
          </div>

          <Tabs value={selectedGrade} onValueChange={setSelectedGrade} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              {feeStructure.map((grade) => (
                <TabsTrigger key={grade.key} value={grade.key} className="text-xs lg:text-sm">
                  {grade.grade}
                </TabsTrigger>
              ))}
            </TabsList>

            {feeStructure.map((grade) => (
              <TabsContent key={grade.key} value={grade.key} className="space-y-8">
                <div className="max-w-md mx-auto">
                  <Card className="border-0 shadow-medium border-2 border-secondary">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                        <Calendar size={32} className="text-secondary-foreground" />
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-2">Monthly Fee</h3>
                      <div className="text-3xl font-bold text-secondary mb-4">₹{grade.monthly.toLocaleString()}</div>
                      <p className="text-sm text-muted-foreground">Per month</p>
                      {/* <Badge className="mt-3 bg-secondary text-secondary-foreground">No Admission Fee</Badge> */}
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-0 shadow-soft">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-heading font-bold mb-6">What's Included in {grade.grade} Fee</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {grade.includes.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle size={20} className="text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Transport Fee */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Transportation</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Bus Fee Structure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Safe and reliable transportation service with GPS tracking and trained drivers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-soft overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary text-primary-foreground p-6">
                  <div className="flex items-center justify-center space-x-4">
                    <Bus size={32} />
                    <h3 className="text-2xl font-heading font-bold">Transportation Service</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {transportFees.map((transport, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-accent/30 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Bus size={20} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{transport.route}</h4>
                            <p className="text-sm text-muted-foreground">{transport.distance}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">₹{transport.monthly.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">per month</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                    <h4 className="font-heading font-bold text-lg mb-4">Transportation Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm">GPS tracking system</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm">Trained and verified drivers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm">CCTV surveillance</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm">Female attendant for safety</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm">Real-time parent notifications</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-primary" />
                        <span className="text-sm">Insurance coverage</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      {/* <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-16 left-16 text-secondary animate-float opacity-40">
          <Star size={28} fill="currentColor" />
        </div>
        <div className="absolute bottom-16 right-20 text-secondary animate-float opacity-60" style={{ animationDelay: '3s' }}>
          <Star size={24} fill="currentColor" />
        </div> */}

        {/* <WaveDivider position="top" /> */}
        
        {/* <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-secondary text-secondary-foreground mb-4">Optional Services</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Additional Services & Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFees.map((service, index) => (
              <Card key={index} className="bg-background border-0 shadow-strong">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-bold text-lg">{service.service}</h3>
                    <Utensils size={24} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.monthly > 0 && (
                      <div className="flex justify-between">
                        <span className="text-sm">Monthly Fee:</span>
                        <span className="font-bold text-primary">₹{service.monthly.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm">Annual Fee:</span>
                      <span className="font-bold text-primary">₹{service.annual.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section> */}

      {/* Payment Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4">Payment Options</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Flexible Payment Methods
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer multiple convenient payment options to make fee payment easy for parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-soft text-center card-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{method.method}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  <p className="text-xs text-muted-foreground">{method.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-0 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Payment Schedule</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-primary" />
                    <span>Monthly fees due by 10th of every month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-primary" />
                    <span>Annual payment due by March 31st (with 10% discount)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-primary" />
                    <span>Late payment charge: ₹100 per day after due date</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-primary" />
                    <span>Sibling discount: 10% on second child's fees</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </section>
    </Layout>
  );
};

export default Fees;