
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';
import mockDb from '@/services/mockDatabase';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  
  useEffect(() => {
    // Load messages from database
    refreshMessages();
  }, []);
  
  useEffect(() => {
    // Apply filters
    if (statusFilter === 'all') {
      setFilteredMessages(messages);
    } else {
      setFilteredMessages(messages.filter(msg => msg.status === statusFilter));
    }
  }, [statusFilter, messages]);
  
  const refreshMessages = () => {
    const allMessages = mockDb.getMessages();
    setMessages(allMessages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  };
  
  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setIsViewOpen(true);
  };
  
  const handleChangeStatus = async (id, status) => {
    try {
      await mockDb.updateMessageStatus(id, status);
      refreshMessages();
      toast.success(`Message status updated to ${status}`);
      
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage({...selectedMessage, status});
      }
    } catch (error) {
      toast.error('Failed to update message status');
      console.error('Error updating status:', error);
    }
  };
  
  const handleDeleteMessage = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return;
    }
    
    try {
      await mockDb.deleteMessage(id);
      refreshMessages();
      toast.success('Message deleted successfully');
      
      if (selectedMessage && selectedMessage.id === id) {
        setIsViewOpen(false);
      }
    } catch (error) {
      toast.error('Failed to delete message');
      console.error('Error deleting message:', error);
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span>Filter by status:</span>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Messages</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-sm text-gray-500">
            Total: {filteredMessages.length} messages
          </div>
        </div>
        
        {filteredMessages.length > 0 ? (
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Sender</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead className="w-[150px]">Date</TableHead>
                  <TableHead className="w-[120px]">Status</TableHead>
                  <TableHead className="w-[120px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMessages.map((message) => (
                  <TableRow key={message.id}>
                    <TableCell>
                      <div className="font-medium">{message.name}</div>
                      <div className="text-xs text-gray-500">{message.email}</div>
                    </TableCell>
                    <TableCell>{message.subject || 'No Subject'}</TableCell>
                    <TableCell>{new Date(message.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div 
                        className={`px-2 py-1 text-xs rounded-full text-center ${
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
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-geostrata-blue"
                        onClick={() => handleViewMessage(message)}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No messages found</p>
          </div>
        )}
      </div>
      
      {/* Message View Dialog */}
      {selectedMessage && (
        <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedMessage.subject || 'No Subject'}</DialogTitle>
              <DialogDescription>
                From: {selectedMessage.name} ({selectedMessage.email})
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              {selectedMessage.company && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Company:</div>
                  <div className="col-span-3">{selectedMessage.company}</div>
                </div>
              )}
              
              {selectedMessage.phone && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="font-medium">Phone:</div>
                  <div className="col-span-3">{selectedMessage.phone}</div>
                </div>
              )}
              
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="font-medium">Date:</div>
                <div className="col-span-3">
                  {new Date(selectedMessage.createdAt).toLocaleString()}
                </div>
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="font-medium">Status:</div>
                <div className="col-span-3">
                  <Select 
                    value={selectedMessage.status} 
                    onValueChange={(value) => handleChangeStatus(selectedMessage.id, value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                <div className="font-medium">Message:</div>
                <div className="col-span-3 bg-gray-50 p-3 rounded-md whitespace-pre-wrap">
                  {selectedMessage.message}
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setIsViewOpen(false)}
              >
                Close
              </Button>
              <Button 
                variant="destructive"
                onClick={() => handleDeleteMessage(selectedMessage.id)}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </Layout>
  );
};

export default AdminMessages;
