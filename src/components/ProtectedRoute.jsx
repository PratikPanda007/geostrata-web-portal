
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from "sonner";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('geostrataUser');
    
    if (user) {
      const userData = JSON.parse(user);
      if (userData.role === 'admin') {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        toast.error("You don't have permission to access this area");
      }
    } else {
      setIsAuthenticated(false);
      toast.error("Please login to access this area");
    }
  }, []);

  // Show loading state
  if (isAuthenticated === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
