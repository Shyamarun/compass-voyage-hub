
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Plus, MapPin, Users } from 'lucide-react';

export default function Calendar() {
  const events = [
    {
      id: 1,
      title: 'Paris City Break - Departure',
      date: '2024-03-15',
      time: '10:00 AM',
      type: 'departure',
      travelers: 15,
      destination: 'Paris, France'
    },
    {
      id: 2,
      title: 'Tokyo Adventure - Return',
      date: '2024-03-18',
      time: '6:30 PM',
      type: 'return',
      travelers: 12,
      destination: 'Tokyo, Japan'
    },
    {
      id: 3,
      title: 'Client Meeting - Sarah Smith',
      date: '2024-03-20',
      time: '2:00 PM',
      type: 'meeting',
      travelers: 1,
      destination: 'Office'
    },
    {
      id: 4,
      title: 'Mediterranean Cruise - Departure',
      date: '2024-03-22',
      time: '4:00 PM',
      type: 'departure',
      travelers: 85,
      destination: 'Mediterranean Sea'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'departure':
        return 'default';
      case 'return':
        return 'secondary';
      case 'meeting':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'departure':
        return '✈️';
      case 'return':
        return '🏠';
      case 'meeting':
        return '🤝';
      default:
        return '📅';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600">Manage your travel schedule and appointments</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Widget */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2" />
                March 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => {
                  const date = i - 6; // Start from February 25th
                  const isCurrentMonth = date > 0 && date <= 31;
                  const isToday = date === 15;
                  const hasEvent = [15, 18, 20, 22].includes(date);
                  
                  return (
                    <div
                      key={i}
                      className={`
                        h-10 w-10 flex items-center justify-center text-sm rounded-lg cursor-pointer
                        ${isCurrentMonth ? 'text-gray-900' : 'text-gray-300'}
                        ${isToday ? 'bg-primary text-white' : 'hover:bg-gray-100'}
                        ${hasEvent && !isToday ? 'bg-blue-100 text-blue-900' : ''}
                      `}
                    >
                      {isCurrentMonth ? date : date <= 0 ? 25 + date : date - 31}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getEventTypeIcon(event.type)}</span>
                        <Badge variant={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>{event.date}</div>
                        <div>{event.time}</div>
                      </div>
                    </div>
                    
                    <h4 className="font-medium mb-2">{event.title}</h4>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {event.destination}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {event.travelers}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">8</div>
            <p className="text-sm text-gray-600">Events This Week</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">24</div>
            <p className="text-sm text-gray-600">Events This Month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">156</div>
            <p className="text-sm text-gray-600">Total Travelers</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
