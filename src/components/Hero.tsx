import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Rise Impact Foundation - Empowering Communities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/70 to-accent/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="glass rounded-full p-4">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <div className="glass rounded-full p-4">
          <Users className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <div className="glass rounded-full p-4">
          <Heart className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Empowering Lives,
          <br />
          <span className="text-gradient bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
            Building Futures
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-white/90 max-w-3xl mx-auto animate-slide-up">
          Transforming communities through quality education, youth empowerment, and sustainable development across Ghana.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl" className="group">
            Support Our Mission
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="glass rounded-lg p-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-3xl font-bold text-accent-light mb-2">1000+</div>
            <div className="text-white/80">Lives Impacted</div>
          </div>
          <div className="glass rounded-lg p-6 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <div className="text-3xl font-bold text-accent-light mb-2">50+</div>
            <div className="text-white/80">Communities Served</div>
          </div>
          <div className="glass rounded-lg p-6 animate-slide-up" style={{ animationDelay: "1s" }}>
            <div className="text-3xl font-bold text-accent-light mb-2">15+</div>
            <div className="text-white/80">Programs Running</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;