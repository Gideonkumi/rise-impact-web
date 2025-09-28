import { Heart, CreditCard, Smartphone, Building2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");

  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  const donationMethods = [
    {
      icon: Smartphone,
      title: "Mobile Money",
      description: "MTN Mobile Money, Vodafone Cash, AirtelTigo Money",
      color: "primary"
    },
    {
      icon: CreditCard,
      title: "Online Payment",
      description: "Visa, Mastercard, and other major cards accepted",
      color: "secondary"
    },
    {
      icon: Building2,
      title: "Bank Transfer",
      description: "Direct bank deposits and wire transfers",
      color: "accent"
    }
  ];

  const impactAreas = [
    { amount: 25, impact: "Provides school supplies for 1 student for a month" },
    { amount: 50, impact: "Sponsors exam clinic attendance for 2 students" },
    { amount: 100, impact: "Funds a complete leadership bootcamp session" },
    { amount: 250, impact: "Supports a student's education for a full term" },
    { amount: 500, impact: "Establishes a new program in a rural community" },
    { amount: 1000, impact: "Provides annual scholarship for a brilliant student" }
  ];

  const currentImpact = impactAreas.find(area => area.amount === selectedAmount) || 
                       { impact: "Makes a significant difference in our programs" };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Make a <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your generous support helps us transform lives and build stronger communities. 
            Every donation, no matter the size, creates real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 mx-auto">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Support Our Mission</CardTitle>
              <p className="text-muted-foreground">Choose your donation amount and method</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount Selection */}
              <div>
                <Label className="text-base font-semibold mb-4 block">Select Amount (GHS)</Label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className="h-12"
                    >
                      ₵{amount}
                    </Button>
                  ))}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Custom Amount</Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    className="h-12"
                  />
                </div>
              </div>

              {/* Impact Description */}
              <div className="bg-accent/5 rounded-lg p-4">
                <h4 className="font-semibold text-accent mb-2">Your Impact:</h4>
                <p className="text-sm text-muted-foreground">{currentImpact.impact}</p>
              </div>

              {/* Donation Button */}
              <Button variant="donate" size="xl" className="w-full">
                <Heart className="w-5 h-5 mr-2" />
                Donate ₵{customAmount || selectedAmount} Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Donation Methods & Info */}
          <div className="space-y-8">
            {/* Payment Methods */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">How to Donate</h3>
              <div className="space-y-4">
                {donationMethods.map((method, index) => (
                  <Card key={index} className={`border-${method.color}/20 hover:border-${method.color}/40 transition-colors duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-${method.color}/10 rounded-lg flex-shrink-0`}>
                          <method.icon className={`w-6 h-6 text-${method.color}`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">{method.title}</h4>
                          <p className="text-muted-foreground text-sm">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact for Donations */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Need Help with Your Donation?</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium">Phone:</span> 0558806598
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Email:</span> riseimpactfoundation@gmail.com
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Our team is available to assist with large donations, corporate partnerships, 
                  or setting up recurring contributions.
                </p>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-secondary/5 border-secondary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Your Donation is Secure</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    100% of donations go directly to programs
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Transparent financial reporting
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Regular updates on impact and progress
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Christian-based values and integrity
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

export default Donation;