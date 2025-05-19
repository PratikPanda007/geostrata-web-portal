import Layout from "@/components/Layout";
import "./styles/about.css";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-geostrata-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Geostrata
          </h1>
          <p className="text-xl">
            Learn more about our company, mission, and expertise
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-geostrata-blue">
                Our Company
              </h2>
              <p className="mb-4">
                GeoStrata Consultancy Private Limited is a multidisciplinary
                enterprise driven by expertise, innovation, and integrity. We
                specialize in delivering end-to-end solutions across critical
                sec-tors such as mineral exploration, geological survey, mining
                operations, land acquisition, forest and environmental
                clearances, and regulatory compliance.
              </p>
              <p className="mb-4">
                Our services extend to GIS mapping, plantation planning,
                manpower deployment, and engineering procurement. With a
                commitment to excellence and sustainability, we bridge technical
                insight with regulatory precision-empowering industries to move
                forward seamlessly from project inception to execution.
              </p>
              <p className="mb-4">
                Our team of highly qualified geologists, engineers, and
                environmental scientists brings diverse expertise to solve
                complex geological challenges. We combine cutting-edge
                technology with decades of practical experience to deliver
                reliable, innovative solutions.
              </p>
            </div>
            <div className="bg-geostrata-light pr-8 pb-8 pl-8 pt-0 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p>
                  <ul>
                    <li>
                      To deliver integrated, end-to-end consultancy services in
                      land acquisition, forest and environmental clearances,
                      mining operations, and legal compliance.
                    </li>
                    <li>
                      To bridge technical expertise with regulatory strategy,
                      enabling seamless project implementation in alignment with
                      government policies and sustainable development goals.
                    </li>
                    <li>
                      To uphold transparency, timeliness, and professionalism in
                      every project we undertake, ensuring measurable value for
                      clients and stakeholders.
                    </li>
                    <li>
                      To foster innovation and adaptability, by leveraging
                      modern tools such as drone surveys, GIS mapping, and
                      digital legal solutions for informed decision-making and
                      efficient execution.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p>
                  To be a nationally trusted consultancy partner in the fields
                  of mining, energy, land, and environmental & forest
                  compliance—empowering industries with expert guidance,
                  sustainable solutions, and regulatory precision from concept
                  to execution.
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

      <section class="t-bq-section bg-geostrata-light py-16" id="paul">
        <div class="t-bq-wrapper t-bq-wrapper-boxed">
          <div class="t-bq-quote t-bq-quote-paul">
            <div class="t-bq-quote-paul-userpic"></div>
            <div class="t-bq-quote-paul-qmark">&#10077;</div>
            <div class="t-bq-quote-paul-pattern"></div>
            <div class="t-bq-quote-paul-base">
              <h1 className="msg_dir mb-3">Message from the Director</h1>
              <blockquote
                class="t-bq-quote-paul-text"
                cite="Strugatsky Brothers"
              >
                <p>
                  As a seasoned energy professional with over three decades of
                  experience in the coal, power, and renewable energy sectors,
                  Mining I have had the privilege of contributing to India’s
                  evolving energy landscape. From leading high-value solar and
                  thermal projects to forming strategic joint ventures with
                  premier institutions like NTPC and NLCIL, MCL,my journey has
                  been driven by a single vision—to build a sustainable and
                  future-ready energy ecosystem.
                </p>
                <br />
                <p>
                  GeoStrata Consultancy Private Limited was founded with this
                  very philosophy at its core. Our mission is to provide
                  integrated, end-to-end consultancy services across land
                  acquisition, mining, geological surveys, forest and
                  environmental clearances, drone-based survey and mapping,
                  legal compliance, and green energy planning, mining operations
                  .We aim to be the trusted partner for industries and
                  government agencies navigating the complex terrain of
                  regulatory frameworks, technical execution, and sustainable
                  development.
                </p>
                <br />
                <p>
                  At GeoStrata, we combine domain expertise with strategic
                  insight—drawing from our deep understanding of project
                  management, policy formulation, and ground-level execution. We
                  are committed to ensuring timely delivery, ethical operations,
                  and innovative solutions that align with the future of India’s
                  industrial growth and ecological balance.
                </p>
              </blockquote>
              <div class="t-bq-quote-paul-meta">
                <div class="t-bq-quote-paul-meta-info">
                  <div class="t-bq-quote-paul-author">
                    <cite>{team[0].name}</cite>
                  </div>
                  <div class="t-bq-quote-paul-source">
                    {/* <span></span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-geostrata-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* <div
                  className="h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.img})` }}
                >
                  <span className="text-white text-4xl">{member.initials}</span>
                </div> */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  {/* <p className="text-geostrata-blue mb-3">{member.role}</p> */}
                  <p
                    className="text-geostrata-blue mb-3"
                    // dangerouslySetInnerHTML is okay here because you control the data
                    dangerouslySetInnerHTML={{
                      __html: member.role.join("<br/>"),
                    }}
                  />
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
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-geostrata-blue pl-6"
              >
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
    role: [
      "Director",
      "Former General Manager (E&M) & HOD (Solar)",
      "Coal India Ltd Former CEO, CNUPL",
      "Director, CLUVPL.",
    ],
    bio: "Mr. Batakeswar Panda has over 25 years of experience in geotechnical consulting and has led major projects across five continents.",
  },
  // {
  //   name: "Mr. Barun Panda",
  //   img: "/person//person2.jpg'",
  //   initials: "BP",
  //   role: ["Chief Scientific Officer"],
  //   bio: "An internationally recognized expert in structural geology, Mr. Barun Panda academic excellence and practical expertise to complex projects."
  // },
];

// Expertise Data
const expertise = [
  {
    area: "Foundation Engineering",
    description:
      "Expert analysis and design recommendations for foundations in challenging geological conditions, including deep foundations, shallow foundations, and ground improvement techniques.",
  },
  {
    area: "Slope Stability Analysis",
    description:
      "Comprehensive assessment of natural and engineered slopes, including failure mechanism identification, stabilization measures, and monitoring solutions.",
  },
  {
    area: "Seismic Hazard Assessment",
    description:
      "Evaluation of seismic risks and development of mitigation strategies for infrastructure and building projects in earthquake-prone regions.",
  },
  {
    area: "Groundwater Studies",
    description:
      "Investigation and modeling of groundwater conditions, including contamination assessment, dewatering design, and sustainable management plans.",
  },
  {
    area: "Mining Geotechnics",
    description:
      "Specialized consulting for open pit and underground mining operations, including pit slope design, tunnel stability, and ground support systems.",
  },
  {
    area: "Environmental Remediation",
    description:
      "Development of effective strategies for contaminated land remediation, with focus on sustainable approaches and regulatory compliance.",
  },
];

export default AboutPage;
