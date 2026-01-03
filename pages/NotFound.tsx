
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="py-24 text-center">
      <h1 className="text-6xl font-black text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">페이지를 찾을 수 없습니다</h2>
      <p className="text-gray-600 mb-12">
        찾으시는 페이지가 존재하지 않거나 다른 주소로 이동되었습니다.
      </p>
      <Link 
        to="/" 
        className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;
