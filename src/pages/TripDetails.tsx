import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { toast } from '@/hooks/use-toast';
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
  FileText,
  Edit2,
  Plus,
  Trash2,
  Filter,
  Bell,
  User,
  DollarSign
} from 'lucide-react';

// Mock trip data with enhanced payment features
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
      { id: 1, member: 'John Smith', amount: 62500, paid: 62500, balance: 0, status: 'paid', date: '2025-01-01', reminderSent: false },
      { id: 2, member: 'Sarah Johnson', amount: 62500, paid: 62500, balance: 0, status: 'paid', date: '2025-01-02', reminderSent: false },
      { id: 3, member: 'Mike Wilson', amount: 62500, paid: 30000, balance: 32500, status: 'partial', date: null, reminderSent: true },
      { id: 4, member: 'Emily Davis', amount: 62500, paid: 62500, balance: 0, status: 'paid', date: '2025-01-01', reminderSent: false },
      { id: 5, member: 'Alex Brown', amount: 62500, paid: 0, balance: 62500, status: 'pending', date: null, reminderSent: true }
    ]
  },
  'trip-2': {
    id: 'trip-2',
    name: 'Swiss Alpine Adventure',
    destination: 'Switzerland',
    startDate: '2025-02-15',
    endDate: '2025-02-22',
    participants: 6,
    status: 'scheduled',
    budget: 180000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    description: 'An exhilarating winter adventure in the Swiss Alps with skiing, mountain hiking, and cozy alpine experiences.',
    members: [
      { id: 1, name: 'David Wilson', email: 'david@example.com', phone: '+91 98765 43220', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
      { id: 2, name: 'Lisa Chen', email: 'lisa@example.com', phone: '+91 98765 43221', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
      { id: 3, name: 'Mark Taylor', email: 'mark@example.com', phone: '+91 98765 43222', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
      { id: 4, name: 'Anna Schmidt', email: 'anna@example.com', phone: '+91 98765 43223', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
      { id: 5, name: 'Tom Anderson', email: 'tom@example.com', phone: '+91 98765 43224', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
      { id: 6, name: 'Julia Roberts', email: 'julia@example.com', phone: '+91 98765 43225', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' }
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Zurich', activities: ['Airport pickup', 'City tour', 'Swiss cuisine dinner', 'Hotel check-in'] },
      { day: 2, title: 'Alpine Adventure', activities: ['Cable car to Jungfraujoch', 'Snow activities', 'Mountain restaurant lunch', 'Evening in Interlaken'] },
      { day: 3, title: 'Skiing Day', activities: ['Ski lessons', 'Alpine skiing', 'Fondue lunch', 'Spa relaxation'] },
      { day: 4, title: 'Cultural Experience', activities: ['Watch making workshop', 'Chocolate factory tour', 'Traditional Swiss lunch', 'Lake cruise'] },
      { day: 5, title: 'Mountain Hiking', activities: ['Guided mountain hike', 'Alpine photography', 'Picnic lunch', 'Village exploration'] },
      { day: 6, title: 'Shopping & Leisure', activities: ['Shopping in Lucerne', 'Chapel Bridge visit', 'Farewell dinner', 'Evening entertainment'] },
      { day: 7, title: 'Departure', activities: ['Breakfast', 'Last minute shopping', 'Airport transfer', 'Flight departure'] }
    ],
    messages: [
      { id: 1, sender: 'David Wilson', message: 'Can\'t wait for the skiing! Should we rent equipment there?', time: '3 hours ago', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
      { id: 2, sender: 'Lisa Chen', message: 'I\'ve checked the weather - perfect conditions for skiing!', time: '2 hours ago', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' }
    ],
    payments: [
      { id: 1, member: 'David Wilson', amount: 30000, paid: 30000, balance: 0, status: 'paid', date: '2025-01-03', reminderSent: false },
      { id: 2, member: 'Lisa Chen', amount: 30000, paid: 30000, balance: 0, status: 'paid', date: '2025-01-04', reminderSent: false },
      { id: 3, member: 'Mark Taylor', amount: 30000, paid: 15000, balance: 15000, status: 'partial', date: null, reminderSent: true },
      { id: 4, member: 'Anna Schmidt', amount: 30000, paid: 0, balance: 30000, status: 'pending', date: null, reminderSent: false },
      { id: 5, member: 'Tom Anderson', amount: 30000, paid: 30000, balance: 0, status: 'paid', date: '2025-01-05', reminderSent: false },
      { id: 6, member: 'Julia Roberts', amount: 30000, paid: 0, balance: 30000, status: 'pending', date: null, reminderSent: true }
    ]
  },
  'trip-4': {
    id: 'trip-4',
    name: 'Bali Spiritual Retreat',
    destination: 'Indonesia',
    startDate: '2025-01-05',
    endDate: '2025-01-12',
    participants: 5,
    status: 'ongoing',
    budget: 145000,
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=400&fit=crop',
    description: 'A transformative spiritual journey in Bali with yoga, meditation, temple visits, and cultural immersion.',
    members: [
      { id: 1, name: 'Maya Patel', email: 'maya@example.com', phone: '+91 98765 43230', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
      { id: 2, name: 'James Lee', email: 'james@example.com', phone: '+91 98765 43231', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
      { id: 3, name: 'Sophie Martin', email: 'sophie@example.com', phone: '+91 98765 43232', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
      { id: 4, name: 'Ryan Cooper', email: 'ryan@example.com', phone: '+91 98765 43233', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
      { id: 5, name: 'Emma Thompson', email: 'emma@example.com', phone: '+91 98765 43234', avatar: 'https://randomuser.me/api/portraits/women/8.jpg' }
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Sacred Welcome', activities: ['Airport pickup', 'Blessing ceremony', 'Organic dinner', 'Meditation introduction'] },
      { day: 2, title: 'Temple & Tradition', activities: ['Temple sunrise tour', 'Cultural workshop', 'Traditional lunch', 'Yoga session'] },
      { day: 3, title: 'Nature Immersion', activities: ['Rice terrace walk', 'Waterfall meditation', 'Healthy cooking class', 'Sound healing'] },
      { day: 4, title: 'Mind & Body', activities: ['Morning yoga', 'Spa treatments', 'Mindfulness workshop', 'Vegetarian feast'] },
      { day: 5, title: 'Art & Expression', activities: ['Batik painting class', 'Local market visit', 'Art therapy session', 'Cultural performance'] },
      { day: 6, title: 'Inner Journey', activities: ['Silent meditation retreat', 'Nature walk', 'Reflection journal', 'Sharing circle'] },
      { day: 7, title: 'Integration & Farewell', activities: ['Final yoga practice', 'Closing ceremony', 'Farewell lunch', 'Departure'] }
    ],
    messages: [
      { id: 1, sender: 'Maya Patel', message: 'The sunrise yoga was incredible! Feeling so peaceful here.', time: '1 hour ago', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
      { id: 2, sender: 'James Lee', message: 'The meditation sessions are really transformative. Loving this experience!', time: '30 minutes ago', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' }
    ],
    payments: [
      { id: 1, member: 'Maya Patel', amount: 29000, paid: 29000, balance: 0, status: 'paid', date: '2024-12-20', reminderSent: false },
      { id: 2, member: 'James Lee', amount: 29000, paid: 29000, balance: 0, status: 'paid', date: '2024-12-21', reminderSent: false },
      { id: 3, member: 'Sophie Martin', amount: 29000, paid: 29000, balance: 0, status: 'paid', date: '2024-12-22', reminderSent: false },
      { id: 4, member: 'Ryan Cooper', amount: 29000, paid: 29000, balance: 0, status: 'paid', date: '2024-12-23', reminderSent: false },
      { id: 5, member: 'Emma Thompson', amount: 29000, paid: 29000, balance: 0, status: 'paid', date: '2024-12-24', reminderSent: false }
    ]
  }
};

export default function TripDetails() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [isEditingMembers, setIsEditingMembers] = useState(false);
  const [isEditingItinerary, setIsEditingItinerary] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [newMemberPhone, setNewMemberPhone] = useState('');

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

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-red-600 bg-red-50';
      case 'partial': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
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
      toast({
        title: "Message sent",
        description: "Your message has been sent to all trip members.",
      });
    }
  };

  const addMember = () => {
    if (newMemberName.trim() && newMemberEmail.trim() && newMemberPhone.trim()) {
      // Here you would normally add the member to your backend
      console.log('Adding member:', { newMemberName, newMemberEmail, newMemberPhone });
      setNewMemberName('');
      setNewMemberEmail('');
      setNewMemberPhone('');
      toast({
        title: "Member added",
        description: `${newMemberName} has been added to the trip.`,
      });
    }
  };

  const removeMember = (memberId: number) => {
    // Here you would normally remove the member from your backend
    console.log('Removing member:', memberId);
    toast({
      title: "Member removed",
      description: "The member has been removed from the trip.",
    });
  };

  const sendPaymentReminder = (paymentId: number) => {
    // Here you would normally send a reminder
    console.log('Sending payment reminder:', paymentId);
    toast({
      title: "Reminder sent",
      description: "Payment reminder has been sent.",
    });
  };

  const updatePaymentStatus = (paymentId: number, status: string) => {
    // Here you would normally update the payment status
    console.log('Updating payment status:', paymentId, status);
    toast({
      title: "Payment updated",
      description: "Payment status has been updated.",
    });
  };

  const getFilteredPayments = () => {
    if (!trip) return [];
    if (paymentFilter === 'all') return trip.payments;
    return trip.payments.filter(payment => payment.status === paymentFilter);
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
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Trip Members ({trip.members.length})</CardTitle>
                  <CardDescription>People joining this adventure</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Member
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Trip Member</DialogTitle>
                      <DialogDescription>
                        Add a new person to join this trip adventure.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <Input
                          placeholder="Enter full name"
                          value={newMemberName}
                          onChange={(e) => setNewMemberName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email Address</label>
                        <Input
                          placeholder="Enter email address"
                          type="email"
                          value={newMemberEmail}
                          onChange={(e) => setNewMemberEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input
                          placeholder="Enter phone number"
                          value={newMemberPhone}
                          onChange={(e) => setNewMemberPhone(e.target.value)}
                        />
                      </div>
                      <Button onClick={addMember} className="w-full">
                        Add Member
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
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
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Remove Member</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to remove {member.name} from this trip? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => removeMember(member.id)}>
                            Remove
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="itinerary" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Daily Itinerary</CardTitle>
                  <CardDescription>Day-by-day breakdown of activities</CardDescription>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setIsEditingItinerary(!isEditingItinerary)}
                >
                  <Edit2 className="w-4 h-4 mr-2" />
                  {isEditingItinerary ? 'Save Changes' : 'Edit Itinerary'}
                </Button>
              </div>
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
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Payment Status</CardTitle>
                  <CardDescription>Track payments from all trip members</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <Select value={paymentFilter} onValueChange={setPaymentFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="partial">Partial</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {getFilteredPayments().map((payment) => (
                  <div key={payment.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-gray-500" />
                        <div>
                          <h4 className="font-medium text-gray-900">{payment.member}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>Total: {formatCurrency(payment.amount)}</span>
                            <span>Paid: {formatCurrency(payment.paid)}</span>
                            <span className="font-medium text-red-600">Balance: {formatCurrency(payment.balance)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`px-2 py-1 text-xs font-medium ${getPaymentStatusColor(payment.status)}`}>
                          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                        </Badge>
                        {payment.status !== 'paid' && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => sendPaymentReminder(payment.id)}
                            disabled={payment.reminderSent}
                          >
                            <Bell className="w-3 h-3 mr-1" />
                            {payment.reminderSent ? 'Sent' : 'Remind'}
                          </Button>
                        )}
                        <Select onValueChange={(value) => updatePaymentStatus(payment.id, value)}>
                          <SelectTrigger className="w-28">
                            <SelectValue placeholder="Update" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="partial">Partial</SelectItem>
                            <SelectItem value="paid">Paid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    {payment.date && (
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Paid on {new Date(payment.date).toLocaleDateString()}
                      </div>
                    )}
                    {payment.reminderSent && payment.status !== 'paid' && (
                      <div className="text-xs text-orange-600 flex items-center gap-1 mt-1">
                        <Bell className="w-3 h-3" />
                        Reminder sent
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-700">Total Budget</p>
                      <p className="text-lg font-bold text-blue-900">{formatCurrency(trip.budget)}</p>
                    </div>
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-700">Collected</p>
                      <p className="text-lg font-bold text-green-900">
                        {formatCurrency(trip.payments.reduce((sum, p) => sum + p.paid, 0))}
                      </p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-red-700">Outstanding</p>
                      <p className="text-lg font-bold text-red-900">
                        {formatCurrency(trip.payments.reduce((sum, p) => sum + p.balance, 0))}
                      </p>
                    </div>
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}