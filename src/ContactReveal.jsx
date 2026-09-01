import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const HEADLINE = '让每一个创意，从清晰的美术方向开始。';

function RevealChar({ char, index, progress, reducedMotion }) {
  const start = Math.min(index * 0.018, 0.56);
  const end = Math.min(start + 0.22, 0.94);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [reducedMotion ? 0 : 26, 0]);
  const rotate = useTransform(progress, [start, end], [reducedMotion ? 0 : (index % 2 ? 3 : -3), 0]);

  return (
    <motion.span className="contact-reveal__char" style={{ opacity: reducedMotion ? 1 : opacity, y: reducedMotion ? 0 : y, rotate: reducedMotion ? 0 : rotate }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
}

export default function ContactReveal() {
  const wrapperRef = React.useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start 0.92', 'end 0.25'],
  });

  return (
    <div ref={wrapperRef} className="contact-reveal" aria-label={HEADLINE}>
      <motion.h2>
        {HEADLINE.split('').map((char, index) => (
          <RevealChar
            key={`${char}-${index}`}
            char={char}
            index={index}
            progress={scrollYProgress}
            reducedMotion={Boolean(reducedMotion)}
          />
        ))}
      </motion.h2>
    </div>
  );
}
