
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('geostrataUser');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('geostrataUser');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-geostrata-blue text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 
              className="text-2xl font-bold cursor-pointer"
              onClick={() => navigate('/')}
            >
              GEOSTRATA
            </h1>
            <span className="hidden md:block text-xs font-light tracking-wider text-yellow-400 font-semibold">
              CONSULTANCY PRIVATE LIMITED
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="text-white hover:text-geostrata-stone"
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-geostrata-stone"
              onClick={() => navigate('/about')}
            >
              About Us
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-geostrata-stone"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
            
            {isLoggedIn ? (
              <>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-geostrata-stone hidden"
                  onClick={() => navigate('/admin')}
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  className="text-white border-white hover:bg-white hover:text-geostrata-blue hidden"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-geostrata-blue hidden"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-geostrata-lightblue">
            <div className="container mx-auto px-4 py-2 flex flex-col gap-2">
              <Button 
                variant="ghost" 
                className="text-white justify-start hover:text-geostrata-stone"
                onClick={() => {
                  navigate('/');
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                className="text-white justify-start hover:text-geostrata-stone"
                onClick={() => {
                  navigate('/about');
                  setIsMobileMenuOpen(false);
                }}
              >
                About Us
              </Button>
              <Button 
                variant="ghost" 
                className="text-white justify-start hover:text-geostrata-stone"
                onClick={() => {
                  navigate('/contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact Us
              </Button>
              
              {isLoggedIn ? (
                <>
                  <Button 
                    variant="ghost" 
                    className="text-white justify-start hover:text-geostrata-stone hidden"
                    onClick={() => {
                      navigate('/admin');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-white justify-start border-white hover:bg-white hover:text-geostrata-blue hidden"
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button 
                  variant="outline" 
                  className="text-white justify-start border-white hover:bg-white hover:text-geostrata-blue hidden"
                  onClick={() => {
                    navigate('/login');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
              )}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-geostrata-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">GEOSTRATA CONSULTANCY</h3>
              <p className="text-sm">Providing expert geotechnical consulting services to clients worldwide since 2025.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a className="hover:text-geostrata-stone" href="/">Home</a></li>
                <li><a className="hover:text-geostrata-stone" href="/about">About Us</a></li>
                <li><a className="hover:text-geostrata-stone" href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Information</h3>
              <address className="not-italic text-sm space-y-2">
                <p>Flat B-504, Raj Manohar Residency</p>
                <p>Chandrasekharpur, Patia Gds, Khorda</p>
                <p>Bhubaneswar,Orissa, India</p>
                <p>PIN: 751024</p>
                <p>Email: geostrataconsultants@gmail.com</p>
                <p>Phone: (+91) 993 784 4470</p>
              </address>
            </div>
          </div>
          <div className="border-t border-geostrata-lightblue mt-6 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} GEOSTRATA CONSULTANCY PRIVATE LIMITED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
