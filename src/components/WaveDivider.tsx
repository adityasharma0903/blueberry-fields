import React from 'react';

interface WaveDividerProps {
  position?: 'top' | 'bottom';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ 
  position = 'bottom', 
  color = 'white',
  className = '' 
}) => {
  const getColor = () => {
    switch (color) {
      case 'primary': return '%2300a693'; // primary color in URL encoding
      case 'secondary': return '%23fbbf24'; // secondary color in URL encoding
      default: return '%23ffffff'; // white
    }
  };

  const wavePath = position === 'top' 
    ? "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
    : "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";

  const svgData = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='${wavePath}' fill='${getColor()}'%3E%3C/path%3E%3C/svg%3E`;

const waveStyle = position === 'top' 
  ? { 
      top: '-1px',
      backgroundImage: `url("${svgData}")`
      // no transform here → keeps straight edge at bottom, curve above
    }
  : { 
      bottom: '-1px',
      backgroundImage: `url("${svgData}")`,
      transform: 'rotate(180deg)' // flip vertically so curve points downward
    };


  return (
    <div 
      className={`absolute left-0 right-0 h-16 md:h-20 bg-no-repeat bg-cover ${className}`}
      style={waveStyle}
    />
  );
};

export default WaveDivider;