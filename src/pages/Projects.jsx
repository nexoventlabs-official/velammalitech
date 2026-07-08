import React, { useState } from 'react';
import { Filter, Users, Cpu, Code, HelpCircle } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'AI/ML', 'ROBOTICS', 'IOT', 'GREEN TECH'];

  const projectsData = [
    {
      id: 1,
      title: 'AeroVela Smart Surveillance Drone',
      category: 'ROBOTICS',
      image: '/drone.jpg',
      desc: 'An autonomous drone equipped with edge AI for real-time traffic detection and safety mapping inside campus environments.',
      contributors: 'Sanjay Kumar, Divya R.'
    },
    {
      id: 2,
      title: 'EcoGrid Hybrid Energy Manager',
      category: 'GREEN TECH',
      image: '/grid.jpg',
      desc: 'A smart grid simulation and control system using predictive analytics to optimize solar-battery output in residential zones.',
      contributors: 'Rohan Joshi, Preethi S.'
    },
    {
      id: 3,
      title: 'AI-Vela Tumor Diagnostic Assistant',
      category: 'AI/ML',
      image: '/health.jpg',
      desc: 'A custom Convolutional Neural Network (CNN) model built to analyze MRI scans and classify benign vs. malignant tumor cells.',
      contributors: 'Ajay K., Niveditha M.'
    },
    {
      id: 4,
      title: 'IoT Hydroponic Agriculture Node',
      category: 'IOT',
      image: '/agri.jpg',
      desc: 'An automated vertical farming system monitoring and adjusting pH, water flow, and lux levels using a custom React dashboard.',
      contributors: 'Vikram A., Swetha P.'
    },
    {
      id: 5,
      title: 'Sign Language Translator Glove',
      category: 'ROBOTICS',
      image: '/drone.jpg', // reuse drone
      desc: 'A wearable sensory glove translating hand gestures to synthesized voice outputs using Arduino and neural mapping.',
      contributors: 'Dinesh V., Koushik R.'
    },
    {
      id: 6,
      title: 'Predictive Solar Charge Controller',
      category: 'GREEN TECH',
      image: '/grid.jpg', // reuse grid
      desc: 'Using meteorological API forecasts to dynamically adjust power distribution parameters and maximize PV panel life cycles.',
      contributors: 'Pooja J., Arvind Kumar'
    }
  ];

  const filteredProjects = filter === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="projects-page animate-fadeIn">
      {/* Header */}
      <section className="projects-header">
        <div className="container">
          <div className="section-header">
            <h2>Our Innovation Showcase</h2>
            <p>Explore the research prototypes, capstone projects, and award-winning solutions developed by our undergraduate engineering students.</p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ marginBottom: '50px' }}>
        <div className="container">
          <div className="projects-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card glass">
                <div className="project-img-wrapper">
                  <span className="project-tag">{project.category}</span>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-contributors">
                    <span className="contrib-label">Developers</span>
                    <span className="contrib-names">{project.contributors}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
              <HelpCircle size={48} style={{ marginBottom: '16px' }} />
              <p>No projects found in this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
