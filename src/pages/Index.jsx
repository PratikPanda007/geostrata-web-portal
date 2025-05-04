
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const backgroundImages = [
  '/volvo.jpg',
  '/factory.jpg',
  '/trucks.jpg',
];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);
  
  return (
    <Layout>
      {/* Hero Section */}
      {/* <section className="bg-geostrata-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Geotechnical Consulting Solutions</h1>
            <p className="text-xl mb-8">Providing innovative and sustainable solutions for complex geological challenges.</p>
            <div className="flex gap-4">
              <Button 
                onClick={() => navigate('/about')}
                className="bg-white text-geostrata-blue hover:bg-geostrata-stone"
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/contact')}
                className="border-white text-white hover:bg-white hover:text-geostrata-blue"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative text-white py-16 overflow-hidden h-[500px]">
        {/* Background Carousel */}
        <div className="absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-1000">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-geostrata-blue opacity-60" /> {/* Optional overlay */}
        </div>

        {/* Foreground Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Expert Geotechnical Consulting Solutions
            </h1>
            <p className="text-xl mb-8">
              Providing innovative and sustainable solutions for complex geological challenges.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => navigate('/about')}
                className="bg-white text-geostrata-blue hover:bg-geostrata-stone"
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/contact')}
                className="border-white text-white hover:bg-white hover:text-geostrata-blue"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-geostrata-blue">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-geostrata-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Geostrata</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="bg-geostrata-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-geostrata-stone py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Our team of expert consultants is ready to help you with your next project.</p>
          {/* <Button 
            onClick={() => navigate('/contact')}
            className="border-white text-white hover:bg-white hover:text-geostrata-blue"
            size="lg"
          >
            Get in Touch
          </Button> */}
          <Button 
            className="bg-geostrata-blue text-white hover:bg-geostrata-lightblue"
            onClick={() => navigate('/contact')}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </Layout>
  );
};

// Services Data
const services = [
  {
    title: "Mineral Exploration & Resource Modeling",
    description: "Expertise in identifying, evaluating, and modeling mineral resources for efficient extraction and planning."
  },
  {
    title: "Surveying in Mining and Infrastructure Zones",
    description: "Accurate topographic and boundary surveys to support mining operations and infrastructure development."
  },
  {
    title: "Statutory and Regulatory Clearances",
    description: "Assistance in obtaining clearances from forest, environmental, and wildlife departments for project compliance."
  },
  {
    title: "Legal and Regulatory Compliance",
    description: "Comprehensive management of legal obligations and regulatory requirements across project lifecycles."
  },
  {
    title: "Land Acquisition Services",
    description: "Support for acquiring land for industrial and mining projects through due diligence and legal processes."
  },
  {
    title: "Geological and Geo-hydrological Assessments",
    description: "Evaluation of geological and groundwater conditions to guide project planning and risk mitigation."
  },
  {
    title: "Due Diligence for Mineral Asset Evaluation",
    description: "Thorough assessments of mineral assets to support investment decisions and project feasibility studies."
  },
  {
    title: "GIS and Remote Sensing Applications",
    description: "Utilization of GIS and satellite data for spatial analysis, terrain mapping, and environmental monitoring."
  },
  {
    title: "Afforestation and Plantation Services",
    description: "Implementation of ecological restoration and compensatory afforestation for sustainable development."
  },
  {
    title: "Manpower Deployment",
    description: "Provision of skilled personnel for field operations, surveys, and project implementation support."
  },
  {
    title: "Drone Survey",
    description: "High-resolution aerial surveys using drones for accurate mapping and monitoring of project areas."
  },
  {
    title: "Raising of Minerals",
    description: "End-to-end solutions for extraction, handling, and logistics of minerals in compliance with regulations."
  }
];

// Features Data
const features = [
  {
    icon: <span className="text-xl">🔍</span>,
    title: "Expert Analysis",
    description: "Our team brings decades of combined experience in geotechnical sciences."
  },
  {
    icon: <span className="text-xl">📊</span>,
    title: "Data-Driven",
    description: "We leverage cutting-edge technology and methodologies for accurate assessments."
  },
  {
    icon: <span className="text-xl">🌱</span>,
    title: "Sustainability",
    description: "Environmental considerations are integrated into all our consulting work."
  },
  {
    icon: <span className="text-xl">🤝</span>,
    title: "Partnership",
    description: "We work closely with clients to understand and address their specific needs."
  }
];

export default HomePage;
