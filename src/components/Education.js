import React from 'react';
import './Education.css';
import { education } from '../portfolioData';

export default function Education() {
  return (
    <section id="education" className="section edu-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">04 — Education</span>
          <h2 className="section-title">Academic background</h2>
        </div>

        <div className="edu-timeline">
          {education.map((edu, i) => (
            <div key={i} className="edu-card">
              <div className="edu-marker">
                <div className="marker-dot" />
                {i < education.length - 1 && <div className="marker-line" />}
              </div>

              <div className="edu-content">
                <div className="edu-header">
                  <div>
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-institution">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      {edu.institution}
                    </div>
                    <div className="edu-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {edu.location}
                    </div>
                  </div>

                  <div className="edu-meta">
                    <div className="edu-year">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {edu.year}
                    </div>
                    <div className="edu-grade">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      {edu.grade}
                    </div>
                  </div>
                </div>

                <div className="edu-highlights">
                  {edu.highlights.map(h => (
                    <span key={h} className="highlight-tag">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
