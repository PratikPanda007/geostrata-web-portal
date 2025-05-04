
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import mockDb from '@/services/mockDatabase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if already logged in
    const user = localStorage.getItem('geostrataUser');
    if (user) {
      navigate('/admin');
    }
  }, [navigate]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const user = mockDb.authenticateUser(email, password);
      
      if (user) {
        // Store user in localStorage
        localStorage.setItem('geostrataUser', JSON.stringify(user));
        toast.success('Login successful!');
        navigate('/admin');
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="bg-geostrata-blue text-white rounded-t-lg">
              <CardTitle className="text-2xl">Admin Login</CardTitle>
              <CardDescription className="text-geostrata-stone">
                Enter your credentials to access the admin panel
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="block font-medium">Password</label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-geostrata-blue hover:bg-geostrata-lightblue w-full text-white"
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-4">
              <div className="text-sm text-gray-500">
                {/* <p>Demo credentials: admin@geostrata.com / admin123</p> */}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
