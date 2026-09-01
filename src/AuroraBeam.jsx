import React from 'react';
import './AuroraBeam.css';

export default function AuroraBeam() {
  return (
    <div className="aurora-beam" aria-hidden="true">
      <div className="aurora-beam__sheet aurora-beam__sheet--one" />
      <div className="aurora-beam__sheet aurora-beam__sheet--two" />
      <div className="aurora-beam__sheet aurora-beam__sheet--three" />
      <div className="aurora-beam__glow" />
      <div className="aurora-beam__grain" />
    </div>
  );
}
