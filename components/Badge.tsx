
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="inline-block border border-gray-200 bg-white text-gray-500 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-tight group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
      {children}
    </span>
  );
};

export default Badge;
