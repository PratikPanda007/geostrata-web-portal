
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const UserMock = () => {
  const addTestData = () => {
    // Get existing messages
    const existingMessages = JSON.parse(localStorage.getItem('geostrataMessages') || '[]');
    
    // Only add test data if there are no messages yet
    if (existingMessages.length === 0) {
      const testMessages = [
        {
          id: Date.now(),
          createdAt: new Date().toISOString(),
          name: "John Smith",
          email: "john@example.com",
          phone: "555-123-4567",
          company: "ABC Construction",
          subject: "Soil Analysis Request",
          message: "We need a comprehensive soil analysis for our upcoming construction project in the downtown area. Can you provide a quote?",
          status: "new"
        },
        {
          id: Date.now() + 1,
          createdAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
          name: "Sarah Johnson",
          email: "sarah@example.com",
          phone: "555-987-6543",
          company: "Johnson Engineering",
          subject: "Consultation Request",
          message: "I would like to schedule a consultation to discuss potential geological hazards for our new residential development.",
          status: "in-progress"
        },
        {
          id: Date.now() + 2,
          createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
          name: "Michael Wong",
          email: "michael@example.com",
          phone: "555-555-5555",
          company: "Wong & Associates",
          subject: "Partnership Opportunity",
          message: "Our firm is interested in partnering with Geostrata for an upcoming government contract. Please contact me to discuss details.",
          status: "completed"
        }
      ];
      
      localStorage.setItem('geostrataMessages', JSON.stringify(testMessages));
      toast.success("Test data added successfully!");
    } else {
      toast.info("Test data already exists");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button 
        onClick={addTestData}
        className="bg-geostrata-blue hover:bg-geostrata-lightblue text-white"
      >
        Load Test Data
      </Button>
    </div>
  );
};

export default UserMock;
