import React, { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };
    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', move);
    animate();

    const addHover = () => {
      document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', () => { ring.current?.classList.add('hovered'); });
        el.addEventListener('mouseleave', () => { ring.current?.classList.remove('hovered'); });
      });
    };
    setTimeout(addHover, 500);

    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}
