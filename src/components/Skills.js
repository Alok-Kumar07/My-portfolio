import React, { useState } from 'react';
import './Skills.css';
import { skills } from '../portfolioData';

const categoryIcons = {
  'Frontend': '🎨',
  'Backend': '⚙️',
  'Database': '🗄️',
  'DevOps & Tools': '🛠️',
  'Mobile': '📱',
  'Other': '✨',
};

export default function Skills() {
  const [active, setActive] = useState(Object.keys(skills)[0]);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02 — Skills</span>
          <h2 className="section-title">Technologies I work with</h2>
        </div>

        <div className="skills-layout">
          <div className="skill-tabs">
            {Object.keys(skills).map(cat => (
              <button
                key={cat}
                className={`skill-tab ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                <span className="tab-icon">{categoryIcons[cat] || '💡'}</span>
                {cat}
                <span className="tab-count">{skills[cat].length}</span>
              </button>
            ))}
          </div>

          <div className="skills-panel">
            <div className="panel-header">
              <span className="panel-icon">{categoryIcons[active]}</span>
              <div>
                <div className="panel-title">{active}</div>
                <div className="panel-sub">{skills[active].length} technologies</div>
              </div>
            </div>
            <div className="skill-tags">
              {skills[active].map((skill, i) => (
                <div key={skill} className="skill-tag" style={{ animationDelay: `${i * 0.05}s` }}>
                  <span className="skill-dot" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="all-skills-cloud">
          <div className="cloud-label">All Technologies at a glance</div>
          <div className="cloud-tags">
            {Object.values(skills).flat().map((s, i) => (
              <span key={s + i} className="cloud-tag" style={{ '--delay': `${i * 0.02}s` }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
