import React from 'react';

export default function NasCloudLogo({ size = 28, className, style }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" 
      width={size} 
      height={size} 
      className={className}
      style={{ 
        display: 'inline-block', 
        verticalAlign: 'middle',
        overflow: 'visible',
        ...style 
      }}
    >
      <defs>
        {/* Glow effect for the N chevron */}
        <filter id="nGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur"/>
          <feColorMatrix in="blur" type="matrix"
            values="0 0 0 0 0.66
                    0 0 0 0 0.85
                    0 0 0 0 0.31
                    0 0 0 0 0.5 0" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* N Chevron - Bright Lime Green with Glow */}
      <polyline points="90,380 185,160 280,380 320,130"
                fill="none"
                stroke="#A8D84E"
                strokeWidth="36"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#nGlow)"/>
                
      {/* C Arc - Inherits text color dynamically */}
      <path d="M 389,172 A 120,120 0 1,0 389,368"
            fill="none"
            stroke="currentColor"
            strokeWidth="36"
            strokeLinecap="round"/>
    </svg>
  );
}
