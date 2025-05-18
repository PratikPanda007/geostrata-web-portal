
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import UserMock from "./components/UserMock";

// Pages
import HomePage from "./pages/Index";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import LoginPage from "./pages/Login";
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminMessages from "./pages/Admin/Messages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* <UserMock /> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
          
          {/* <Route path="/login" element={<LoginPage />} /> */}
          
          {/* <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/messages" element={
            <ProtectedRoute>
              <AdminMessages />
            </ProtectedRoute>
          } /> */}
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
