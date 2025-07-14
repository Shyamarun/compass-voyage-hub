
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Headphones, 
  MessageSquare, 
  FileText, 
  Search,
  ChevronRight,
  Mail,
  Phone,
  Clock
} from 'lucide-react';

export default function HelpCenter() {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      count: 8,
      articles: [
        'How to create your first booking',
        'Setting up your travel agency profile',
        'Understanding the dashboard',
        'Adding team members'
      ]
    },
    {
      title: 'Bookings & Reservations', 
      icon: '✈️',
      count: 12,
      articles: [
        'Managing booking confirmations',
        'Handling cancellations and refunds',
        'Group booking management',
        'Payment processing'
      ]
    },
    {
      title: 'Customer Management',
      icon: '👥',
      count: 6,
      articles: [
        'Adding new travelers',
        'Managing customer preferences',
        'Communication tools',
        'Customer history tracking'
      ]
    },
    {
      title: 'Reports & Analytics',
      icon: '📊',
      count: 5,
      articles: [
        'Understanding your dashboard metrics',
        'Generating monthly reports',
        'Revenue tracking',
        'Performance analytics'
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'How to create a new booking',
      category: 'Bookings',
      views: 1250,
      helpful: 98
    },
    {
      title: 'Setting up automated email confirmations',
      category: 'Automation',
      views: 890,
      helpful: 95
    },
    {
      title: 'Managing group bookings effectively',
      category: 'Bookings',
      views: 756,
      helpful: 92
    },
    {
      title: 'Understanding payment processing',
      category: 'Payments',
      views: 654,
      helpful: 89
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help Center</h1>
        <p className="text-gray-600 mb-8">Find answers to your questions and get support</p>
        
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for help articles..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          />
        </div>
      </div>

      {/* Quick Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-4">Get instant help from our support team</p>
            <Button className="w-full">Start Chat</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-gray-600 mb-4">Send us a detailed message</p>
            <Button variant="outline" className="w-full">Send Email</Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="text-sm text-gray-600 mb-4">Call us directly for urgent issues</p>
            <Button variant="outline" className="w-full">Call Now</Button>
          </CardContent>
        </Card>
      </div>

      {/* Support Hours */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Support Hours: Mon-Fri 9AM-6PM EST</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Currently Online</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ Categories */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Browse by Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqCategories.map((category, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{category.icon}</span>
                        <div>
                          <h3 className="font-semibold">{category.title}</h3>
                          <Badge variant="secondary">{category.count} articles</Badge>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    <div className="space-y-2">
                      {category.articles.slice(0, 3).map((article, idx) => (
                        <p key={idx} className="text-sm text-gray-600 hover:text-primary cursor-pointer">
                          {article}
                        </p>
                      ))}
                      {category.articles.length > 3 && (
                        <p className="text-sm text-primary cursor-pointer">
                          +{category.articles.length - 3} more articles
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Articles */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Popular Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                    <h4 className="font-medium text-sm mb-2 hover:text-primary">
                      {article.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center space-x-2">
                        <span>{article.views} views</span>
                        <span>•</span>
                        <span>{article.helpful}% helpful</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-sm text-gray-600">support@compass.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Headphones className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="font-medium text-sm">Live Chat</p>
                  <p className="text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
