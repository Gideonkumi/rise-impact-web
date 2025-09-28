import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "0558806598",
      description: "Available Monday - Friday, 8AM - 6PM",
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email",
      info: "riseimpactfoundation@gmail.com",
      description: "We'll respond within 24 hours",
      color: "secondary"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Ghana",
      description: "Serving communities across Ghana",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "Mon - Fri: 8AM - 6PM",
      description: "Weekend availability for emergencies",
      color: "primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to make a difference? Contact us to learn more about our programs, 
            volunteer opportunities, or partnership possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Send className="w-6 h-6 text-primary mr-3" />
                Send us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input 
                    id="first-name" 
                    placeholder="Enter your first name"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input 
                    id="last-name" 
                    placeholder="Enter your last name"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email address"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Enter your phone number"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What is this about?"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button variant="hero" size="xl" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by Rise Impact Foundation 
                regarding your inquiry. We respect your privacy and will not share your information.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`border-${info.color}/20 hover:border-${info.color}/40 transition-colors duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-${info.color}/10 rounded-lg flex-shrink-0`}>
                          <info.icon className={`w-6 h-6 text-${info.color}`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-foreground font-medium mb-1">{info.info}</p>
                          <p className="text-muted-foreground text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Contact Options */}
            <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">For donations & support:</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:0558806598">Call Now</a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">General inquiries:</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:riseimpactfoundation@gmail.com">Email Us</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partnership & Volunteering */}
            <Card className="bg-secondary/5 border-secondary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Join Our Mission</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Interested in volunteering, partnerships, or corporate social responsibility programs? 
                  We'd love to hear from you!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Volunteer opportunities available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Corporate partnership programs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Community collaboration initiatives</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;