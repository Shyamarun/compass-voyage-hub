import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  CalendarIcon, 
  MapPin, 
  Users, 
  Search, 
  Plus, 
  X, 
  Upload, 
  Package, 
  Save,
  Edit,
  Trash2
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface TripMember {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface TripData {
  name: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  destination: string;
  numberOfPeople: number;
  members: TripMember[];
  itineraryType: 'manual' | 'package' | '';
  selectedPackage: string;
  uploadedFiles: File[];
}

export default function InitializeTrip() {
  const [tripData, setTripData] = useState<TripData>({
    name: '',
    startDate: undefined,
    endDate: undefined,
    destination: '',
    numberOfPeople: 1,
    members: [],
    itineraryType: '',
    selectedPackage: '',
    uploadedFiles: []
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Mock data for user search
  const mockUsers = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    { id: '3', name: 'Mike Johnson', email: 'mike@example.com' },
    { id: '4', name: 'Sarah Wilson', email: 'sarah@example.com' },
  ];

  // Mock packages data
  const mockPackages = [
    { id: '1', name: 'Kashmir Paradise', duration: '5 Days, 4 Nights' },
    { id: '2', name: 'Bali Adventure', duration: '6 Days, 5 Nights' },
    { id: '3', name: 'Kerala Backwaters', duration: '7 Days, 6 Nights' },
    { id: '4', name: 'Thailand Discovery', duration: '6 Days, 5 Nights' },
  ];

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addMember = (user: TripMember) => {
    if (!tripData.members.find(member => member.id === user.id)) {
      setTripData(prev => ({
        ...prev,
        members: [...prev.members, user]
      }));
    }
    setSearchQuery('');
  };

  const removeMember = (userId: string) => {
    setTripData(prev => ({
      ...prev,
      members: prev.members.filter(member => member.id !== userId)
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setTripData(prev => ({
      ...prev,
      uploadedFiles: [...prev.uploadedFiles, ...files]
    }));
  };

  const removeFile = (index: number) => {
    setTripData(prev => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    console.log('Saving trip:', tripData);
    // Here you would integrate with your backend/Supabase
    alert('Trip saved successfully!');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this trip?')) {
      // Reset form
      setTripData({
        name: '',
        startDate: undefined,
        endDate: undefined,
        destination: '',
        numberOfPeople: 1,
        members: [],
        itineraryType: '',
        selectedPackage: '',
        uploadedFiles: []
      });
      setIsEditing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Initialize New Trip</h1>
          <p className="text-muted-foreground mt-2">Create and manage your travel itinerary</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleEdit} className="gap-2">
            <Edit className="w-4 h-4" />
            Edit
          </Button>
          <Button variant="outline" onClick={handleDelete} className="gap-2 text-destructive hover:text-destructive">
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
          <Button onClick={handleSave} className="gap-2">
            <Save className="w-4 h-4" />
            Save Trip
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Basic Trip Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Trip Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="tripName">Trip Name</Label>
              <Input
                id="tripName"
                placeholder="Enter trip name"
                value={tripData.name}
                onChange={(e) => setTripData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div>
              <Label>Date Range</Label>
              <div className="flex gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "flex-1 justify-start text-left font-normal",
                        !tripData.startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {tripData.startDate ? format(tripData.startDate, "PPP") : "Start date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={tripData.startDate}
                      onSelect={(date) => setTripData(prev => ({ ...prev, startDate: date }))}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "flex-1 justify-start text-left font-normal",
                        !tripData.endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {tripData.endDate ? format(tripData.endDate, "PPP") : "End date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={tripData.endDate}
                      onSelect={(date) => setTripData(prev => ({ ...prev, endDate: date }))}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="Enter destination"
                value={tripData.destination}
                onChange={(e) => setTripData(prev => ({ ...prev, destination: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="numberOfPeople">Number of People</Label>
              <Input
                id="numberOfPeople"
                type="number"
                min="1"
                value={tripData.numberOfPeople}
                onChange={(e) => setTripData(prev => ({ ...prev, numberOfPeople: parseInt(e.target.value) || 1 }))}
              />
            </div>
          </CardContent>
        </Card>

        {/* Trip Members */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Trip Members
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Search & Add Members</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {searchQuery && (
                <div className="mt-2 border rounded-md max-h-40 overflow-y-auto">
                  {filteredUsers.map(user => (
                    <div
                      key={user.id}
                      className="p-2 hover:bg-accent cursor-pointer flex items-center justify-between"
                      onClick={() => addMember(user)}
                    >
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                      <Plus className="w-4 h-4" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Separator />

            <div>
              <Label>Selected Members ({tripData.members.length})</Label>
              <div className="space-y-2 mt-2">
                {tripData.members.map(member => (
                  <div key={member.id} className="flex items-center justify-between p-2 bg-accent rounded-md">
                    <div>
                      <p className="font-medium text-sm">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.email}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeMember(member.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                {tripData.members.length === 0 && (
                  <p className="text-sm text-muted-foreground">No members added yet</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Itinerary Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Set Itinerary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Itinerary Type</Label>
              <div className="space-y-3 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="manual"
                    checked={tripData.itineraryType === 'manual'}
                    onCheckedChange={(checked) => 
                      setTripData(prev => ({ 
                        ...prev, 
                        itineraryType: checked ? 'manual' : '' 
                      }))
                    }
                  />
                  <Label htmlFor="manual" className="text-sm">Upload from PC locally</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="package"
                    checked={tripData.itineraryType === 'package'}
                    onCheckedChange={(checked) => 
                      setTripData(prev => ({ 
                        ...prev, 
                        itineraryType: checked ? 'package' : '' 
                      }))
                    }
                  />
                  <Label htmlFor="package" className="text-sm">Use existing package</Label>
                </div>
              </div>
            </div>

            {tripData.itineraryType === 'manual' && (
              <div>
                <Label>Upload Files</Label>
                <div className="mt-2">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload files</p>
                    </div>
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx,.jpg,.png,.jpeg"
                    />
                  </label>
                </div>
                
                {tripData.uploadedFiles.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {tripData.uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-accent rounded">
                        <span className="text-sm truncate">{file.name}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {tripData.itineraryType === 'package' && (
              <div>
                <Label>Select Package</Label>
                <Select
                  value={tripData.selectedPackage}
                  onValueChange={(value) => setTripData(prev => ({ ...prev, selectedPackage: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a package" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockPackages.map(pkg => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        <div>
                          <p className="font-medium">{pkg.name}</p>
                          <p className="text-xs text-muted-foreground">{pkg.duration}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Trip Summary */}
      {(tripData.name || tripData.destination || tripData.members.length > 0) && (
        <Card>
          <CardHeader>
            <CardTitle>Trip Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label className="text-xs text-muted-foreground">TRIP NAME</Label>
                <p className="font-medium">{tripData.name || 'Not set'}</p>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">DESTINATION</Label>
                <p className="font-medium">{tripData.destination || 'Not set'}</p>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">DURATION</Label>
                <p className="font-medium">
                  {tripData.startDate && tripData.endDate
                    ? `${format(tripData.startDate, 'MMM dd')} - ${format(tripData.endDate, 'MMM dd')}`
                    : 'Not set'
                  }
                </p>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">MEMBERS</Label>
                <p className="font-medium">{tripData.members.length} added</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}