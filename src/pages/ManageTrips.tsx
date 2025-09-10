import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  Search,
  Eye,
  Edit2,
  Trash2
} from 'lucide-react';

// Mock data for demonstration
const mockTrips = {
  scheduled: [
    {
      id: 'trip-1',
      name: 'Maldives Paradise',
      destination: 'Maldives',
      startDate: '2025-01-20',
      endDate: '2025-01-27',
      participants: 4,
      status: 'scheduled',
      budget: 250000,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop'
    },
    {
      id: 'trip-2',
      name: 'Swiss Alpine Adventure',
      destination: 'Switzerland',
      startDate: '2025-02-15',
      endDate: '2025-02-22',
      participants: 6,
      status: 'scheduled',
      budget: 180000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: 'trip-3',
      name: 'Tokyo Cultural Tour',
      destination: 'Japan',
      startDate: '2025-03-10',
      endDate: '2025-03-18',
      participants: 8,
      status: 'scheduled',
      budget: 320000,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop'
    }
  ],
  ongoing: [
    {
      id: 'trip-4',
      name: 'Bali Spiritual Retreat',
      destination: 'Indonesia',
      startDate: '2025-01-05',
      endDate: '2025-01-12',
      participants: 5,
      status: 'ongoing',
      budget: 145000,
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop'
    }
  ],
  completed: [
    {
      id: 'trip-5',
      name: 'Mediterranean Cruise',
      destination: 'Italy & Greece',
      startDate: '2024-12-15',
      endDate: '2024-12-22',
      participants: 12,
      status: 'completed',
      budget: 480000,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop'
    },
    {
      id: 'trip-6',
      name: 'Rajasthan Heritage',
      destination: 'India',
      startDate: '2024-11-10',
      endDate: '2024-11-17',
      participants: 7,
      status: 'completed',
      budget: 125000,
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop'
    }
  ]
};

export default function ManageTrips() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('scheduled');
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const handleViewTrip = (tripId: string) => {
    navigate(`/manage-trips/${tripId}`);
  };

  const renderTripCard = (trip: any) => (
    <Card key={trip.id} className="hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={trip.image} 
          alt={trip.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge className={`absolute top-3 right-3 ${getStatusColor(trip.status)}`}>
          {trip.status}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{trip.name}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {trip.destination}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {trip.participants} people
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg">{formatCurrency(trip.budget)}</span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleViewTrip(trip.id)}
            >
              <Eye className="w-4 h-4 mr-1" />
              View
            </Button>
            {trip.status !== 'completed' && (
              <Button variant="outline" size="sm">
                <Edit2 className="w-4 h-4 mr-1" />
                Edit
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const getFilteredTrips = (trips: any[]) => {
    return trips.filter(trip =>
      trip.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Trips</h1>
          <p className="text-gray-600 mt-1">Organize and track all your travel adventures</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search trips or destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Scheduled Trips</p>
                <p className="text-2xl font-bold text-blue-600">{mockTrips.scheduled.length}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ongoing Trips</p>
                <p className="text-2xl font-bold text-green-600">{mockTrips.ongoing.length}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed Trips</p>
                <p className="text-2xl font-bold text-gray-600">{mockTrips.completed.length}</p>
              </div>
              <div className="p-3 bg-gray-100 rounded-full">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="scheduled">Scheduled ({mockTrips.scheduled.length})</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing ({mockTrips.ongoing.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({mockTrips.completed.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="scheduled" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredTrips(mockTrips.scheduled).map(renderTripCard)}
          </div>
        </TabsContent>

        <TabsContent value="ongoing" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredTrips(mockTrips.ongoing).map(renderTripCard)}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredTrips(mockTrips.completed).map(renderTripCard)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}