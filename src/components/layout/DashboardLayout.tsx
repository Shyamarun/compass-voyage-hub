import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { DashboardHeader } from '@/components/layout/DashboardHeader';
interface DashboardLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}
export default function DashboardLayout({
  children,
  onLogout
}: DashboardLayoutProps) {
  return <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar onLogout={onLogout} />
        
      </div>
    </SidebarProvider>;
}