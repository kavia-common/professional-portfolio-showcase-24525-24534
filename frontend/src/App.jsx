import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import DownloadHerePage from './pages/DownloadHerePage';
import TakeThisJobsPage from './pages/TakeThisJobsPage';
import JobsDetailOpenPage from './pages/JobsDetailOpenPage';
import ProfilePage from './pages/ProfilePage';

/**
 * PUBLIC_INTERFACE
 * App
 * Root component that sets up routing and renders the global NavBar.
 */
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download-here" element={<DownloadHerePage />} />
        <Route path="/take-this-jobs" element={<TakeThisJobsPage />} />
        <Route path="/jobs-detail-open" element={<JobsDetailOpenPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
