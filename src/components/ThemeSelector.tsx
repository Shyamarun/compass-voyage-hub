import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Palette } from 'lucide-react';

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background">
        <DropdownMenuItem 
          onClick={() => setTheme('blue-white')}
          className={theme === 'blue-white' ? 'bg-accent' : ''}
        >
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-blue-500" />
            <span>Blue Theme</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('yellow-white')}
          className={theme === 'yellow-white' ? 'bg-accent' : ''}
        >
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-yellow-500" />
            <span>Yellow Theme</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('default')}
          className={theme === 'default' ? 'bg-accent' : ''}
        >
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gradient-to-r from-orange-400 to-amber-400" />
            <span>Default Theme</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
