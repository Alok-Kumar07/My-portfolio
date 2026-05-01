import React from 'react';
import './About.css';
import { personal, achievements } from '../portfolioData';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">01 — About Me</span>
          <h2 className="section-title">The person behind the code</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">{personal.bio}</p>
            <p className="about-sub">
              When I'm not pushing commits, you'll find me exploring new frameworks, 
              contributing to open source, or mentoring junior developers. I believe 
              great software is built at the intersection of technical excellence and 
              human empathy.
            </p>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-val">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {personal.location}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <a href={`mailto:${personal.email}`} className="info-val info-link">{personal.email}</a>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-val">
                  <span className={`status-dot ${personal.availableForWork ? 'green' : 'red'}`}/>
                  {personal.availableForWork ? 'Open to opportunities' : 'Not looking'}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <span className="info-val">{personal.phone}</span>
              </div>
            </div>

            <div className="about-actions">
              <a href={personal.resumeUrl} download className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download Resume
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn-outline">
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="achievements-card">
              <div className="card-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>Achievements & Highlights</span>
              </div>
              <ul className="achievements-list">
                {achievements.map((a, i) => (
                  <li key={i} className="achievement-item" style={{ animationDelay: `${i * 0.1}s` }}>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="fun-facts-card">
              <div className="card-header">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent3)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>Quick Facts</span>
              </div>
              <div className="facts-grid">
                {[
                  { icon: '☕', text: 'Coffee-driven dev' },
                  { icon: '🌙', text: 'Night owl coder' },
                  { icon: '📚', text: 'Lifelong learner' },
                  { icon: '🎯', text: 'Detail-obsessed' },
                  { icon: '🤝', text: 'Team collaborator' },
                  { icon: '🌐', text: 'New Tech Enthusiast' },
                ].map((f, i) => (
                  <div key={i} className="fact-chip">
                    <span>{f.icon}</span> {f.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
