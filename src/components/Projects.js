import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Projects.css';
import { projects } from '../portfolioData';

function MediaGallery({ project }) {
  const [mediaIdx, setMediaIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);

  const images = project.images || [];
  const video = project.video;
  const allMedia = [...images, ...(video ? [{ type: 'video', src: video }] : [])];

  if (allMedia.length === 0) {
    // Placeholder gradient card
    return (
      <div className="media-placeholder" style={{ '--c': project.color }}>
        <div className="placeholder-content">
          <div className="ph-circles">
            <div className="ph-c1" /><div className="ph-c2" /><div className="ph-c3" />
          </div>
          <div className="placeholder-title">{project.title.split(' — ')[0]}</div>
          <div className="placeholder-type">{project.type}</div>
        </div>
      </div>
    );
  }

  const current = allMedia[mediaIdx];
  const isVideo = current && current.type === 'video';

  const openModal = () => {
    setModalIdx(mediaIdx);
    setIsModalOpen(true);
    // Prevent background scrolling when modal is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
    // Restore background scrolling
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  const modalContent = allMedia[modalIdx];

  return (
    <div className="media-gallery">
      <div className="media-main">
        {isVideo
          ? <video src={current.src} controls className="media-video" />
          : <img 
              src={typeof current === 'string' ? current : current.src} 
              alt={project.title} 
              className="media-img" 
              onClick={openModal}
            />
        }
      </div>
      {allMedia.length > 1 && (
        <div className="media-thumbs">
          {allMedia.map((m, i) => (
            <button key={i} className={`thumb ${mediaIdx === i ? 'active' : ''}`} onClick={() => setMediaIdx(i)}>
              {m.type === 'video'
                ? <span className="thumb-video-icon">▶</span>
                : <img src={typeof m === 'string' ? m : m.src} alt="" />
              }
            </button>
          ))}
        </div>
      )}

      {/* Modal / Popup for all images (Rendered via Portal to escape card overflow) */}
      {isModalOpen && typeof document !== 'undefined' && createPortal(
        <div className="media-modal-overlay" onClick={closeModal}>
          <button className="media-modal-close" onClick={closeModal}>×</button>
          
          <div className="media-modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-main-display">
              {modalContent.type === 'video' ? (
                <video src={modalContent.src} controls autoPlay className="modal-main-media" />
              ) : (
                <img 
                  src={typeof modalContent === 'string' ? modalContent : modalContent.src} 
                  alt={project.title} 
                  className="modal-main-media" 
                />
              )}
            </div>

            {/* Modal Thumbnail Gallery showing ALL images/videos */}
            {allMedia.length > 1 && (
              <div className="modal-thumbs-container">
                {allMedia.map((m, i) => (
                  <button 
                    key={i} 
                    className={`modal-thumb ${modalIdx === i ? 'active' : ''}`} 
                    onClick={() => setModalIdx(i)}
                  >
                    {m.type === 'video'
                      ? <span className="thumb-video-icon" style={{color: '#fff'}}>▶</span>
                      : <img src={typeof m === 'string' ? m : m.src} alt="" />
                    }
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`} style={{ '--card-color': project.color }}>
      <div className="card-media">
        <MediaGallery project={project} />
        <div className="card-type-badge">{project.type}</div>
      </div>

      <div className="card-body">
        <div className="card-top">
          <div className="card-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="icon-link" title="GitHub">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="icon-link" title="Live Demo">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            )}
          </div>
          {project.featured && <span className="featured-badge">Featured</span>}
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{expanded ? project.longDescription || project.description : project.description}</p>

        {project.longDescription && (
          <button className="read-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show less ↑' : 'Read more ↓'}
          </button>
        )}

        <div className="card-tech">
          {project.tech.map(t => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const types = ['All', ...new Set(projects.map(p => p.type))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03 — Projects</span>
          <h2 className="section-title">Things I've built</h2>
        </div>

        <div className="project-filters">
          {types.map(t => (
            <button key={t} className={`filter-btn ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>

        <div className="projects-more">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}