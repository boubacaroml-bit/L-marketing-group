import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimension = size === 'sm' ? 60 : size === 'lg' ? 160 : 100;
  const fontSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';
  const lSize = size === 'sm' ? 'text-2xl' : size === 'lg' ? 'text-6xl' : 'text-4xl';
  
  return (
    <div className={`rounded-full border border-black flex items-center justify-center relative bg-transparent ${className}`} style={{ width: dimension, height: dimension }}>
      <div className="flex flex-col items-start justify-center leading-none pl-1">
        <span className={`font-serif ${lSize} font-bold absolute left-[25%] top-[50%] -translate-y-[50%]`}>L</span>
        <div className={`flex flex-col ml-4 ${fontSize} tracking-widest uppercase font-sans font-semibold pl-2 border-l border-black h-8 justify-center`}>
          <span>Marketing</span>
          <span>Group</span>
        </div>
      </div>
    </div>
  );
};