
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import mockDb from '@/services/mockDatabase';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
    
    // Save to mock database
    try {
      mockDb.addMessage(formData);
      
      toast.success('Message sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-geostrata-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our team of experts</p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-geostrata-blue">Send Us a Message</h2>
              <p className="mb-8 text-gray-600">
                Have questions about our services or want to discuss your project? 
                Fill out the form below and one of our consultants will get back to you shortly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium mb-1">Email <span className="text-red-500">*</span></label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block font-medium mb-1">Company</label>
                    <Input 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-medium mb-1">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium mb-1">Message <span className="text-red-500">*</span></label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-geostrata-blue hover:bg-geostrata-lightblue w-full sm:w-auto text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-geostrata-light p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-6 text-geostrata-blue">Contact Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Headquarters</h3>
                    <address className="not-italic text-gray-600">
                      Flat B-504, Raj Manohar, Residency<br />
                      Chandrasekharpur, Patia Gds, Khorda<br/>
                      Bhubaneswar, Odisha, India<br/>
                      PIN: 751024
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Contact Details</h3>
                    <p className="text-gray-600">Email: geostrataconsultants@gmail.com</p>
                    <p className="text-gray-600">Phone: (+91) 993 784 4470</p>
                    {/* <p className="text-gray-600">Fax: (555) 123-4568</p> */}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday to Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-geostrata-blue text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Need Urgent Assistance?</h3>
                <p className="mb-4">
                  For urgent matters requiring immediate attention, please contact our emergency response team:
                </p>
                <p className="font-bold">(+91) 993 784 4470</p>
                <p className="text-sm italic mt-2">Available 24/7 for critical situations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
