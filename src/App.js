import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rsvp from './Pages/Rsvp';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      {/* Nav Bar */}
      <nav style={{position: 'absolute'}} className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand forum-font" href="/">CG</a>
          <button
            className="navbar-toggler btn-custom"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link forum-font" href="/rsvp">RSVP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link forum-font" href="#wishing-well">Wishing Well</a>
              </li>
              <li className="nav-item">
                <a className="nav-link forum-font" href="/#faqs">FAQS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Switch and Route setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<Rsvp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
