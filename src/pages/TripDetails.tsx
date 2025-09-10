import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft,
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  Phone,
  Mail,
  CheckCircle,
  XCircle,
  Send,
  Download,
  CreditCard,
  MapIcon,
  FileText
} from 'lucide-react';

// Mock trip data
const mockTripData = {
  'trip-1': {
    id: 'trip-1',
    name: 'Maldives Paradise',
    destination: 'Maldives',
    startDate: '2025-01-20',
    endDate: '2025-01-27',
    participants: 4,
    status: 'scheduled',
    budget: 250000,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop',
    description: 'A luxurious 7-day retreat in the pristine waters of Maldives featuring overwater bungalows, spa treatments, and world-class diving experiences.',
    members: [
      { id: 1, name: 'John Smith', email: 'john@example.com', phone: '+91 98765 43210', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+91 98765 43211', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { id: 3, name: 'Mike Wilson', email: 'mike@example.com', phone: '+91 98765 43212', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
      { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '+91 98765 43213', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Check-in', activities: ['Airport pickup', 'Resort check-in', 'Welcome dinner', 'Beach sunset walk'] },
      { day: 2, title: 'Water Sports Day', activities: ['Snorkeling expedition', 'Jet skiing', 'Lunch at overwater restaurant', 'Spa treatment'] },
      { day: 3, title: 'Island Hopping', activities: ['Local island visit', 'Cultural tour', 'Traditional lunch', 'Dolphin watching'] },
      { day: 4, title: 'Diving Adventure', activities: ['Scuba diving lesson', 'Coral reef exploration', 'Underwater photography', 'Beach barbecue'] },
      { day: 5, title: 'Relaxation Day', activities: ['Yoga session', 'Spa treatments', 'Private beach time', 'Romantic dinner'] },
      { day: 6, title: 'Adventure Day', activities: ['Fishing trip', 'Water villa tour', 'Sunset cruise', 'Farewell party'] },
      { day: 7, title: 'Departure', activities: ['Breakfast', 'Check-out', 'Airport transfer', 'Flight departure'] }
    ],
    messages: [
      { id: 1, sender: 'John Smith', message: 'Excited for this trip! Should we coordinate flights?', time: '2 hours ago', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { id: 2, sender: 'Sarah Johnson', message: 'I\'ve booked my flights. Landing at 2:30 PM on the 20th.', time: '1 hour ago', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { id: 3, sender: 'Tour Guide', message: 'Welcome to your Maldives adventure! Resort transfer has been arranged.', time: '30 minutes ago', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' }
    ],
    payments: [
      { member: 'John Smith', amount: 62500, status: 'paid', date: '2025-01-01' },
      { member: 'Sarah Johnson', amount: 62500, status: 'paid', date: '2025-01-02' },
      { member: 'Mike Wilson', amount: 62500, status: 'pending', date: null },
      { member: 'Emily Davis', amount: 62500, status: 'paid', date: '2025-01-01' }
    ]
  }
};

export default function TripDetails() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState('');

  const trip = mockTripData[tripId as keyof typeof mockTripData];

  if (!trip) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trip Not Found</h2>
          <Button onClick={() => navigate('/manage-trips')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Manage Trips
          </Button>
        </div>
      </div>
    );
  }

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
      month: 'long',
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

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Here you would normally send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/manage-trips')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Trips
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{trip.name}</h1>
          <p className="text-gray-600 flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4" />
            {trip.destination}
          </p>
        </div>
        <div className="ml-auto">
          <Badge className={getStatusColor(trip.status)}>
            {trip.status}
          </Badge>
        </div>
      </div>

      <div className="relative rounded-lg overflow-hidden">
        <img 
          src={trip.image} 
          alt={trip.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
          <div className="p-6 text-white">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {trip.participants} travelers
              </div>
              <div className="flex items-center gap-1">
                <CreditCard className="w-4 h-4" />
                {formatCurrency(trip.budget)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Trip Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{trip.description}</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Itinerary
              </Button>
              <Button className="w-full" variant="outline">
                <MapIcon className="w-4 h-4 mr-2" />
                View on Map
              </Button>
              <Button className="w-full" variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="people" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="people" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trip Members ({trip.members.length})</CardTitle>
              <CardDescription>People joining this adventure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trip.members.map((member) => (
                  <div key={member.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900">{member.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Mail className="w-3 h-3" />
                        {member.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Phone className="w-3 h-3" />
                        {member.phone}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="itinerary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Itinerary</CardTitle>
              <CardDescription>Day-by-day breakdown of activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {trip.itinerary.map((day) => (
                  <div key={day.day} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">Day {day.day}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 mb-2">{day.title}</h4>
                        <ul className="space-y-1">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {day.day < trip.itinerary.length && (
                      <div className="absolute left-6 top-12 w-px h-6 bg-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trip Messages</CardTitle>
              <CardDescription>Communication with trip members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-4">
                {trip.messages.map((message) => (
                  <div key={message.id} className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={message.avatar} alt={message.sender} />
                      <AvatarFallback>{message.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-900">{message.sender}</span>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-700">{message.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <Textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                  rows={2}
                />
                <Button onClick={sendMessage} className="self-end">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Status</CardTitle>
              <CardDescription>Track payments from all trip members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trip.payments.map((payment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{payment.member}</h4>
                      <p className="text-sm text-gray-600">{formatCurrency(payment.amount)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {payment.status === 'paid' ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-green-600 font-medium">Paid</span>
                          {payment.date && (
                            <span className="text-xs text-gray-500">
                              {new Date(payment.date).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-orange-600" />
                          <span className="text-sm text-orange-600 font-medium">Pending</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-900">Total Trip Cost</span>
                  <span className="text-lg font-bold text-blue-900">{formatCurrency(trip.budget)}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-blue-700">Amount Collected</span>
                  <span className="text-sm font-medium text-green-600">
                    {formatCurrency(trip.payments.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0))}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-700">Pending Amount</span>
                  <span className="text-sm font-medium text-orange-600">
                    {formatCurrency(trip.payments.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0))}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}