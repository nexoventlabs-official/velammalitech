import React from 'react';
import { Target, Eye, Shield, Award, Sparkles, BookOpen, Terminal, Radio, Zap, Settings, HelpCircle, HardDrive } from 'lucide-react';

const About = () => {
  const departments = [
    {
      icon: <Terminal size={24} />,
      name: 'Computer Science & Engineering',
      desc: 'Focusing on algorithms, artificial intelligence, software engineering, and core computational theories.'
    },
    {
      icon: <Radio size={24} />,
      name: 'Electronics & Communication',
      desc: 'Covering microprocessors, electromagnetic waves, network systems, and VLSI circuit designs.'
    },
    {
      icon: <Zap size={24} />,
      name: 'Electrical & Electronics',
      desc: 'Exploring power system engineering, electric machines, control theory, and green energy technology.'
    },
    {
      icon: <Settings size={24} />,
      name: 'Mechanical Engineering',
      desc: 'Teaching thermodynamics, fluid mechanics, design modeling, and modern manufacturing lines.'
    },
    {
      icon: <HelpCircle size={24} />,
      name: 'Mechatronics Engineering',
      desc: 'Bridging electrical, mechanical, and computer engineering to create modern autonomous robots.'
    },
    {
      icon: <Sparkles size={24} />,
      name: 'Artificial Intelligence & Data Science',
      desc: 'Specialized path covering deep learning systems, big data architectures, and predictive intelligence.'
    },
    {
      icon: <HardDrive size={24} />,
      name: 'Information Technology',
      desc: 'Focusing on system administration, cloud databases, cybersecurity frameworks, and web architectures.'
    }
  ];

  return (
    <div className="about-page animate-fadeIn">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-intro-grid">
            {/* Visual Block */}
            <div className="about-image">
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                fontSize: '1.8rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: '800',
                zIndex: '2',
                textAlign: 'center',
                width: '80%'
              }}>
                <div>VELAMMAL ITECH</div>
                <div style={{ fontSize: '0.9rem', fontWeight: '500', marginTop: '10px', color: '#e2e8f0', letterSpacing: '2px' }}>PANOHETTI CAMPUS</div>
              </div>
            </div>

            {/* Content Block */}
            <div className="about-intro-text">
              <span className="about-subtitle font-heading">Who We Are</span>
              <h2 className="about-title">Nurturing Leaders for the Technological Frontier</h2>
              <p>
                Established under the esteemed Velammal Educational Trust, Velammal Institute of Technology is dedicated to providing high-quality technical education that meets global standards. Located in Chennai, India, our state-of-the-art campus acts as an incubation center for learning.
              </p>
              <p>
                Approved by AICTE and affiliated with Anna University, we focus heavily on interdisciplinary research, industrial mentorship programs, and high-performance placement initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-box">
              <h3><Eye size={24} className="logo-text-accent" /> Our Vision</h3>
              <p>
                To build an academic environment that empowers engineers with excellent technical abilities, research minds, ethical values, and leadership traits, enabling them to make positive contributions to humanity.
              </p>
            </div>
            <div className="mission-box">
              <h3><Target size={24} className="logo-text-accent" /> Our Mission</h3>
              <p>
                To provide cutting-edge infrastructure, maintain rigorous academic standards, support research and developmental ideas, and cultivate strong industrial relations to prepare students for fulfilling technical careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section" style={{ marginBottom: '80px' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>Our guiding values form the pillars of every course, research lab, and student club across Velammal.</p>
          </div>
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="feature-card glass">
              <div className="feature-icon-wrapper"><Shield size={24} /></div>
              <h3 className="feature-title">Integrity & Ethics</h3>
              <p className="feature-desc">Ensuring transparency, academic honesty, and a high standard of professional ethics in all academic pursuits.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon-wrapper"><Sparkles size={24} /></div>
              <h3 className="feature-title">Innovation First</h3>
              <p className="feature-desc">Encouraging out-of-the-box thinking, multi-disciplinary research, and creative solutions to global engineering problems.</p>
            </div>
            <div className="feature-card glass">
              <div className="feature-icon-wrapper"><Award size={24} /></div>
              <h3 className="feature-title">Student Centricity</h3>
              <p className="feature-desc">Focusing on personal development, practical capability, leadership coaching, and inclusive mentoring models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section id="departments" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div className="section-header">
            <h2>Academic Departments</h2>
            <p>We offer specialized B.E. and B.Tech programmes to prepare our graduates for the fast-paced shifts in modern industry.</p>
          </div>
          <div className="departments-grid">
            {departments.map((dept, idx) => (
              <div key={idx} className="dept-card glass">
                <div className="dept-icon">{dept.icon}</div>
                <h3>{dept.name}</h3>
                <p>{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
