
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { User, Mail, Phone, Calendar, Plus, Settings } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sai Teja',
      role: 'Admin',
      email: 'sai.teja@compass.com',
      phone: '+1 (555) 123-4567',
      joined: '2023-01-15',
      status: 'active',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFyNyY8sUd7sg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718369879127?e=2147483647&v=beta&t=MSXoETJapblEfZc7e750LnCIy7WYUCvrAUe1EfQGxB4',
      permissions: ['full_access'],
      lastActive: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jessica Martinez',
      role: 'Travel Consultant',
      email: 'jessica.martinez@compass.com',
      phone: '+1 (555) 234-5678',
      joined: '2023-03-20',
      status: 'active',
      avatar: '/api/placeholder/60/60',
      permissions: ['bookings', 'customers'],
      lastActive: '2024-01-15'
    },
    {
      id: 3,
      name: 'Robert Chen',
      role: 'Operations Manager',
      email: 'robert.chen@compass.com',
      phone: '+1 (555) 345-6789',
      joined: '2023-02-10',
      status: 'active',
      avatar: '/api/placeholder/60/60',
      permissions: ['bookings', 'packages', 'team'],
      lastActive: '2024-01-14'
    },
    {
      id: 4,
      name: 'Amanda Foster',
      role: 'Customer Support',
      email: 'amanda.foster@compass.com',
      phone: '+1 (555) 456-7890',
      joined: '2023-06-15',
      status: 'active',
      avatar: '/api/placeholder/60/60',
      permissions: ['customers', 'messages'],
      lastActive: '2024-01-15'
    },
    {
      id: 5,
      name: 'Carlos Rodriguez',
      role: 'Travel Consultant',
      email: 'carlos.rodriguez@compass.com',
      phone: '+1 (555) 567-8901',
      joined: '2023-08-01',
      status: 'away',
      avatar: '/api/placeholder/60/60',
      permissions: ['bookings', 'customers'],
      lastActive: '2024-01-12'
    },
    {
      id: 6,
      name: 'Nicole Thompson',
      role: 'Marketing Specialist',
      email: 'nicole.thompson@compass.com',
      phone: '+1 (555) 678-9012',
      joined: '2023-09-10',
      status: 'active',
      avatar: '/api/placeholder/60/60',
      permissions: ['packages', 'analytics'],
      lastActive: '2024-01-15'
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'destructive';
      case 'Operations Manager':
        return 'default';
      case 'Travel Consultant':
        return 'secondary';
      case 'Customer Support':
        return 'outline';
      case 'Marketing Specialist':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team</h1>
          <p className="text-gray-600">Manage your team members and their roles</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Manage Roles
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Invite Member
          </Button>
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{teamMembers.length}</div>
            <p className="text-sm text-gray-600">Total Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {teamMembers.filter(m => m.status === 'active').length}
            </div>
            <p className="text-sm text-gray-600">Active Now</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {teamMembers.filter(m => m.status === 'away').length}
            </div>
            <p className="text-sm text-gray-600">Away</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">
              {new Set(teamMembers.map(m => m.role)).size}
            </div>
            <p className="text-sm text-gray-600">Different Roles</p>
          </CardContent>
        </Card>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(member.status)}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <Badge variant={getRoleColor(member.role)} className="mt-1">
                      {member.role}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  {member.email}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {member.phone}
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Joined {new Date(member.joined).toLocaleDateString()}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="mb-3">
                  <p className="text-sm text-gray-600 mb-2">Permissions:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.permissions.map((permission, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {permission.replace('_', ' ')}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Last active: {new Date(member.lastActive).toLocaleDateString()}
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button size="sm" className="flex-1">
                  Edit Role
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
