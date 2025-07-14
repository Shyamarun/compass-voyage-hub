
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Mail, Lock, User, Building, Facebook, Apple } from 'lucide-react';

interface AuthPageProps {
  onLogin: () => void;
}

export default function AuthPage({ onLogin }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  useEffect(() => {
    // Animated particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      createParticles();
    }
  }, []);

  const createParticles = () => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const colors = ['hsl(var(--primary))', 'hsl(var(--secondary))', '#F97316', '#FFFFFF'];
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full opacity-60 pointer-events-none';
      
      const size = Math.random() * 6 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.left = `${left}%`;
      particle.style.top = '-10px';
      particle.style.opacity = (Math.random() * 0.6 + 0.2).toString();
      particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
      
      particlesContainer.appendChild(particle);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const handleDemoMode = () => {
    onLogin();
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-10 bg-gradient-to-br from-primary/90 to-slate-900/85">
      {/* Animated background shapes */}
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-gradient-radial from-primary/30 to-transparent animate-pulse opacity-50" />
      <div className="absolute bottom-[10%] right-[5%] w-[200px] h-[200px] rounded-full bg-gradient-radial from-secondary/30 to-transparent animate-pulse opacity-50" />
      <div className="absolute top-[50%] right-[20%] w-[150px] h-[150px] rounded-full bg-gradient-radial from-orange-500/30 to-transparent animate-pulse opacity-50" />
      
      {/* Particles animation */}
      <div id="particles" className="absolute inset-0 overflow-hidden" />
      
      <div className="backdrop-blur-lg bg-white/95 rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto w-full flex flex-col md:flex-row hover:shadow-3xl transition-all duration-300">
        {/* Left panel - Branding */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-primary to-primary-dark text-white p-10 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center mb-10">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQ6Q372gPWK0NAlMpfQvsMhpjv6AaVlGFkiij63Oclz3YloR5kBVI9dToY0DQWzl5bB6D_l2yk6mOruntjPPixdcGJ3nP58PVecEFIEN0fI3xQzpcNoPki1YpvIQmylfG-_eSdPXHf_GG7MdczO76hu2Be6DmaCPXOoELc5yk9Fs1BlSaIQdbaOYAtPr4s/s500/coconut.Compass.png" 
                alt="Compass Logo" 
                className="h-12 brightness-0 invert"
              />
              <span className="font-bold text-2xl ml-3">COMPASS</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Travel Agency</h1>
            <p className="text-lg opacity-90 mb-8">The ultimate all-in-one CRM solution designed for modern travel agencies.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  <i className="fas fa-chart-line text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Centralized Dashboard</h3>
                  <p className="opacity-80">Real-time analytics and insights to grow your business.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  <i className="fas fa-users text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Customer Management</h3>
                  <p className="opacity-80">Keep track of all your travelers and their preferences.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  <i className="fas fa-calendar-check text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Booking Automation</h3>
                  <p className="opacity-80">Streamline your booking process and reduce errors.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <p className="font-medium mb-3">Trusted by leading travel agencies</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white">TravelPlus</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">VoyageHub</Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">JetSetGo</Badge>
            </div>
          </div>
        </div>
        
        {/* Right panel - Auth forms */}
        <div className="w-full md:w-7/12 p-10">
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button 
                onClick={() => setIsLogin(true)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  isLogin ? 'bg-white text-primary shadow-sm' : 'text-gray-600'
                }`}
              >
                Sign In
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  !isLogin ? 'bg-white text-primary shadow-sm' : 'text-gray-600'
                }`}
              >
                Create Account
              </button>
            </div>
          </div>
          
          {isLogin ? (
            <div>
              <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-gray-600 mb-8">Sign in to your account to continue</p>
              
              <div className="flex gap-3 mb-6">
                <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                  <i className="fab fa-google text-red-500"></i>
                  Google
                </Button>
                <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                  <Facebook className="w-4 h-4 text-blue-600" />
                  Facebook
                </Button>
                <Button variant="outline" className="flex-1 flex items-center justify-center gap-2">
                  <Apple className="w-4 h-4 text-gray-800" />
                  Apple
                </Button>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex-1 h-px bg-gray-300"></div>
                <p className="mx-4 text-gray-500">or continue with</p>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-gray-50 focus:bg-white transition-all"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-gray-50 focus:bg-white transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:underline">Forgot password?</a>
                </div>
                
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold mb-2">Create Your Account</h2>
              <p className="text-gray-600 mb-8">Join thousands of travel agencies using Compass</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-gray-50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-gray-50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-gray-50 focus:bg-white transition-all"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-gray-50 focus:bg-white transition-all"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create Password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-gray-50 focus:bg-white transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mr-2 mt-1"
                      required
                    />
                    <span className="text-gray-600">
                      I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                </div>
                
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </form>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <Button variant="outline" onClick={handleDemoMode} className="w-full md:w-auto">
              <i className="fas fa-rocket mr-2"></i>
              Try Demo Mode
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
