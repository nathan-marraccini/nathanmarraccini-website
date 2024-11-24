// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bio from './components/Bio';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Single layout with Bio on the right and Resume on the left */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-layout">
                <div className="bio-section">
                  <Bio />
                </div>
                <div className="resume-section">
                  <Resume />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
