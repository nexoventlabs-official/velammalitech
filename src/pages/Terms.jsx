import React from 'react';

const Terms = () => {
  return (
    <div className="legal-page animate-fadeIn">
      <div className="container">
        <div className="legal-box glass" style={{ borderTop: '4px solid var(--color-accent)' }}>
          <h1>Terms & Conditions</h1>
          <p className="legal-last-updated">Last Updated: July 08, 2026</p>
          
          <div className="legal-content">
            <p>
              Welcome to the official web portal of Velammal Institute Of Technology (V ITech). By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agreed to be bound by the terms and conditions outlined below.
            </p>
            
            <h2>1. Academic Portal Usage</h2>
            <p>
              Students, faculty, and authorized visitors are granted access to specific academic resources, grades, schedules, and newsletters via our online portals. Any attempt to access unauthorized administration nodes, manipulate databases, or run security testing without explicit IT cell approval will result in disciplinary action.
            </p>
            
            <h2>2. Code of Conduct</h2>
            <p>
              All users of the portal and physical campus are expected to maintain professional standards of behavior:
            </p>
            <ul>
              <li>Respect the intellectual property of peers and researchers.</li>
              <li>Provide accurate credentials when registering for admission notifications or student accounts.</li>
              <li>Do not post defamatory, abusive, or offensive material on student boards.</li>
            </ul>

            <h2>3. Intellectual Property Rights</h2>
            <p>
              All academic papers, research journals, custom student software projects, images, logos, and course content displayed on this website are the intellectual property of Velammal Institute Of Technology or their respective authors. Unauthorized reproduction, distribution, or commercial exploitation is strictly prohibited.
            </p>

            <h2>4. Admission Inquiry Terms</h2>
            <p>
              Submitting an admission inquiry or booking a campus visit through the contact form does not guarantee admission. Admissions are strictly governed by Anna University counseling guidelines, seat availability, and eligibility criteria.
            </p>

            <h2>5. Revisions and Modifications</h2>
            <p>
              Velammal Institute Of Technology reserves the right to modify these terms, course structures, and placement claims without prior notice. Continued use of this portal constitutes acceptance of any modified terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
