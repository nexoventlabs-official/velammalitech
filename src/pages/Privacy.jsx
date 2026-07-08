import React from 'react';

const Privacy = () => {
  return (
    <div className="legal-page animate-fadeIn">
      <div className="container">
        <div className="legal-box glass" style={{ borderTop: '4px solid var(--color-accent)' }}>
          <h1>Privacy Policy</h1>
          <p className="legal-last-updated">Last Updated: July 08, 2026</p>
          
          <div className="legal-content">
            <p>
              At Velammal Institute of Technology (V ITech), we prioritize the security and confidentiality of our students', parents', and visitors' personal data. This policy outlines how we gather, process, and protect your information.
            </p>
            
            <h2>1. Information We Collect</h2>
            <p>
              We collect information to deliver academic notifications and process application steps:
            </p>
            <ul>
              <li><strong>Contact Details:</strong> Names, email addresses, phone numbers, and academic histories provided via inquiry forms.</li>
              <li><strong>Portal Logs:</strong> Dynamic performance logs, submission records, and attendance markers compiled during academic activities.</li>
              <li><strong>Technical Data:</strong> Browser configuration, IP address, and cookie logs collected automatically when accessing our website.</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              Your data is solely used to support academic and administrative processes:
            </p>
            <ul>
              <li>To evaluate admission eligibility and respond to contact requests.</li>
              <li>To manage course logins, verify identity during examinations, and display results.</li>
              <li>To distribute campus alerts, placement invites, and newsletter issues.</li>
            </ul>

            <h2>3. Information Sharing & Security</h2>
            <p>
              We do not sell, rent, or lease student profiles or visitor details to commercial advertisers. Information is only shared under legal requirements, Anna University academic reporting guidelines, or directly with authorized placement partners during recruitment drives.
            </p>

            <h2>4. Security Safeguards</h2>
            <p>
              We implement industry-grade database encryptions, firewalls, and secure socket layers (SSL) to guard against identity leakage, theft, or unauthorized database mutations.
            </p>

            <h2>5. Cookies and Analytics</h2>
            <p>
              We use small cookies to remember session logs, optimize layout loads, and compile general traffic analytics (e.g. tracking page visits). You can disable cookies in your web browser, but doing so may impact portal logins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
