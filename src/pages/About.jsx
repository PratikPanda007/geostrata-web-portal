
import Layout from '@/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-geostrata-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Geostrata</h1>
          <p className="text-xl">Learn more about our company, mission, and expertise</p>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-geostrata-blue">Our Company</h2>
              <p className="mb-4">
                GeoStrata Consultancy Private Limited is a multidisciplinary enterprise driven by expertise, innovation, and integrity. 
                We specialize in delivering end-to-end solutions across critical sec-tors such as mineral exploration, geological survey, mining 
                operations, land acquisition, forest and environmental clearances, and regulatory compliance.
              </p>
              <p className="mb-4">
                Our services extend to GIS mapping, plantation planning, manpower deployment, and engineering procurement. With a commitment to 
                excellence and sustainability, we bridge technical insight with regulatory precision-empowering industries to move forward 
                seamlessly from project inception to execution. 
              </p>
              <p className="mb-4">
                Our team of highly qualified geologists, engineers, and environmental scientists brings diverse expertise to solve complex 
                geological challenges. We combine cutting-edge technology with decades of practical experience to deliver reliable, innovative 
                solutions.
              </p>
            </div>
            <div className="bg-geostrata-light p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p>
                  To provide expert geotechnical consulting that enables sustainable development while mitigating geological risks through innovative and reliable solutions.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p>
                  To be the most trusted name in geotechnical consulting, known for technical excellence, environmental stewardship, and transformative client solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Technical excellence and innovation</li>
                  <li>Environmental responsibility</li>
                  <li>Client-focused approach</li>
                  <li>Integrity and transparency</li>
                  <li>Safety as our priority</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="bg-geostrata-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.img})` }}
                >
                  <span className="text-white text-4xl">{member.initials}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-geostrata-blue mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>  
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="border-l-4 border-geostrata-blue pl-6">
                <h3 className="text-xl font-semibold mb-2">{item.area}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Team Data
const team = [
  {
    name: "Mr. Batakeswar Panda",
    img: "/volvo.jpg",
    initials: "BKP",
    role: "CEO & Principal Geologist",
    bio: "Mr. Barakeswar Panda has over 25 years of experience in geotechnical consulting and has led major projects across five continents."
  },
  {
    name: "Mr. Barun Panda",
    img: "/person//person2.jpg'",
    initials: "BP",
    role: "Chief Scientific Officer",
    bio: "An internationally recognized expert in structural geology, Mr. Barun Panda academic excellence and practical expertise to complex projects."
  },
];

// Expertise Data
const expertise = [
  {
    area: "Foundation Engineering",
    description: "Expert analysis and design recommendations for foundations in challenging geological conditions, including deep foundations, shallow foundations, and ground improvement techniques."
  },
  {
    area: "Slope Stability Analysis",
    description: "Comprehensive assessment of natural and engineered slopes, including failure mechanism identification, stabilization measures, and monitoring solutions."
  },
  {
    area: "Seismic Hazard Assessment",
    description: "Evaluation of seismic risks and development of mitigation strategies for infrastructure and building projects in earthquake-prone regions."
  },
  {
    area: "Groundwater Studies",
    description: "Investigation and modeling of groundwater conditions, including contamination assessment, dewatering design, and sustainable management plans."
  },
  {
    area: "Mining Geotechnics",
    description: "Specialized consulting for open pit and underground mining operations, including pit slope design, tunnel stability, and ground support systems."
  },
  {
    area: "Environmental Remediation",
    description: "Development of effective strategies for contaminated land remediation, with focus on sustainable approaches and regulatory compliance."
  }
];

export default AboutPage;
