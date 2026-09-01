import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './HeroCarousel.css';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function HeroCarousel({
  items,
  defaultIndex = 0,
  autoplay = false,
  autoplayDelay = 4200,
  archiveLabel = 'Visual Archive',
  categoryLabel = 'ARTWORKS / MATERIAL STUDIES',
  ariaLabel = '视觉作品轮播',
}) {
  const [index, setIndex] = React.useState(() => clamp(defaultIndex, 0, Math.max(0, items.length - 1)));
  const [paused, setPaused] = React.useState(false);
  const reducedMotion = useReducedMotion();
  const active = items[index];
  const last = items.length - 1;

  const go = React.useCallback((next) => {
    setIndex((current) => clamp(typeof next === 'function' ? next(current) : next, 0, last));
  }, [last]);

  React.useEffect(() => {
    if (!autoplay || paused || items.length < 2) return undefined;
    const timer = window.setTimeout(() => go((current) => current === last ? 0 : current + 1), autoplayDelay);
    return () => window.clearTimeout(timer);
  }, [autoplay, autoplayDelay, go, index, items.length, last, paused]);

  if (!active) return null;

  return (
    <section
      className="hero-carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') go((current) => current === 0 ? last : current - 1);
        if (event.key === 'ArrowRight') go((current) => current === last ? 0 : current + 1);
      }}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={active.image}
          className="hero-carousel__backdrop"
          src={active.image}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.65, ease: 'easeOut' }}
        />
      </AnimatePresence>
      <div className="hero-carousel__wash" aria-hidden="true" />
      <div className="hero-carousel__topline">
        <span>{archiveLabel}</span>
        <span>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
      </div>
      <div className="hero-carousel__intro">
        <p>{categoryLabel}</p>
        <h3>{active.title}</h3>
        <span>{active.caption}</span>
      </div>
      <div className="hero-carousel__stage" role="group" aria-roledescription="carousel" aria-label="作品图片">
        <motion.div
          className="hero-carousel__track"
          animate={{ x: `calc(-${index} * (var(--hero-card-width) + var(--hero-card-gap)))` }}
          transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 30 }}
          drag="x"
          dragConstraints={{ left: -Math.max(0, last * 250), right: 0 }}
          dragElastic={0.08}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) < 36) return;
            go((current) => info.offset.x < 0 ? (current === last ? 0 : current + 1) : (current === 0 ? last : current - 1));
          }}
        >
          {items.map((item, itemIndex) => (
            <motion.button
              type="button"
              className={`hero-carousel__card${itemIndex === index ? ' is-active' : ''}`}
              key={item.id ?? item.image}
              aria-label={`查看 ${item.title}`}
              aria-current={itemIndex === index}
              onClick={() => go(itemIndex)}
              animate={{ height: itemIndex === index ? 'var(--hero-card-active-height)' : 'var(--hero-card-height)' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.55, ease: 'easeOut' }}
            >
              <img src={item.image} alt={item.title} draggable="false" />
              <span className="hero-carousel__card-index">{String(itemIndex + 1).padStart(2, '0')}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <div className="hero-carousel__controls">
        <button type="button" onClick={() => go((current) => current === 0 ? last : current - 1)} aria-label="上一张作品">←</button>
        <div className="hero-carousel__dots" role="tablist" aria-label="选择作品">
          {items.map((item, itemIndex) => (
            <button
              type="button"
              role="tab"
              aria-selected={itemIndex === index}
              aria-label={`第 ${itemIndex + 1} 张：${item.title}`}
              className={itemIndex === index ? 'is-active' : ''}
              key={item.id ?? item.image}
              onClick={() => go(itemIndex)}
            />
          ))}
        </div>
        <button type="button" onClick={() => go((current) => current === last ? 0 : current + 1)} aria-label="下一张作品">→</button>
      </div>
    </section>
  );
}
