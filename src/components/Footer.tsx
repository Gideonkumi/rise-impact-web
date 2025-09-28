import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/rise-impact-logo.png";

const Footer = () => {
  const footerLinks = {
    about: [
      { label: "Our Mission", href: "#about" },
      { label: "Our Vision", href: "#about" },
      { label: "Core Values", href: "#about" },
      { label: "Our Story", href: "#about" },
    ],
    programs: [
      { label: "Educational Outreach", href: "#programs" },
      { label: "Girl-Child Empowerment", href: "#programs" },
      { label: "Youth Mentorship", href: "#programs" },
      { label: "Scholarship Program", href: "#programs" },
    ],
    support: [
      { label: "Donate Now", href: "#donate" },
      { label: "Volunteer", href: "#contact" },
      { label: "Partner with Us", href: "#contact" },
      { label: "Corporate Sponsorship", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Financial Reports", href: "#" },
      { label: "Transparency", href: "#" },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/riseimpactfoundation", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/riseimpactfound?s=21", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/riseimpactfoundation", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/rise-impact-foundation/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Rise Impact Foundation" className="w-12 h-12" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-primary">Rise Impact</span>
                  <span className="text-sm text-muted-foreground -mt-1">Foundation</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transforming lives through education, youth empowerment, and community support. 
                Building a better Ghana one community at a time.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                  <span>0558806598</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                  <span>riseimpactfoundation@gmail.com</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                  <span>Ghana</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* About Links */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">About Us</h4>
                  <ul className="space-y-3">
                    {footerLinks.about.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Programs Links */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Our Programs</h4>
                  <ul className="space-y-3">
                    {footerLinks.programs.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Links */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Support Us</h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h4>
              <p className="text-muted-foreground text-sm">
                Subscribe to our newsletter for updates on our programs and impact stories.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex h-10 w-full sm:w-64 lg:w-80 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button variant="accent" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>© 2024 Rise Impact Foundation. All rights reserved.</p>
              <p className="mt-1">
                A Christian-based non-profit organization dedicated to transforming lives.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-secondary fill-current" />
              <span>for the people of Ghana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;