import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-page animate-fadeIn">
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p>Have questions about admissions, research collaborations, or placement drives? Reach out to our campus office directly.</p>
          </div>

          <div className="contact-grid">
            {/* Info Panel */}
            <div className="contact-info-panel glass">
              <h3>Contact Information</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '0.95rem' }}>
                You can reach us using the information below or visit our campus for direct inquiries.
              </p>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Campus Address</h4>
                  <p>Velammal Knowledge Park, Chennai-Kolkatta High Road, Panchetti, Ponneri, Tamil Nadu 601204</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Phone Numbers</h4>
                  <p>+91 44 3044 6300 / 3044 6305</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Email Addresses</h4>
                  <p>admission@velammalitech.edu.in</p>
                  <p>info@velammalitech.edu.in</p>
                </div>
              </div>

              {/* Styled Maps Block */}
              <div className="map-placeholder">
                <iframe
                  title="Velammal Institute Of Technology Campus Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.044005166299!2d80.14641377507567!3d13.294820887192843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4dd7c6c496c14d%3A0x6b4458f3f885e353!2sVelammal%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1720413000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Form Panel */}
            <div className="contact-form-panel glass" style={{ borderTop: '4px solid var(--color-accent)' }}>
              <h3>Send a Message</h3>
              <p>Fill out the form below, and our administration staff will get back to you within 24–48 hours.</p>

              <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-input"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="form-input"
                    style={{ resize: 'vertical' }}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  Send Message <Send size={16} />
                </button>

                {submitted && (
                  <div className="submit-success-msg">
                    <CheckCircle size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Your message has been sent successfully! We will contact you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
