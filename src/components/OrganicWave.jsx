'use client';

import React from 'react';

export default function OrganicWave({ fill = '#FAF6EE', flip = false }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-8 sm:h-12 md:h-16"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
