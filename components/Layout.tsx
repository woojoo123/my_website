
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-[960px] w-full mx-auto px-6 pt-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
