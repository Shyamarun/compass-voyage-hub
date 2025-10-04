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
  return;
}