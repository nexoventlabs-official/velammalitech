import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Globe, Rocket, Award, Users, BookOpen, GraduationCap } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '97%', label: 'Placement Rate' },
    { number: '150+', label: 'Prime Recruiters' },
    { number: '15+', label: 'Years of Excellence' },
    { number: '3000+', label: 'Alumni Network' }
  ];

  const pillars = [
    {
      icon: <Cpu size={28} />,
      title: 'Advanced AI & Research Lab',
      desc: 'Hands-on training in artificial intelligence, machine learning, IoT nodes, and embedded robotics using state-of-the-art laboratory setups.'
    },
    {
      icon: <Globe size={28} />,
      title: 'Industry Partnerships',
      desc: 'Collaborations with tier-1 global tech companies to provide internships, mentorship, workshops, and placement pipelines.'
    },
    {
      icon: <Rocket size={28} />,
      title: 'Incubation & Startup Cell',
      desc: 'Dedicated support systems for budding entrepreneurs to refine ideas, register patents, secure seed capital, and launch ventures.'
    }
  ];

  return (
    <div className="home-page animate-fadeIn">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column */}
            <div className="hero-content">
              <span className="hero-tagline">Excel & Innovate</span>
              <h1 className="hero-title">Shaping the Innovators of Tomorrow</h1>
              <p className="hero-desc">
                Velammal Institute of Technology bridges rigorous academic excellence with hands-on technical creation, preparing global engineering minds to solve real-world problems.
              </p>
              <div className="hero-buttons">
                <Link to="/about" className="btn btn-primary">
                  Explore Campus <ArrowRight size={18} />
                </Link>
                <Link to="/projects" className="btn btn-outline">
                  View Student Projects
                </Link>
              </div>
            </div>

            {/* Right Column - Tech Visual */}
            <div className="hero-visual">
              <div className="glowing-globe">
                <div className="hero-code-box">
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></span>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></span>
                  </div>
                  <div style={{ color: '#8b949e', fontSize: '0.8rem', lineHeight: '1.4' }}>
                    <span style={{ color: '#ff7b72' }}>import</span> {'{ IoTNode }'} <span style={{ color: '#ff7b72' }}>from</span> <span style={{ color: '#a5d6ff' }}>'velammal-tech-core'</span>;
                    <br /><br />
                    <span style={{ color: '#ff7b72' }}>const</span> campusNode = <span style={{ color: '#ff7b72' }}>new</span> <span style={{ color: '#d2a8ff' }}>IoTNode</span>({'{'}
                    <br />
                    &nbsp;&nbsp;id: <span style={{ color: '#a5d6ff' }}>"VITECH_CAMPUS_01"</span>,
                    <br />
                    &nbsp;&nbsp;sensors: [<span style={{ color: '#a5d6ff' }}>"temp"</span>, <span style={{ color: '#a5d6ff' }}>"solar_panel_load"</span>],
                    <br />
                    &nbsp;&nbsp;autoOptimize: <span style={{ color: '#79c0ff' }}>true</span>
                    <br />
                    {'}'});
                    <br /><br />
                    campusNode.<span style={{ color: '#d2a8ff' }}>initializePowerGrid</span>();
                    <br />
                    <span style={{ color: '#8b949e' }}>// Output: Active: Grid Optimizing...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Pillars Showcase */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Velammal ITech?</h2>
            <p>We combine theoretical knowledge with state-of-the-art facilities to create an environment where innovation thrives.</p>
          </div>
          <div className="features-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="feature-card glass">
                <div className="feature-icon-wrapper">
                  {pillar.icon}
                </div>
                <h3 className="feature-title">{pillar.title}</h3>
                <p className="feature-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box glass" style={{ borderLeft: '4px solid var(--color-accent)' }}>
            <h3>Ready to build your engineering career?</h3>
            <p>Admissions are now open for the current academic year. Submit your application details online or get in touch with our counselors today.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-accent">
                Apply Now <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn About Curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
