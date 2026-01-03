
import React, { useEffect } from 'react';
import { getAllNotes } from '../lib/content';
import Card from '../components/Card';

const NotesList: React.FC = () => {
  useEffect(() => {
    document.title = '기록 | Portfolio';
  }, []);

  const notes = getAllNotes();

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-3xl font-black mb-4 text-gray-900 tracking-tight">기록</h1>
        <p className="text-gray-600">기술적인 문제 해결 과정과 새롭게 배운 지식들을 정리합니다.</p>
      </div>
      
      <div className="space-y-6">
        {notes.map((note) => (
          <Card
            key={note.slug}
            title={note.title}
            summary={note.summary}
            date={note.date}
            tags={note.tags}
            link={`/notes/${note.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
