import React from 'react';
import './Footer.css';
import { personal } from '../portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="#hero" className="footer-logo">
            <span className="logo-bracket">&lt;</span>{personal.name.split(' ')[0]}<span className="logo-bracket"> /&gt;</span>
          </a>
          <p className="footer-sub">
            Designed & built by {personal.name}
          </p>
        </div>
        <div className="footer-right">
          <span className="footer-copy">© {new Date().getFullYear()} All rights reserved</span>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href={personal.resumeUrl} download>Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
