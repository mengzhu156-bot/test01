import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './AccordionGallery.css';

export default function AccordionGallery({ items, defaultIndex = 0, onPanelClick }) {
  const rootRef = useRef(null);
  const panels = useRef([]);
  const [active, setActive] = useState(Math.min(defaultIndex, items.length - 1));

  const layout = useCallback((animate = true) => {
    const root = rootRef.current;
    if (!root) return;
    const expanded = Math.min(0.54, Math.max(0.32, 1 / items.length + 0.2));
    const grow = (expanded * (items.length - 1)) / (1 - expanded);
    panels.current.forEach((panel, index) => {
      if (!panel) return;
      gsap.to(panel, {
        flexGrow: index === active ? grow : 1,
        rotateY: index === active ? 0 : index < active ? 5 : -5,
        duration: animate ? 0.65 : 0,
        ease: 'power3.out',
        overwrite: true,
      });
      gsap.to(panel.querySelector('.ag-panel__media'), {
        filter: index === active ? 'grayscale(0)' : 'grayscale(1)',
        scale: index === active ? 1.02 : 1,
        duration: animate ? 0.65 : 0,
        ease: 'power3.out',
        overwrite: true,
      });
    });
  }, [active, items.length]);

  useEffect(() => {
    layout(false);
    const observer = new ResizeObserver(() => layout(false));
    if (rootRef.current) observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, [layout]);

  return (
    <div className="accordion-gallery" ref={rootRef} role="list" aria-label="精选作品">
      {items.map((item, index) => (
        <button
          className={`ag-panel${active === index ? ' ag-panel--active' : ''}`}
          key={item.label}
          ref={(element) => { panels.current[index] = element; }}
          type="button"
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => onPanelClick?.(item, index)}
          aria-label={item.video ? `播放 ${item.label}` : item.label}
        >
          <span className="ag-panel__frame">
            <span className="ag-panel__media">
              {item.video ? (
                <video src={item.video} muted loop autoPlay playsInline preload="metadata" aria-label={item.label} />
              ) : (
                <img src={item.image} alt={item.label} />
              )}
            </span>
            <span className="ag-panel__overlay" />
          </span>
          <span className="ag-panel__label">
            <span className="ag-panel__bar" />
            <span className="ag-panel__text">{item.label}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
