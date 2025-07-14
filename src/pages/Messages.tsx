
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Search, Filter, MoreHorizontal } from 'lucide-react';

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'John Doe',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Thanks for the booking confirmation!',
      time: '2 min ago',
      unread: 2,
      status: 'online'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Can we reschedule the Tokyo trip?',
      time: '1 hour ago',
      unread: 1,
      status: 'offline'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Perfect! Looking forward to the cruise.',
      time: '3 hours ago',
      unread: 0,
      status: 'online'
    },
    {
      id: 4,
      name: 'Emily Brown',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'I need to cancel my booking.',
      time: '1 day ago',
      unread: 3,
      status: 'away'
    },
    {
      id: 5,
      name: 'David Wilson',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'The Bali trip was amazing!',
      time: '2 days ago',
      unread: 0,
      status: 'offline'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'John Doe',
      message: 'Hi! I wanted to ask about the Paris trip details.',
      time: '10:30 AM',
      isMe: false
    },
    {
      id: 2,
      sender: 'Me',
      message: 'Hello John! I\'d be happy to help you with the Paris trip details. What specifically would you like to know?',
      time: '10:32 AM',
      isMe: true
    },
    {
      id: 3,
      sender: 'John Doe',
      message: 'What time do we depart and what\'s included in the package?',
      time: '10:35 AM',
      isMe: false
    },
    {
      id: 4,
      sender: 'Me',
      message: 'The departure is at 10:00 AM on March 15th. The package includes:\n\n- Round-trip flights\n- 3 nights hotel accommodation\n- City tour\n- Museum passes\n- Breakfast daily',
      time: '10:37 AM',
      isMe: true
    },
    {
      id: 5,
      sender: 'John Doe',
      message: 'Thanks for the booking confirmation!',
      time: '10:45 AM',
      isMe: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Communicate with your travelers</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedConversation === conversation.id
                        ? 'bg-primary/10 border-primary/20 border'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={conversation.avatar}
                          alt={conversation.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(conversation.status)}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm truncate">{conversation.name}</p>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <Badge className="bg-red-500 text-white text-xs">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src="/api/placeholder/40/40"
                    alt="John Doe"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isMe
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                    <p className={`text-xs mt-1 ${
                      message.isMe ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
