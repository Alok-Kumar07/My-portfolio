import React from 'react';
import './Experience.css';
import { experience } from '../portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">05 — Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </div>

        <div className="exp-list">
          {experience.map((e, i) => (
            <div key={i} className="exp-card">
              <div className="exp-left">
                <div className="company-logo">
                  {e.company.split(' ').map(w => w[0]).join('').slice(0,2)}
                </div>
              </div>

              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{e.role}</div>
                    <div className="exp-company">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {e.company} · {e.location}
                    </div>
                  </div>
                  <div className="exp-duration">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {e.duration}
                  </div>
                </div>

                <p className="exp-desc">{e.description}</p>

                <div className="exp-tech">
                  {e.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
