
// Mock database service for users and contact messages
class MockDatabase {
  constructor() {
    // Initialize storage if not exists
    if (!localStorage.getItem('geostrataUsers')) {
      localStorage.setItem('geostrataUsers', JSON.stringify([
        { id: 1, email: 'admin@geostrata.com', password: 'admin123', name: 'Admin User', role: 'admin' }
      ]));
    }
    
    if (!localStorage.getItem('geostrataMessages')) {
      localStorage.setItem('geostrataMessages', JSON.stringify([]));
    }
  }

  // User methods
  getUsers() {
    return JSON.parse(localStorage.getItem('geostrataUsers') || '[]');
  }

  getUserByEmail(email) {
    const users = this.getUsers();
    return users.find(user => user.email === email);
  }

  authenticateUser(email, password) {
    const user = this.getUserByEmail(email);
    if (user && user.password === password) {
      // Return user without password
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }

  // Message methods
  getMessages() {
    return JSON.parse(localStorage.getItem('geostrataMessages') || '[]');
  }

  addMessage(message) {
    const messages = this.getMessages();
    const newMessage = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...message,
      status: 'new'
    };
    
    messages.push(newMessage);
    localStorage.setItem('geostrataMessages', JSON.stringify(messages));
    return newMessage;
  }

  updateMessageStatus(id, status) {
    const messages = this.getMessages();
    const updatedMessages = messages.map(message => 
      message.id === id ? { ...message, status } : message
    );
    
    localStorage.setItem('geostrataMessages', JSON.stringify(updatedMessages));
    return updatedMessages.find(message => message.id === id);
  }

  deleteMessage(id) {
    const messages = this.getMessages();
    const updatedMessages = messages.filter(message => message.id !== id);
    
    localStorage.setItem('geostrataMessages', JSON.stringify(updatedMessages));
    return true;
  }
}

export default new MockDatabase();
