import React from 'react';
export const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 200 50"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Winform Modernizer Logo"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(217.2 91.2% 59.8%)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(24.6 95% 53.1%)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="0" y="10" width="30" height="30" rx="4" fill="url(#logoGradient)" />
    <rect x="8" y="18" width="14" height="4" fill="white" />
    <rect x="8" y="28" width="14" height="4" fill="white" />
    <text
      x="40"
      y="35"
      fontFamily="'Cal Sans', 'Inter', sans-serif"
      fontSize="28"
      fontWeight="600"
      fill="hsl(var(--foreground))"
      className="dark:fill-white"
    >
      Winform Modernizer
    </text>
  </svg>
);