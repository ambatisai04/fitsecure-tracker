
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowRight, Activity, Shield, LineChart, Smartphone, UserCheck, Award } from "lucide-react";

const Index = () => {
  // For animation on scroll
  const animatedRefs = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      animatedRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  const addToAnimatedRefs = (el: HTMLElement | null) => {
    if (el && !animatedRefs.current.includes(el)) {
      el.classList.add("stagger-item");
      animatedRefs.current.push(el);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 hero-gradient">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 
              ref={addToAnimatedRefs}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
            >
              Track Your Fitness Journey
              <span className="text-primary"> Securely</span>
            </h1>
            <p 
              ref={addToAnimatedRefs}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Monitor your workouts, track your progress, and achieve your fitness goals with our secure and intuitive platform.
            </p>
            <div 
              ref={addToAnimatedRefs}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Preview Image */}
          <div 
            ref={addToAnimatedRefs}
            className="max-w-4xl mx-auto relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white/80 backdrop-blur">
              <div className="h-full w-full flex items-center justify-center bg-gray-50">
                <p className="text-muted-foreground">Application Dashboard Preview</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -right-6 -top-6 h-28 w-44 rounded-lg glass-card flex items-center justify-center p-4 animate-float">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Activity</p>
                  <p className="text-xl font-bold">89%</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -left-4 -bottom-6 h-24 w-40 rounded-lg glass-card flex items-center justify-center p-4 animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Award size={20} className="text-green-500" />
                </div>
                <div>
                  <p className="text-xs font-medium">Goal</p>
                  <p className="text-sm font-bold">Achieved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 
              ref={addToAnimatedRefs}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Designed for your fitness success
            </h2>
            <p 
              ref={addToAnimatedRefs}
              className="text-lg text-muted-foreground"
            >
              Everything you need to track your fitness journey, all in one secure platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div 
              ref={addToAnimatedRefs}
              className="backdrop-blur-card rounded-xl p-6 h-full flex flex-col"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Authentication</h3>
              <p className="text-muted-foreground mb-4 flex-1">
                Industry-standard security protocols to keep your fitness data private and protected.
              </p>
              <Button variant="link" className="p-0 justify-start">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
            
            {/* Feature 2 */}
            <div 
              ref={addToAnimatedRefs}
              className="backdrop-blur-card rounded-xl p-6 h-full flex flex-col"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <LineChart size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-muted-foreground mb-4 flex-1">
                Visualize your fitness journey with intuitive charts and detailed progress reports.
              </p>
              <Button variant="link" className="p-0 justify-start">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
            
            {/* Feature 3 */}
            <div 
              ref={addToAnimatedRefs}
              className="backdrop-blur-card rounded-xl p-6 h-full flex flex-col"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Smartphone size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Friendly</h3>
              <p className="text-muted-foreground mb-4 flex-1">
                Access your fitness data on any device with our fully responsive design.
              </p>
              <Button variant="link" className="p-0 justify-start">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
            
            {/* Feature 4 */}
            <div 
              ref={addToAnimatedRefs}
              className="backdrop-blur-card rounded-xl p-6 h-full flex flex-col"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <UserCheck size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Experience</h3>
              <p className="text-muted-foreground mb-4 flex-1">
                Custom fitness plans and recommendations based on your goals and progress.
              </p>
              <Button variant="link" className="p-0 justify-start">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
            
            {/* More features */}
            <div 
              ref={addToAnimatedRefs}
              className="backdrop-blur-card rounded-xl p-6 h-full flex flex-col md:col-span-2 lg:col-span-2"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Activity size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Fitness Analytics</h3>
              <p className="text-muted-foreground mb-4 flex-1">
                Get detailed insights into your workout patterns, nutrition, and recovery to optimize your fitness routine.
              </p>
              <Button variant="link" className="p-0 justify-start">
                Learn more <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div 
            ref={addToAnimatedRefs}
            className="max-w-4xl mx-auto text-center bg-primary/5 rounded-2xl p-12 border border-primary/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your fitness journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust our platform to track and secure their fitness data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="font-bold text-xl">FitSecure</span>
              </Link>
              <p className="text-sm text-muted-foreground mt-2">
                Secure fitness tracking for everyone.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-full md:w-auto">
                <h4 className="font-medium mb-3">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Features</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Pricing</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Integrations</a></li>
                </ul>
              </div>
              
              <div className="w-full md:w-auto">
                <h4 className="font-medium mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Documentation</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Guides</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Help Center</a></li>
                </ul>
              </div>
              
              <div className="w-full md:w-auto">
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground order-2 md:order-1">
              © {new Date().getFullYear()} FitSecure. All rights reserved.
            </p>
            <div className="flex space-x-6 mb-4 md:mb-0 order-1 md:order-2">
              <a href="#" className="text-muted-foreground hover:text-primary">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
