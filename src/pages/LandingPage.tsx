import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Compass, Users, Calendar, TrendingUp, MapPin, Shield, ChevronDown, Play } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSelector } from "@/components/ThemeSelector";

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

  const navItems = [
    {
      title: "Platform",
      items: ["Overview", "Features", "Integrations", "Pricing"]
    },
    {
      title: "Solutions",
      items: ["Travel Agencies", "Tour Operators", "Hotels", "Enterprise"]
    },
    {
      title: "Company",
      items: ["About Us", "Careers", "Contact", "Press"]
    },
    {
      title: "Resources",
      items: ["Blog", "Documentation", "Support", "Community"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Compass className="h-7 w-7 text-foreground" strokeWidth={2.5} />
              <span className="text-xl font-semibold text-foreground">compass</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-foreground hover:text-foreground">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-background">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem}>
                        {subItem}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <ThemeSelector />
              <span className="text-sm text-muted-foreground hidden sm:inline">EN</span>
              <Button variant="ghost" onClick={() => navigate('/auth')} className="text-foreground">
                Login
              </Button>
              <Button 
                onClick={() => navigate('/auth')} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
              >
                Contact sales
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground">
              Bringing<br />
              travel &<br />
              hospitality<br />
              <span className="block mt-1">insights to light</span>
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              Compass is the technology platform that turns data complexity into revenue growth. We give you the power to discover hidden insights, capture missed opportunities, and move faster while working smarter.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/auth')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base px-8 h-12"
              >
                Schedule a Demo
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="text-foreground hover:bg-background/50 rounded-full text-base px-6 h-12 border border-foreground/20"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Video
              </Button>
            </div>
          </div>
          
          {/* Hero Visual - Analytics Cards */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Compensation Card */}
            <div className="absolute top-8 right-0 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-4 shadow-xl w-48 animate-float">
              <div className="text-white">
                <div className="text-sm mb-1">$259</div>
                <div className="text-xs opacity-90">-10% vs. Comp</div>
              </div>
            </div>

            {/* Date Badges */}
            <div className="absolute top-32 left-0 bg-blue-500 text-white rounded-full px-4 py-2 shadow-lg text-sm font-medium">
              9.1
            </div>
            <div className="absolute top-64 left-8 bg-red-400 text-white rounded-full px-4 py-2 shadow-lg text-sm font-medium">
              14
            </div>
            <div className="absolute top-80 left-0 bg-orange-400 text-white rounded-full px-4 py-2 shadow-lg text-sm font-medium">
              23+
            </div>

            {/* Main Dashboard Card */}
            <div className="absolute top-20 left-12 right-16 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-lg ${
                      i % 3 === 0 ? 'bg-blue-400' : 
                      i % 3 === 1 ? 'bg-orange-300' : 
                      'bg-blue-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Demand Card */}
            <div className="absolute bottom-32 left-4 bg-white rounded-xl shadow-xl p-4 w-56">
              <div className="text-sm font-medium text-foreground mb-2">Demand</div>
              <div className="flex gap-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Very high</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-200 rounded-sm"></div>
                  <span className="text-muted-foreground">Low</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-orange-300 rounded-sm"></div>
                  <span className="text-muted-foreground">High</span>
                </div>
              </div>
            </div>

            {/* Performance Card */}
            <div className="absolute bottom-8 right-0 bg-white rounded-xl shadow-xl p-4 w-52">
              <div className="relative w-32 h-32 mx-auto mb-3">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8" 
                    strokeDasharray="251.2" strokeDashoffset="40" className="origin-center -rotate-90"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="text-2xl font-bold text-foreground">83%</div>
                  <div className="text-xs text-muted-foreground">Win + Meet</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="font-semibold text-foreground">5.6k</div>
                  <div className="text-muted-foreground">Hotels</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">2.3m</div>
                  <div className="text-muted-foreground">Shops</div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-1 mt-2 text-xs">
                  <div>
                    <div className="font-semibold">17%</div>
                    <div className="text-muted-foreground">Loss</div>
                  </div>
                  <div>
                    <div className="font-semibold">68%</div>
                    <div className="text-muted-foreground">Meet</div>
                  </div>
                  <div>
                    <div className="font-semibold">15%</div>
                    <div className="text-muted-foreground">Win</div>
                  </div>
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