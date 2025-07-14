
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Mail, Phone, MapPin, Calendar, Plus, Filter } from 'lucide-react';

export default function Travelers() {
  const travelers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, USA',
      lastTrip: 'Paris City Break',
      totalTrips: 3,
      totalSpent: '$4,299',
      status: 'active',
      joined: '2023-05-15',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah.smith@email.com',
      phone: '+1 (555) 234-5678',
      location: 'Los Angeles, USA',
      lastTrip: 'Tokyo Adventure',
      totalTrips: 5,
      totalSpent: '$8,750',
      status: 'active',
      joined: '2023-02-20',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+1 (555) 345-6789',
      location: 'Chicago, USA',
      lastTrip: 'Mediterranean Cruise',
      totalTrips: 2,
      totalSpent: '$6,598',
      status: 'active',
      joined: '2023-08-10',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'Emily Brown',
      email: 'emily.brown@email.com',
      phone: '+1 (555) 456-7890',
      location: 'Miami, USA',
      lastTrip: 'Safari Experience',
      totalTrips: 1,
      totalSpent: '$4,199',
      status: 'inactive',
      joined: '2023-11-05',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 5,
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      phone: '+1 (555) 567-8901',
      location: 'Seattle, USA',
      lastTrip: 'Bali Wellness Retreat',
      totalTrips: 4,
      totalSpent: '$7,896',
      status: 'active',
      joined: '2023-01-12',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      email: 'lisa.anderson@email.com',
      phone: '+1 (555) 678-9012',
      location: 'Boston, USA',
      lastTrip: 'Iceland Northern Lights',
      totalTrips: 3,
      totalSpent: '$5,697',
      status: 'active',
      joined: '2023-04-30',
      avatar: '/api/placeholder/60/60'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Travelers</h1>
          <p className="text-gray-600">Manage your travel customers and their information</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Traveler
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{travelers.length}</div>
            <p className="text-sm text-gray-600">Total Travelers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {travelers.filter(t => t.status === 'active').length}
            </div>
            <p className="text-sm text-gray-600">Active Travelers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {Math.round(travelers.reduce((sum, t) => sum + t.totalTrips, 0) / travelers.length)}
            </div>
            <p className="text-sm text-gray-600">Avg. Trips per Traveler</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              ${travelers.reduce((sum, t) => sum + parseInt(t.totalSpent.replace(/[$,]/g, '')), 0).toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Total Revenue</p>
          </CardContent>
        </Card>
      </div>

      {/* Travelers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {travelers.map((traveler) => (
          <Card key={traveler.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={traveler.avatar}
                    alt={traveler.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{traveler.name}</h3>
                    <Badge variant={traveler.status === 'active' ? 'default' : 'secondary'}>
                      {traveler.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  {traveler.email}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {traveler.phone}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {traveler.location}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Joined {new Date(traveler.joined).toLocaleDateString()}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">{traveler.totalTrips}</div>
                    <div className="text-xs text-gray-500">Total Trips</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">{traveler.totalSpent}</div>
                    <div className="text-xs text-gray-500">Total Spent</div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <p className="text-sm text-gray-600">Last Trip:</p>
                  <p className="font-medium text-sm">{traveler.lastTrip}</p>
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button size="sm" className="flex-1">
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
