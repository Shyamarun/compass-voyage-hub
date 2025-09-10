
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Package,
  Calendar,
  Users,
  MapPin,
  MessageSquare,
  LogOut,
  Headphones,
  Zap,
  Plane,
  FolderOpen,
} from 'lucide-react';

interface AppSidebarProps {
  onLogout: () => void;
}

const menuItems = [
  { title: 'Initialize Trip', url: '/initialize-trip', icon: Plane, badge: 'New Trip' },
  { title: 'Manage Trips', url: '/manage-trips', icon: FolderOpen, badge: '12' },
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Packages', url: '/packages', icon: Package, badge: 'New' },
  { title: 'Bookings', url: '/bookings', icon: Calendar },
  { title: 'Calendar', url: '/calendar', icon: Calendar },
  { title: 'Travelers', url: '/travelers', icon: Users },
  { title: 'Team', url: '/team', icon: MapPin },
  { title: 'Messages', url: '/messages', icon: MessageSquare, badge: '7' },
];

export function AppSidebar({ onLogout }: AppSidebarProps) {
  const location = useLocation();
  const { state } = useSidebar();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className="bg-white border-r border-gray-200">
      <SidebarHeader className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQ6Q372gPWK0NAlMpfQvsMhpjv6AaVlGFkiij63Oclz3YloR5kBVI9dToY0DQWzl5bB6D_l2yk6mOruntjPPixdcGJ3nP58PVecEFIEN0fI3xQzpcNoPki1YpvIQmylfG-_eSdPXHf_GG7MdczO76hu2Be6DmaCPXOoELc5yk9Fs1BlSaIQdbaOYAtPr4s/s500/coconut.Compass.png"
              alt="Compass Logo"
              className="h-10"
            />
            {state === 'expanded' && (
              <div className="ml-3">
                <h1 className="font-bold text-2xl text-gray-800">Compass</h1>
                <p className="text-xs text-gray-500">Travel Management</p>
              </div>
            )}
          </div>
          <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {state === 'expanded' && (
          <div className="px-6 pb-4">
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="flex items-center mb-2">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-blue-800">Premium Plan</h3>
              </div>
              <p className="text-xs text-blue-600 mb-3">You are currently on the premium plan</p>
              <div className="w-full bg-blue-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-blue-600">78% used</span>
                <span className="text-blue-800 font-medium">52 days left</span>
              </div>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className="w-full"
                  >
                    <Link to={item.url} className="flex items-center">
                      <item.icon className="w-5 h-5" />
                      {state === 'expanded' && (
                        <>
                          <span className="ml-3">{item.title}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button
                    onClick={onLogout}
                    className="w-full flex items-center text-left"
                  >
                    <LogOut className="w-5 h-5" />
                    {state === 'expanded' && <span className="ml-3">Logout</span>}
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {state === 'expanded' && (
          <div className="p-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Need Help?</h4>
                  <p className="text-xs opacity-80">Contact support</p>
                </div>
              </div>
              <Button
                variant="ghost"
                className="w-full bg-white/10 hover:bg-white/20 text-white"
              >
                <Link to="/help">Help Center</Link>
              </Button>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
