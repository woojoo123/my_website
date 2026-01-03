
import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';

interface CardProps {
  title: string;
  summary: string;
  date?: string;
  tags?: string[];
  link: string;
  type?: 'project' | 'note';
}

const Card: React.FC<CardProps> = ({ title, summary, date, tags, link, type = 'note' }) => {
  return (
    <Link to={link} className="block group">
      <div className="card-editor h-full flex flex-col">
        <div className="card-header-dots">
          <div className="dot dot-red"></div>
          <div className="dot dot-amber"></div>
          <div className="dot dot-green"></div>
          <div className="ml-auto text-[10px] font-mono text-gray-400 uppercase tracking-widest px-2">
            {type}
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="mb-2 flex justify-between items-start gap-4">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
              {title}
            </h3>
            {date && <span className="text-[11px] font-mono text-gray-400 shrink-0 mt-1">{date}</span>}
          </div>
          <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
            {summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
