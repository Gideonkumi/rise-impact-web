import { BookOpen, Users, Heart, Briefcase, Stethoscope, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import programsImage from "@/assets/programs-image.jpg";
import girlsEmpowermentImage from "@/assets/girls-empowerment.jpg";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Educational Outreach",
      description: "Free extra classes, vacation clinics for BECE and WASSCE candidates, and learning materials distribution.",
      features: ["Volunteer teacher deployment", "Exam preparation clinics", "Learning materials provision"],
      color: "primary"
    },
    {
      icon: Heart,
      title: "Girl-Child Empowerment",
      description: "Leadership bootcamps, menstrual hygiene campaigns, and anti-teenage pregnancy awareness programs.",
      features: ["Girls Leadership Bootcamp", "Sanitary pad distributions", "School dropout prevention"],
      color: "secondary"
    },
    {
      icon: Users,
      title: "Youth Mentorship",
      description: "Monthly mentorship sessions, digital skills training, and community service projects led by youth.",
      features: ["Professional mentorship", "Digital skills training", "Community service projects"],
      color: "accent"
    },
    {
      icon: Trophy,
      title: "Scholarship Program",
      description: "Tuition and logistical support for brilliant but needy students through partnerships.",
      features: ["Tuition support", "Educational materials", "Partnership funding"],
      color: "primary"
    },
    {
      icon: Stethoscope,
      title: "Health & Social Impact",
      description: "Medical outreaches, mental health awareness, and community sanitation drives.",
      features: ["Medical outreaches", "Mental health programs", "Community clean-up drives"],
      color: "secondary"
    },
    {
      icon: Briefcase,
      title: "Skills Development",
      description: "Short-term skills training and entrepreneurship support for unemployed youth and women.",
      features: ["Skills training programs", "Entrepreneurship support", "Employment assistance"],
      color: "accent"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive initiatives designed to transform lives and communities through targeted interventions 
            in education, empowerment, and social development.
          </p>
        </div>

        {/* Featured Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`border-${program.color}/20 hover:border-${program.color}/40 transition-all duration-300 group hover:shadow-lg`}
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${program.color}/10 rounded-full mb-4 group-hover:bg-${program.color}/20 transition-colors duration-300`}>
                  <program.icon className={`w-8 h-8 text-${program.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <ul className="space-y-2 mb-4">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 bg-${program.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Creating Lasting Impact</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our programs are designed with sustainability and community ownership at their core. We work closely 
              with local communities to ensure that our interventions create lasting change that continues long 
              after our direct involvement.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From providing educational opportunities to the most vulnerable children to empowering young women 
              with leadership skills, each program addresses specific challenges while building stronger, more 
              resilient communities.
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Students Supported</div>
              </div>
              <div className="bg-secondary/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">200+</div>
                <div className="text-sm text-muted-foreground">Girls Empowered</div>
              </div>
              <div className="bg-accent/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Youth Mentored</div>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Scholarships Given</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={programsImage}
                  alt="Community Programs"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Community Education</h4>
                  <p className="text-sm opacity-90">Bringing quality education to rural areas</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={girlsEmpowermentImage}
                  alt="Girls Empowerment"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Girls Leadership</h4>
                  <p className="text-sm opacity-90">Empowering the next generation of leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;