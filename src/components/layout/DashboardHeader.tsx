
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Search, Bell, Mail, ChevronDown } from 'lucide-react';

export function DashboardHeader() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const getPageTitle = () => {
    const path = location.pathname;
    switch (path) {
      case '/dashboard':
        return 'Dashboard';
      case '/packages':
        return 'Packages';
      case '/bookings':
        return 'Bookings';
      case '/calendar':
        return 'Calendar';
      case '/travelers':
        return 'Travelers';
      case '/team':
        return 'Team';
      case '/messages':
        return 'Messages';
      case '/help':
        return 'Help Center';
      default:
        return 'Dashboard';
    }
  };

  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    };
    return now.toLocaleDateString('en-US', options);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <SidebarTrigger className="md:hidden mr-4" />
          <h2 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h2>
          <div className="ml-4 hidden sm:flex items-center text-sm text-gray-500">
            <span>Today:</span>
            <span className="ml-1 font-medium">{getCurrentDate()}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anything..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-gray-50 focus:bg-white transition-all w-80"
            />
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Mail className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                5
              </Badge>
            </Button>
          </div>

          <Button variant="ghost" className="flex items-center space-x-3 group p-2">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFyNyY8sUd7sg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718369879127?e=2147483647&v=beta&t=MSXoETJapblEfZc7e750LnCIy7WYUCvrAUe1EfQGxB4"
              alt="User Avatar"
              className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="hidden md:block text-left">
              <p className="font-medium text-sm text-gray-800">Sai Teja</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
          </Button>
        </div>
      </div>
    </header>
  );
}
