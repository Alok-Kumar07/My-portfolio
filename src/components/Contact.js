import React, { useState } from 'react';
import './Contact.css';
import { personal } from '../portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Opens default mail client — replace with your preferred form service (Formspree, EmailJS, etc.)
    const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus('Thanks! Opening your mail client...');
    setTimeout(() => setStatus(''), 4000);
  };

  const contacts = [
    { icon: '📧', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: '📱', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: '📍', label: 'Location', value: personal.location, href: null },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">06 — Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-sub">Have a project in mind or just want to chat? I'm always open to new opportunities.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              Whether you're looking for a full-stack developer, have a freelance project, 
              or just want to connect — feel free to reach out. I typically respond within 24 hours.
            </p>

            <div className="contact-items">
              {contacts.map((c, i) => (
                <div key={i} className="contact-item">
                  <div className="contact-icon">{c.icon}</div>
                  <div>
                    <div className="contact-label">{c.label}</div>
                    {c.href
                      ? <a href={c.href} className="contact-value">{c.value}</a>
                      : <span className="contact-value">{c.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <span className="social-label">Find me on</span>
              <div className="socials-row">
                <a href={personal.github} target="_blank" rel="noreferrer" className="social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href={personal.twitter} target="_blank" rel="noreferrer" className="social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry / Collaboration..." />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or idea..." rows={5} required />
            </div>
            <button type="submit" className="btn-primary submit-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
            {status && <div className="form-status">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
