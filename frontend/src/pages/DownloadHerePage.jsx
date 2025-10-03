import React from 'react';
import '../styles/download-here-901-4.css';
import Banner from '../components/downloadHere/Banner';

/**
 * PUBLIC_INTERFACE
 * DownloadHerePage
 * This page renders the "Download here" screen converted from static HTML/CSS.
 *
 * Route: /download-here
 * How to access: Start the dev server (npm start) and navigate to http://localhost:3000/download-here
 */
function DownloadHerePage() {
  return (
    <div className="artboard-wrap" role="main" aria-label="Download here page">
      <div className="screen download-here-901-4" role="document" aria-label="Download here">
        <Banner />
      </div>
    </div>
  );
}

export default DownloadHerePage;
