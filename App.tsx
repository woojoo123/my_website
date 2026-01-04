
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectsList from './pages/ProjectsList';
import ProjectDetail from './pages/ProjectDetail';
import NotesList from './pages/NotesList';
import NoteDetail from './pages/NoteDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsList />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="notes" element={<NotesList />} />
          <Route path="notes/:slug" element={<NoteDetail />} />
          <Route path="about" element={<About />} />
          {/* Redirect old resume path to about */}
          <Route path="resume" element={<Navigate to="/about" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
