import React, { useEffect, useRef, useState } from 'react';
import './GooeyNav.css';

const GooeyNav = ({ items, initialActiveIndex = 0 }) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(() => {
    if (typeof window === 'undefined') return initialActiveIndex;
    const index = items.findIndex((item) => item.href === window.location.hash);
    return index >= 0 ? index : initialActiveIndex;
  });

  const burst = (element) => {
    const rect = element.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const shell = containerRef.current.querySelector('.gooey-active');
    if (!shell) return;
    shell.style.left = `${rect.left - containerRect.left}px`;
    shell.style.top = `${rect.top - containerRect.top}px`;
    shell.style.width = `${rect.width}px`;
    shell.style.height = `${rect.height}px`;
    shell.classList.remove('is-bursting');
    void shell.offsetWidth;
    shell.classList.add('is-bursting');
  };

  useEffect(() => {
    const sync = () => {
      const index = items.findIndex((item) => item.href === window.location.hash);
      if (index >= 0) setActiveIndex(index);
    };
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [items]);

  useEffect(() => {
    const active = navRef.current?.querySelectorAll('li')[activeIndex];
    if (active) burst(active);
  }, [activeIndex]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <ul ref={navRef}>
        {items.map((item, index) => (
          <li className={activeIndex === index ? 'active' : ''} key={item.label}>
            <a
              href={item.href}
              onClick={() => {
                setActiveIndex(index);
                burst(navRef.current.querySelectorAll('li')[index]);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <span className="gooey-active" aria-hidden="true">
        <span className="gooey-particles" />
      </span>
    </div>
  );
};

export default GooeyNav;
