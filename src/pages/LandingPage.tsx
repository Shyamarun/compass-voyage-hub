import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Compass, Users, Calendar, TrendingUp, MapPin, Shield } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Compass,
      title: "Trip Planning Made Simple",
      description: "Organize and manage travel itineraries with intuitive tools designed for efficiency."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team to coordinate group travel and bookings."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Keep track of all your trips, bookings, and deadlines in one centralized calendar."
    },
    {
      icon: TrendingUp,
      title: "Business Insights",
      description: "Track performance metrics and make data-driven decisions for your travel business."
    },
    {
      icon: MapPin,
      title: "Global Reach",
      description: "Manage destinations and packages across multiple locations effortlessly."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security to protect your business and customer data."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Compass CRM</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/auth')}>
                Login
              </Button>
              <Button onClick={() => navigate('/auth')} className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Bringing travel management{" "}
              <span className="text-primary">insights to light</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Compass CRM is the technology platform that turns travel complexity into streamlined operations. 
              We give you the power to discover hidden opportunities, manage bookings efficiently, and grow your business faster.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/auth')}
                className="bg-primary hover:bg-primary/90 text-lg px-8"
              >
                Schedule a Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
              >
                Watch Video
              </Button>
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Bookings</span>
                  </div>
                  <p className="text-3xl font-bold">248</p>
                  <p className="text-sm text-green-600">+12% vs last month</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Travelers</span>
                  </div>
                  <p className="text-3xl font-bold">1,847</p>
                  <p className="text-sm text-green-600">+8% growth</p>
                </div>
                <div className="bg-background p-6 rounded-lg shadow-lg col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Revenue</span>
                  </div>
                  <p className="text-3xl font-bold">$124,500</p>
                  <p className="text-sm text-green-600">+23% this quarter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">1,000+ travel agencies</h2>
            <p className="text-xl text-muted-foreground">trust Compass CRM with their growth and productivity</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">One platform, unlimited potential</h2>
          <p className="text-xl text-muted-foreground">All your critical travel data, all in one place.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your travel business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of travel professionals who are already using Compass CRM to streamline operations and grow revenue.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/auth')}
            className="bg-primary hover:bg-primary/90 text-lg px-8"
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Compass className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Compass CRM</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Compass CRM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;