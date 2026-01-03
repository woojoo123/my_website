
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const navItems = [
    { label: '홈', path: '/' },
    { label: '프로젝트', path: '/projects' },
    { label: '기록', path: '/notes' },
    { label: '소개', path: '/about' },
    { label: '연락', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-[960px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start leading-none group">
          <span className="text-xl font-black tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors">
            sqaxe1
          </span>
          <span className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-widest hidden sm:block">
            Portfolio & Notes
          </span>
        </Link>
        <nav className="flex gap-4 sm:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-all hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
