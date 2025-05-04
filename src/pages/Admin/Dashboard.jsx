
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import mockDb from '@/services/mockDatabase';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalMessages: 0,
    newMessages: 0,
    inProgressMessages: 0,
    completedMessages: 0
  });
  
  const [recentMessages, setRecentMessages] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get messages from database
    const messages = mockDb.getMessages();
    
    // Calculate statistics
    setStats({
      totalMessages: messages.length,
      newMessages: messages.filter(msg => msg.status === 'new').length,
      inProgressMessages: messages.filter(msg => msg.status === 'in-progress').length,
      completedMessages: messages.filter(msg => msg.status === 'completed').length
    });
    
    // Get 5 most recent messages
    setRecentMessages(messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5));
  }, []);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button 
            onClick={() => navigate('/admin/messages')}
            className="bg-geostrata-blue hover:bg-geostrata-lightblue text-white"
          >
            View All Messages
          </Button>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalMessages}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">New Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.newMessages}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-600">{stats.inProgressMessages}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{stats.completedMessages}</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Messages */}
        <h2 className="text-xl font-bold mb-4">Recent Messages</h2>
        
        {recentMessages.length > 0 ? (
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <Card key={message.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold">{message.subject || 'No Subject'}</h3>
                      <div className="text-sm text-gray-500">
                        From: {message.name} ({message.email})
                      </div>
                      <div className="mt-2 line-clamp-2">{message.message}</div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-sm text-gray-500">
                        {new Date(message.createdAt).toLocaleDateString()}
                      </div>
                      <div 
                        className={`mt-1 px-2 py-1 text-xs rounded-full ${
                          message.status === 'new' 
                            ? 'bg-blue-100 text-blue-800' 
                            : message.status === 'in-progress' 
                              ? 'bg-amber-100 text-amber-800' 
                              : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {message.status === 'new' 
                          ? 'New' 
                          : message.status === 'in-progress' 
                            ? 'In Progress' 
                            : 'Completed'
                        }
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="text-center pt-4">
              <Button 
                variant="outline"
                onClick={() => navigate('/admin/messages')}
                className="text-geostrata-blue border-geostrata-blue hover:bg-geostrata-blue hover:text-white"
              >
                View All Messages
              </Button>
            </div>
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center text-gray-500">
              <p>No messages received yet.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default AdminDashboard;
