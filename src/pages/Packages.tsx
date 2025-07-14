
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { MapPin, Clock, Users, Star, Eye, Edit, Trash2, Plus, Search, Download, Calendar } from 'lucide-react';

interface Package {
  id: number;
  name: string;
  destination: string;
  duration: string;
  price: string;
  rating: number;
  capacity: number;
  booked: number;
  image: string;
  features: string[];
  status: 'active' | 'draft' | 'sold-out';
  type: 'domestic' | 'international';
  category?: string[];
  featured?: boolean;
  description: string;
  bookings: number;
}

export default function Packages() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Packages');
  const [sortBy, setSortBy] = useState('newest');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const packages: Package[] = [
    {
      id: 1,
      name: 'Kashmir Paradise',
      destination: 'Srinagar, Gulmarg, Pahalgam',
      duration: '5 Days, 4 Nights',
      price: '₹27,999',
      rating: 4.8,
      capacity: 50,
      booked: 42,
      image: 'https://cdn.abhibus.com/2024/05/Best-Time-to-visit-Kashmir-1024x604.jpg',
      features: ['Houseboat Stay', 'Shikara Ride', 'Local Guide'],
      status: 'active',
      type: 'domestic',
      category: ['Adventure', 'Honeymoon'],
      description: 'Experience the heaven on earth with our comprehensive Kashmir tour package. Enjoy the serene lakes, snow-capped mountains, and lush valleys.',
      bookings: 42
    },
    {
      id: 2,
      name: 'Bali Adventure',
      destination: 'Kuta, Ubud, Seminyak',
      duration: '6 Days, 5 Nights',
      price: '₹65,999',
      rating: 4.9,
      capacity: 30,
      booked: 25,
      image: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1404/istockphoto-653953140-612x612.jpg',
      features: ['Beach Resort', 'Cultural Tours', 'Spa Treatments'],
      status: 'active',
      type: 'international',
      category: ['Beach', 'Honeymoon'],
      featured: true,
      description: 'Explore the beautiful island of Bali with its stunning beaches, vibrant culture, and lush landscapes. Perfect for honeymooners and adventure seekers.',
      bookings: 78
    },
    {
      id: 3,
      name: 'Kerala Backwaters',
      destination: 'Munnar, Alleppey, Kochi',
      duration: '7 Days, 6 Nights',
      price: '₹32,499',
      rating: 4.7,
      capacity: 40,
      booked: 32,
      image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR3hEdzjpMxs7IbbD_Y7lOk2qV-q19dEqNCCIWihKsz9jHfHJ6DQtgqlHu7lHGF1Q-KeAL4VGcI4q8py1cNIkaqprQjsKlWVZDtKmhSZw',
      features: ['Houseboat Stay', 'Ayurvedic Spa', 'Tea Plantation'],
      status: 'active',
      type: 'domestic',
      category: ['Beach', 'Wildlife'],
      description: 'Experience the tranquil backwaters, tea gardens, and pristine beaches of God\'s Own Country. Includes houseboat stay and traditional Ayurvedic treatments.',
      bookings: 56
    },
    {
      id: 4,
      name: 'Thailand Discovery',
      destination: 'Bangkok, Pattaya, Phuket',
      duration: '6 Days, 5 Nights',
      price: '₹45,999',
      rating: 4.6,
      capacity: 35,
      booked: 28,
      image: 'https://imgcld.yatra.com/ytimages/image/upload/v1027905069/Illustrations/Thailand_1920_x_500_ecDvSY.jpg',
      features: ['Island Hopping', 'Thai Massage', 'Street Food Tour'],
      status: 'active',
      type: 'international',
      category: ['Beach', 'Adventure'],
      description: 'Discover the vibrant culture, delicious cuisine, and beautiful beaches of Thailand. Perfect for both families and couples.',
      bookings: 63
    },
    {
      id: 5,
      name: 'Royal Rajasthan',
      destination: 'Jaipur, Udaipur, Jodhpur',
      duration: '8 Days, 7 Nights',
      price: '₹38,499',
      rating: 4.8,
      capacity: 45,
      booked: 0,
      image: 'https://www.tourmyindia.com/states/rajasthan/images/golden-triangle-with-amritsar-tour.jpg',
      features: ['Palace Hotels', 'Desert Safari', 'Cultural Shows'],
      status: 'draft',
      type: 'domestic',
      category: ['Adventure', 'Pilgrimage'],
      description: 'Experience the royal heritage, magnificent forts, and colorful culture of Rajasthan. Includes desert safari and traditional Rajasthani cuisine.',
      bookings: 0
    },
    {
      id: 6,
      name: 'Singapore & Malaysia',
      destination: 'Singapore, Kuala Lumpur',
      duration: '7 Days, 6 Nights',
      price: '₹72,999',
      rating: 4.9,
      capacity: 25,
      booked: 25,
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/b1/singapore.jpg?w=2400&h=1000&s=1',
      features: ['Universal Studios', 'City Tours', 'Shopping'],
      status: 'sold-out',
      type: 'international',
      category: ['Adventure'],
      description: 'Explore the modern marvels of Singapore and the cultural diversity of Malaysia. Includes Universal Studios visit and Sentosa Island tour.',
      bookings: 92
    }
  ];

  const categories = ['All Packages', 'Domestic', 'International', 'Honeymoon', 'Adventure', 'Pilgrimage', 'Wildlife', 'Beach'];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { variant: 'default' as const, label: 'Active' },
      draft: { variant: 'secondary' as const, label: 'Draft' },
      'sold-out': { variant: 'destructive' as const, label: 'Sold Out' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getTypeBadge = (type: string, featured?: boolean) => {
    return (
      <div className="absolute top-4 left-4 flex gap-2">
        <Badge variant={type === 'domestic' ? 'default' : 'secondary'}>
          {type === 'domestic' ? 'Domestic' : 'International'}
        </Badge>
        {featured && <Badge className="bg-amber-500">Featured</Badge>}
      </div>
    );
  };

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Packages' || 
                           pkg.type === selectedCategory.toLowerCase() ||
                           pkg.category?.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Travel Packages</h1>
          <p className="text-gray-600">Manage your travel packages and create new experiences</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Package
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Package</DialogTitle>
              </DialogHeader>
              <AddPackageForm onClose={() => setIsAddModalOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search packages by name, destination, or price..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-sm text-gray-600">Sort by:</Label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg p-2 text-sm bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>
          
          <div>
            <Label className="text-sm text-gray-600 mb-2 block">Filter by Category:</Label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Packages Count */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          All Packages ({filteredPackages.length})
        </h2>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative aspect-video bg-gray-200">
              <img 
                src={pkg.image} 
                alt={pkg.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {getTypeBadge(pkg.type, pkg.featured)}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-bold">
                {pkg.price}
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{pkg.name}</CardTitle>
                {getStatusBadge(pkg.status)}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                {pkg.destination}
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {pkg.duration}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {pkg.status === 'draft' ? 'Draft' : `${pkg.booked}/${pkg.capacity} booked`}
                  </div>
                  {pkg.status !== 'draft' && (
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(pkg.booked / pkg.capacity) * 100}%` }}
                      />
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-2">{pkg.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-yellow-50 text-yellow-600 rounded-full px-2 py-1 text-xs font-medium mr-2">
                      <Star className="w-3 h-3 mr-1 inline" />
                      {pkg.rating}
                    </div>
                    <span className="text-sm text-gray-500">{pkg.bookings} bookings</span>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      {/* Floating Action Button */}
      <Button
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        onClick={() => setIsAddModalOpen(true)}
      >
        <Plus className="w-6 h-6" />
      </Button>
    </div>
  );
}

// Add Package Form Component
function AddPackageForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="packageName">Package Name</Label>
          <Input id="packageName" placeholder="Enter package name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="packageType">Type</Label>
          <select id="packageType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option value="">Select package type</option>
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input id="destination" placeholder="Enter destinations" />
        </div>
        <div className="space-y-2">
          <Label>Duration</Label>
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="Days" type="number" />
            <Input placeholder="Nights" type="number" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price (₹)</Label>
          <Input id="price" placeholder="Enter package price" type="number" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <select id="status" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="sold-out">Sold Out</option>
          </select>
        </div>
        <div className="md:col-span-2 space-y-2">
          <Label htmlFor="description">Description</Label>
          <textarea 
            id="description"
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="Enter package description"
            rows={3}
          />
        </div>
      </div>
      
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Save Package</Button>
      </div>
    </div>
  );
}
