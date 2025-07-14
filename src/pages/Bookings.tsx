
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, User, DollarSign, Filter } from 'lucide-react';

export default function Bookings() {
  const bookings = [
    {
      id: 'BK001',
      traveler: 'John Doe',
      email: 'john.doe@email.com',
      package: 'Paris City Break',
      destination: 'Paris, France',
      dates: 'Mar 15 - Mar 19, 2024',
      amount: '$1,299',
      status: 'confirmed',
      paymentStatus: 'paid'
    },
    {
      id: 'BK002',
      traveler: 'Sarah Smith',
      email: 'sarah.smith@email.com',
      package: 'Tokyo Adventure',
      destination: 'Tokyo, Japan',
      dates: 'Apr 2 - Apr 9, 2024',
      amount: '$2,499',
      status: 'pending',
      paymentStatus: 'pending'
    },
    {
      id: 'BK003',
      traveler: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      package: 'Mediterranean Cruise',
      destination: 'Mediterranean Sea',
      dates: 'May 10 - May 20, 2024',
      amount: '$3,299',
      status: 'confirmed',
      paymentStatus: 'paid'
    },
    {
      id: 'BK004',
      traveler: 'Emily Brown',
      email: 'emily.brown@email.com',
      package: 'Safari Experience',
      destination: 'Kenya, Africa',
      dates: 'Jun 5 - Jun 13, 2024',
      amount: '$4,199',
      status: 'cancelled',
      paymentStatus: 'refunded'
    },
    {
      id: 'BK005',
      traveler: 'David Wilson',
      email: 'david.wilson@email.com',
      package: 'Bali Wellness Retreat',
      destination: 'Bali, Indonesia',
      dates: 'Jul 20 - Jul 26, 2024',
      amount: '$1,899',
      status: 'confirmed',
      paymentStatus: 'partial'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'cancelled':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'partial':
        return 'secondary';
      case 'refunded':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bookings</h1>
          <p className="text-gray-600">Manage all your travel bookings</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button>
            <span className="mr-2">+</span>
            New Booking
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">24</div>
            <p className="text-sm text-gray-600">Total Bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">18</div>
            <p className="text-sm text-gray-600">Confirmed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">4</div>
            <p className="text-sm text-gray-600">Pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">2</div>
            <p className="text-sm text-gray-600">Cancelled</p>
          </CardContent>
        </Card>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {bookings.map((booking) => (
          <Card key={booking.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">#{booking.id}</span>
                      <Badge variant={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                      <Badge variant={getPaymentStatusColor(booking.paymentStatus)}>
                        {booking.paymentStatus}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <User className="w-4 h-4 mr-1" />
                        Traveler
                      </div>
                      <p className="font-medium">{booking.traveler}</p>
                      <p className="text-sm text-gray-500">{booking.email}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        Destination
                      </div>
                      <p className="font-medium">{booking.package}</p>
                      <p className="text-sm text-gray-500">{booking.destination}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        Travel Dates
                      </div>
                      <p className="font-medium">{booking.dates}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <DollarSign className="w-4 h-4 mr-1" />
                        Amount
                      </div>
                      <p className="font-medium text-lg">{booking.amount}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">
                    Edit
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
