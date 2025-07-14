
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Users, Star } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      id: 1,
      name: 'Paris City Break',
      destination: 'Paris, France',
      duration: '4 Days, 3 Nights',
      price: '$1,299',
      rating: 4.8,
      capacity: 20,
      booked: 15,
      image: '/api/placeholder/400/250',
      features: ['Hotel included', 'City tour', 'Museum passes'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Tokyo Adventure',
      destination: 'Tokyo, Japan',
      duration: '7 Days, 6 Nights',
      price: '$2,499',
      rating: 4.9,
      capacity: 15,
      booked: 12,
      image: '/api/placeholder/400/250',
      features: ['Traditional ryokan', 'Sushi class', 'Mount Fuji tour'],
      status: 'active'
    },
    {
      id: 3,
      name: 'Mediterranean Cruise',
      destination: 'Mediterranean Sea',
      duration: '10 Days, 9 Nights',
      price: '$3,299',
      rating: 4.7,
      capacity: 100,
      booked: 85,
      image: '/api/placeholder/400/250',
      features: ['All meals included', '5 port stops', 'Entertainment'],
      status: 'active'
    },
    {
      id: 4,
      name: 'Safari Experience',
      destination: 'Kenya, Africa',
      duration: '8 Days, 7 Nights',
      price: '$4,199',
      rating: 4.9,
      capacity: 12,
      booked: 8,
      image: '/api/placeholder/400/250',
      features: ['Game drives', 'Luxury lodge', 'Expert guide'],
      status: 'active'
    },
    {
      id: 5,
      name: 'Bali Wellness Retreat',
      destination: 'Bali, Indonesia',
      duration: '6 Days, 5 Nights',
      price: '$1,899',
      rating: 4.6,
      capacity: 25,
      booked: 20,
      image: '/api/placeholder/400/250',
      features: ['Spa treatments', 'Yoga classes', 'Healthy cuisine'],
      status: 'draft'
    },
    {
      id: 6,
      name: 'Iceland Northern Lights',
      destination: 'Reykjavik, Iceland',
      duration: '5 Days, 4 Nights',
      price: '$2,199',
      rating: 4.8,
      capacity: 18,
      booked: 10,
      image: '/api/placeholder/400/250',
      features: ['Northern lights tour', 'Blue Lagoon', 'Glacier walk'],
      status: 'active'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Travel Packages</h1>
          <p className="text-gray-600">Manage your travel packages and create new experiences</p>
        </div>
        <Button>
          <span className="mr-2">+</span>
          Create Package
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-200 relative">
              <img 
                src={pkg.image} 
                alt={pkg.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant={pkg.status === 'active' ? 'default' : 'secondary'}>
                  {pkg.status}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-lg">{pkg.name}</CardTitle>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                {pkg.destination}
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {pkg.price}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {pkg.booked}/{pkg.capacity} booked
                  </div>
                  <div className="text-right">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(pkg.booked / pkg.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
