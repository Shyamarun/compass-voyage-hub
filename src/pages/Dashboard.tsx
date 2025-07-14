
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Plane
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +20.1%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +180.1%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Travelers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-600 flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +19%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.5%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600 flex items-center">
                <ArrowDownRight className="w-3 h-3 mr-1" />
                -5.2%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'John Doe', destination: 'Paris, France', date: '2024-01-15', status: 'confirmed' },
                { name: 'Sarah Smith', destination: 'Tokyo, Japan', date: '2024-01-18', status: 'pending' },
                { name: 'Mike Johnson', destination: 'New York, USA', date: '2024-01-20', status: 'confirmed' },
                { name: 'Emily Brown', destination: 'London, UK', date: '2024-01-22', status: 'cancelled' },
              ].map((booking, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Plane className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{booking.name}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {booking.destination}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{booking.date}</p>
                    <Badge 
                      variant={booking.status === 'confirmed' ? 'default' : 
                              booking.status === 'pending' ? 'secondary' : 'destructive'}
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Destinations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { destination: 'Paris, France', bookings: 234, trend: '+12%' },
                { destination: 'Tokyo, Japan', bookings: 189, trend: '+8%' },
                { destination: 'New York, USA', bookings: 156, trend: '+15%' },
                { destination: 'London, UK', bookings: 142, trend: '+5%' },
                { destination: 'Rome, Italy', bookings: 128, trend: '+22%' },
              ].map((destination, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium">{destination.destination}</p>
                      <p className="text-sm text-gray-500">{destination.bookings} bookings</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-emerald-600">
                    {destination.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex flex-col items-center justify-center space-y-2">
              <Plane className="w-6 h-6" />
              <span>New Booking</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Users className="w-6 h-6" />
              <span>Add Traveler</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Calendar className="w-6 h-6" />
              <span>Schedule Meeting</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
