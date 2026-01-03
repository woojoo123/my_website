
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="max-w-[960px] mx-auto px-6 py-12 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} sqaxe1. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
