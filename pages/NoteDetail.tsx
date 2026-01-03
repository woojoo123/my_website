
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getNoteBySlug } from '../lib/content';
import Badge from '../components/Badge';
import NotFound from './NotFound';

const NoteDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const note = slug ? getNoteBySlug(slug) : null;

  useEffect(() => {
    if (note) {
      document.title = `${note.meta.title} | Notes`;
    }
  }, [note]);

  if (!note) return <NotFound />;

  const { meta, content } = note;

  return (
    <article className="max-w-3xl">
      <Link to="/notes" className="text-sm text-gray-500 hover:text-blue-600 mb-8 inline-block font-semibold">
        &larr; 기록 목록으로
      </Link>
      
      <header className="mb-12">
        <div className="flex items-center gap-3 text-sm text-gray-400 font-mono mb-4">
          <time dateTime={meta.date}>{meta.date}</time>
          <span className="text-gray-200">/</span>
          <span>Technical Note</span>
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">{meta.title}</h1>
        <div className="flex flex-wrap gap-2">
          {meta.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
        </div>
      </header>

      <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default NoteDetail;
