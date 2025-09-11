import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock,
  Search,
  Eye,
  Edit2,
  Trash2,
  CreditCard,
  Percent,
  X
} from 'lucide-react';

// Mock payment data for each trip
const mockPaymentData = {
  'trip-1': [
    { id: 'p1', name: 'John Doe', email: 'john@example.com', amount: 62500, paid: 30000, discount: 0 },
    { id: 'p2', name: 'Jane Smith', email: 'jane@example.com', amount: 62500, paid: 62500, discount: 0 },
    { id: 'p3', name: 'Mike Johnson', email: 'mike@example.com', amount: 62500, paid: 20000, discount: 0 },
    { id: 'p4', name: 'Sarah Wilson', email: 'sarah@example.com', amount: 62500, paid: 0, discount: 0 }
  ],
  'trip-2': [
    { id: 'p5', name: 'Alex Brown', email: 'alex@example.com', amount: 30000, paid: 30000, discount: 0 },
    { id: 'p6', name: 'Emma Davis', email: 'emma@example.com', amount: 30000, paid: 15000, discount: 0 },
    { id: 'p7', name: 'Tom Wilson', email: 'tom@example.com', amount: 30000, paid: 0, discount: 0 },
    { id: 'p8', name: 'Lisa Chen', email: 'lisa@example.com', amount: 30000, paid: 30000, discount: 0 },
    { id: 'p9', name: 'David Lee', email: 'david@example.com', amount: 30000, paid: 10000, discount: 0 },
    { id: 'p10', name: 'Amy Taylor', email: 'amy@example.com', amount: 30000, paid: 30000, discount: 0 }
  ],
  'trip-3': [
    { id: 'p11', name: 'Chris Anderson', email: 'chris@example.com', amount: 40000, paid: 20000, discount: 0 },
    { id: 'p12', name: 'Kelly Martinez', email: 'kelly@example.com', amount: 40000, paid: 40000, discount: 0 },
    { id: 'p13', name: 'Ryan Garcia', email: 'ryan@example.com', amount: 40000, paid: 0, discount: 0 },
    { id: 'p14', name: 'Nicole Robinson', email: 'nicole@example.com', amount: 40000, paid: 15000, discount: 0 },
    { id: 'p15', name: 'Mark Thompson', email: 'mark@example.com', amount: 40000, paid: 40000, discount: 0 },
    { id: 'p16', name: 'Jessica White', email: 'jessica@example.com', amount: 40000, paid: 25000, discount: 0 },
    { id: 'p17', name: 'Daniel Harris', email: 'daniel@example.com', amount: 40000, paid: 40000, discount: 0 },
    { id: 'p18', name: 'Ashley Clark', email: 'ashley@example.com', amount: 40000, paid: 10000, discount: 0 }
  ]
};

// Mock data for demonstration - Enhanced with more trips
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
    },
    {
      id: 'trip-7',
      name: 'African Safari',
      destination: 'Kenya',
      startDate: '2025-04-05',
      endDate: '2025-04-14',
      participants: 10,
      status: 'scheduled',
      budget: 420000,
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop'
    },
    {
      id: 'trip-8',
      name: 'Northern Lights Norway',
      destination: 'Norway',
      startDate: '2025-05-01',
      endDate: '2025-05-08',
      participants: 6,
      status: 'scheduled',
      budget: 280000,
      image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop'
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
    },
    {
      id: 'trip-9',
      name: 'Amazon Expedition',
      destination: 'Brazil',
      startDate: '2024-12-28',
      endDate: '2025-01-15',
      participants: 8,
      status: 'ongoing',
      budget: 350000,
      image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop'
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
    },
    {
      id: 'trip-10',
      name: 'Patagonia Adventure',
      destination: 'Argentina & Chile',
      startDate: '2024-10-15',
      endDate: '2024-10-25',
      participants: 9,
      status: 'completed',
      budget: 390000,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop'
    },
    {
      id: 'trip-11',
      name: 'Iceland Ring Road',
      destination: 'Iceland',
      startDate: '2024-09-20',
      endDate: '2024-09-28',
      participants: 6,
      status: 'completed',
      budget: 245000,
      image: 'https://images.unsplash.com/photo-1539735778557-723d2b45dbf3?w=400&h=300&fit=crop'
    },
    {
      id: 'trip-12',
      name: 'Australian Outback',
      destination: 'Australia',
      startDate: '2024-08-10',
      endDate: '2024-08-20',
      participants: 8,
      status: 'completed',
      budget: 320000,
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop'
    }
  ]
};

export default function ManageTrips() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('scheduled');
  const [paymentData, setPaymentData] = useState(mockPaymentData);
  const [discountDialogs, setDiscountDialogs] = useState<Record<string, boolean>>({});
  const [discountInputs, setDiscountInputs] = useState<Record<string, string>>({});
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

  const handleDiscountChange = (tripId: string, participantId: string, discount: number) => {
    setPaymentData(prev => ({
      ...prev,
      [tripId]: prev[tripId]?.map(participant =>
        participant.id === participantId
          ? { ...participant, discount }
          : participant
      ) || []
    }));
  };

  const openDiscountDialog = (tripId: string, participantId: string) => {
    const key = `${tripId}-${participantId}`;
    setDiscountDialogs(prev => ({ ...prev, [key]: true }));
    const currentDiscount = paymentData[tripId]?.find(p => p.id === participantId)?.discount || 0;
    setDiscountInputs(prev => ({ ...prev, [key]: currentDiscount.toString() }));
  };

  const closeDiscountDialog = (tripId: string, participantId: string) => {
    const key = `${tripId}-${participantId}`;
    setDiscountDialogs(prev => ({ ...prev, [key]: false }));
  };

  const applyDiscount = (tripId: string, participantId: string) => {
    const key = `${tripId}-${participantId}`;
    const discountValue = parseFloat(discountInputs[key] || '0');
    if (!isNaN(discountValue) && discountValue >= 0) {
      handleDiscountChange(tripId, participantId, discountValue);
    }
    closeDiscountDialog(tripId, participantId);
  };

  const calculateTotal = (tripId: string) => {
    const participants = paymentData[tripId] || [];
    return participants.reduce((sum, p) => sum + (p.amount - p.discount), 0);
  };

  const calculateTotalPaid = (tripId: string) => {
    const participants = paymentData[tripId] || [];
    return participants.reduce((sum, p) => sum + p.paid, 0);
  };

  const calculateTotalDiscount = (tripId: string) => {
    const participants = paymentData[tripId] || [];
    return participants.reduce((sum, p) => sum + p.discount, 0);
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
        
        {/* Payment Summary */}
        {paymentData[trip.id] && (
          <div className="bg-gray-50 p-3 rounded-lg space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Payment Status</span>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <CreditCard className="w-4 h-4 mr-1" />
                    Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{trip.name} - Payment Management</DialogTitle>
                    <DialogDescription>
                      Manage payments and discounts for all participants
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    {/* Payment Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <p className="text-sm text-gray-600">Total Amount</p>
                            <p className="text-2xl font-bold">{formatCurrency(calculateTotal(trip.id))}</p>
                            {calculateTotalDiscount(trip.id) > 0 && (
                              <p className="text-sm text-green-600">
                                -{formatCurrency(calculateTotalDiscount(trip.id))} discount
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <p className="text-sm text-gray-600">Amount Paid</p>
                            <p className="text-2xl font-bold text-green-600">{formatCurrency(calculateTotalPaid(trip.id))}</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <p className="text-sm text-gray-600">Remaining</p>
                            <p className="text-2xl font-bold text-red-600">
                              {formatCurrency(calculateTotal(trip.id) - calculateTotalPaid(trip.id))}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Participants List with Discount Options */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Participants & Payments</h3>
                      {paymentData[trip.id]?.map((participant) => {
                        const dialogKey = `${trip.id}-${participant.id}`;
                        const finalAmount = participant.amount - participant.discount;
                        const balance = finalAmount - participant.paid;
                        
                        return (
                          <Card key={participant.id} className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-4">
                                  <div>
                                    <h4 className="font-medium">{participant.name}</h4>
                                    <p className="text-sm text-gray-600">{participant.email}</p>
                                  </div>
                                  
                                  {participant.discount > 0 && (
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                                      <Percent className="w-3 h-3 mr-1" />
                                      {formatCurrency(participant.discount)} off
                                    </Badge>
                                  )}
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                                  <div>
                                    <p className="text-gray-600">Original Amount</p>
                                    <p className="font-medium">{formatCurrency(participant.amount)}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-600">Final Amount</p>
                                    <p className="font-medium">{formatCurrency(finalAmount)}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-600">Paid</p>
                                    <p className="font-medium text-green-600">{formatCurrency(participant.paid)}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-600">Balance</p>
                                    <p className={`font-medium ${balance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                      {formatCurrency(Math.abs(balance))}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex gap-2 ml-4">
                                <Dialog open={discountDialogs[dialogKey]} onOpenChange={(open) => {
                                  if (!open) closeDiscountDialog(trip.id, participant.id);
                                }}>
                                  <DialogTrigger asChild>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => openDiscountDialog(trip.id, participant.id)}
                                    >
                                      <Percent className="w-4 h-4 mr-1" />
                                      Discount
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                      <DialogTitle>Add Discount</DialogTitle>
                                      <DialogDescription>
                                        Set discount amount for {participant.name}
                                      </DialogDescription>
                                    </DialogHeader>
                                    
                                    <div className="space-y-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="discount">Discount Amount (₹)</Label>
                                        <Input
                                          id="discount"
                                          type="number"
                                          placeholder="0"
                                          value={discountInputs[dialogKey] || ''}
                                          onChange={(e) => setDiscountInputs(prev => ({
                                            ...prev,
                                            [dialogKey]: e.target.value
                                          }))}
                                          min="0"
                                          max={participant.amount}
                                        />
                                        <p className="text-xs text-gray-500">
                                          Maximum discount: {formatCurrency(participant.amount)}
                                        </p>
                                      </div>
                                      
                                      <div className="flex justify-end gap-2">
                                        <Button
                                          variant="outline"
                                          onClick={() => closeDiscountDialog(trip.id, participant.id)}
                                        >
                                          Cancel
                                        </Button>
                                        <Button
                                          onClick={() => applyDiscount(trip.id, participant.id)}
                                        >
                                          Apply Discount
                                        </Button>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-600">Paid: </span>
                <span className="font-medium text-green-600">{formatCurrency(calculateTotalPaid(trip.id))}</span>
              </div>
              <div>
                <span className="text-gray-600">Balance: </span>
                <span className="font-medium text-red-600">
                  {formatCurrency(calculateTotal(trip.id) - calculateTotalPaid(trip.id))}
                </span>
              </div>
            </div>
          </div>
        )}
        
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