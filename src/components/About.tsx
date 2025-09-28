import { Target, Eye, Heart, Users, BookOpen, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    { icon: Heart, title: "Faith & Integrity", description: "Guided by Christian values and unwavering integrity" },
    { icon: Users, title: "Compassion", description: "Serving with love and understanding for all communities" },
    { icon: BookOpen, title: "Service to Humanity", description: "Dedicated to uplifting and empowering lives" },
    { icon: Star, title: "Excellence", description: "Pursuing the highest standards in all our programs" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Rise Impact Foundation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A non-governmental, non-profit, Christian-based organization transforming lives through education, 
            youth empowerment, and community support across Ghana.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To transform lives through quality education, youth and girl-child empowerment, and comprehensive 
                community support, addressing social and economic inequalities in underserved communities across Ghana.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A Ghana where every child has access to quality education, every youth is empowered to succeed, 
                and every girl is given the opportunity to thrive in a safe, just, and inclusive society.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-accent/20 hover:border-accent/40 transition-colors duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded by passionate BSc graduates and volunteers, Rise Impact Foundation emerged from a deep 
                commitment to addressing the educational and social challenges facing Ghana's underserved communities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe in driving change from the grassroots level, working directly with communities to 
                identify needs and implement sustainable solutions that create lasting impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach combines innovative educational outreach, comprehensive mentorship programs, and 
                targeted empowerment initiatives to break cycles of poverty and create opportunities for growth.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">Education</div>
                    <div className="text-sm text-muted-foreground">Focus</div>
                  </div>
                  <div className="bg-secondary/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-secondary">Youth</div>
                    <div className="text-sm text-muted-foreground">Empowerment</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-accent/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">Girl-Child</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary">Community</div>
                    <div className="text-sm text-muted-foreground">Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;