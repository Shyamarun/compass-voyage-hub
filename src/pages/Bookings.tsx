
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  MapPin, 
  User, 
  DollarSign, 
  Filter, 
  Search,
  Eye,
  Edit,
  Trash2,
  Plus,
  CalendarCheck,
  Users,
  Ban,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';

export default function Bookings() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    {
      title: 'Total Bookings',
      value: '1,200',
      change: '+2.9% vs last week',
      changeType: 'positive',
      icon: CalendarCheck,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Total Participants',
      value: '2,845',
      change: '-1.4% vs last week',
      changeType: 'negative',
      icon: Users,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Total Earnings',
      value: '₹1,479,500',
      change: '+3.7% vs last week',
      changeType: 'positive',
      icon: DollarSign,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Cancelled Bookings',
      value: '48',
      change: 'This month',
      changeType: 'neutral',
      icon: Ban,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    }
  ];

  const bookings = [
    {
      id: 'BKG12345',
      customer: {
        name: 'Camellia Swan',
        email: 'camellia.s@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
      },
      package: 'Venice Dreams',
      travelDate: 'Apr 25 - Apr 30, 2025',
      amount: '₹45,000',
      status: 'confirmed'
    },
    {
      id: 'BKG12346',
      customer: {
        name: 'Raphael Goodman',
        email: 'raphael.g@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      package: 'Safari Adventure',
      travelDate: 'May 01 - May 08, 2025',
      amount: '₹95,500',
      status: 'pending'
    },
    {
      id: 'BKG12348',
      customer: {
        name: 'Armina Raul Meyes',
        email: 'armina.m@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      package: 'Caribbean Cruise',
      travelDate: 'May 05 - May 15, 2025',
      amount: '₹112,000',
      status: 'cancelled'
    },
    {
      id: 'BKG12349',
      customer: {
        name: 'James Dunn',
        email: 'james.d@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg'
      },
      package: 'Parisian Romance',
      travelDate: 'Mar 10 - Mar 15, 2025',
      amount: '₹35,000',
      status: 'completed'
    },
    {
      id: 'BKG12350',
      customer: {
        name: 'Eleanor Smith',
        email: 'eleanor.s@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/78.jpg'
      },
      package: 'Iceland Adventure',
      travelDate: 'Jun 05 - Jun 12, 2025',
      amount: '₹65,000',
      status: 'confirmed'
    },
    {
      id: 'BKG12351',
      customer: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
      },
      package: 'Tropical Paradise',
      travelDate: 'Jul 15 - Jul 22, 2025',
      amount: '₹80,000',
      status: 'pending'
    },
    {
      id: 'BKG12352',
      customer: {
        name: 'Olivia Brown',
        email: 'olivia.b@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
      },
      package: 'Romantic Getaway',
      travelDate: 'Aug 28 - Sep 04, 2025',
      amount: '₹55,000',
      status: 'cancelled'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filterButtons = [
    { key: 'all', label: 'All', icon: Filter },
    { key: 'confirmed', label: 'Confirmed', icon: CheckCircle },
    { key: 'pending', label: 'Pending', icon: Clock },
    { key: 'cancelled', label: 'Cancelled', icon: XCircle }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className={`${stat.iconBg} ${stat.iconColor} p-3 rounded-lg mr-4`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
                  <p className={`text-xs font-medium mt-1 flex items-center ${
                    stat.changeType === 'positive' ? 'text-green-600' : 
                    stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {stat.changeType === 'positive' && <ArrowUp className="w-3 h-3 mr-1" />}
                    {stat.changeType === 'negative' && <ArrowDown className="w-3 h-3 mr-1" />}
                    {stat.change}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">All Bookings</h2>
        
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search name, package..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          
          {/* Filter Buttons */}
          {filterButtons.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.key)}
              className="flex items-center gap-2"
            >
              <filter.icon className="w-4 h-4" />
              {filter.label}
            </Button>
          ))}
          
          {/* Add Booking Button */}
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Booking
          </Button>
        </div>
      </div>

      {/* Bookings Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking ID
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Package
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Travel Date
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-3 px-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <img
                        src={booking.customer.avatar}
                        alt={booking.customer.name}
                        className="w-8 h-8 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{booking.customer.name}</p>
                        <p className="text-xs text-gray-500">{booking.customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">#{booking.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{booking.package}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{booking.travelDate}</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-800">{booking.amount}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex justify-center space-x-2">
                      <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                        <Eye className="w-4 h-4" />
                      </Button>
                      {(booking.status === 'confirmed' || booking.status === 'pending') && (
                        <>
                          <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">
          Showing <span className="font-semibold">1</span>-<span className="font-semibold">10</span> of <span className="font-semibold">286</span> bookings
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled className="px-3">
            Previous
          </Button>
          <Button variant="default" size="sm" className="px-3">1</Button>
          <Button variant="outline" size="sm" className="px-3">2</Button>
          <Button variant="outline" size="sm" className="px-3">3</Button>
          <span className="px-2 text-gray-500">...</span>
          <Button variant="outline" size="sm" className="px-3">16</Button>
          <Button variant="outline" size="sm" className="px-3">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
