import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { personal } from '../portfolioData';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          {personal.name.split(' ')[0]}
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} className={active === l.href ? 'active' : ''} onClick={() => setActive(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={personal.resumeUrl} download className="nav-resume-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          Resume
        </a>

        <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="menu">
          <span/><span/><span/>
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href={personal.resumeUrl} download className="mobile-resume">Download Resume</a>
      </div>
    </nav>
  );
}
