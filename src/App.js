import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrocImage from '../src/assets/images/ConnorandChlesea_0029.jpg';
import BeachThinkingImage from '../src/assets/images/ConnorandChelsea_0179.jpg';
import DownArrow from '../src/assets/images/arrow.png';

function App() {
  return (
    <div>
      <div className='home-bg'>
        {/* Nav Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand forum-font" href="#">CG</a>
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
                  <a className="nav-link forum-font" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link forum-font" href="#our-story">Our Story</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link forum-font" href="#wishing-well">Wishing Well</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link forum-font" href="#wishing-well">RSVP</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Home Section */}
        <header id="home" className="text-white text-center">
          <div>
            <p>We're Getting Married!</p>
            <h1>Connor & Chelsea</h1>
            <a href="#our-story" className="mt-4 btn btn-light">Read Our Story</a>
          </div>
        </header>
      </div>

      {/* Our Story Section */}
      <section id="our-story" className="sand-dark-bg py-5 text-center">
        <div className="container">
          <h2>Our Story</h2>
          <p className="lead">We met on Instagram, of all places. I slid into Chelsea’s DMs, quickly figured out she likes the movie Hot Rod, and next thing you know, we’re at Sushi Train for our first date. I was a bit nervous at first, but we instantly hit it off. The second date in Caloundra? Yeah, that’s when I realized I was falling for her. But it wasn’t until we were in Minecraft, building stuff together, that Chelsea casually dropped "I love you". I wasn’t expecting it, but I was pretty stoked.

From there, it was pretty much non-stop fun. She drags me to every theater show in town, and I make her watch Fight Club. And, yeah, I come home from Jiu-Jitsu with bruises, but that’s just part of the deal. We have our quirks, but it all just works. And then, on November 6, 2024, with the sun setting over Palm Cove, I asked her to marry me. The best decision I’ve ever made.

</p>
        </div>
      </section>

      {/* Ceremony Section */}
      <section id="ceremony" className="py-5 sand-light-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Ceremony</h2>
              <p>We are thrilled to invite you to witness our special day as we say “I Do.”</p>
              <p><strong>Date:</strong> [Insert Date]</p>
              <p><strong>Time:</strong> [Insert Time]</p>
              <p><strong>Location:</strong> [Insert Ceremony Location]</p>
            </div>
            <div className="col-md-6">
              <img src={BeachThinkingImage} alt="Ceremony" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Reception Section */}
      <section id="reception" className="sand-dark-bg py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <h2>Reception</h2>
              <p>Let’s celebrate with love, laughter, and dancing at our reception.</p>
              <p><strong>Date:</strong> [Insert Date]</p>
              <p><strong>Time:</strong> [Insert Time]</p>
              <p><strong>Location:</strong> [Insert Reception Location]</p>
            </div>
            <div className="col-md-6 order-md-1">
              <img src={CrocImage} alt="Reception" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Guest Attire */}
      <section id="ceremony" className="sand-light-bg py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Guest Attire</h2>
              <p>We are thrilled to invite you to witness our special day as we say “I Do.”</p>
              <p><strong>Dress Code:</strong> [Dress Code]</p>
              <p><strong>Theme:</strong> [Theme]</p>
              <p><strong>Color Pallet:</strong> [Insert Color Pallet Ladies / Gentlemen]</p>
            </div>
            <div className="col-md-6">
              <img src={BeachThinkingImage} alt="Ceremony" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="reception" className="sand-dark-bg py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <h2>FAQs</h2>
              <p>Let’s celebrate with love, laughter, and dancing at our reception.</p>
              <p><strong>Date:</strong> [Insert Date]</p>
              <p><strong>Time:</strong> [Insert Time]</p>
              <p><strong>Location:</strong> [Insert Reception Location]</p>
            </div>
            <div className="col-md-6 order-md-1">
              <img src={CrocImage} alt="Reception" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>


      {/* RSVP Section */}
      <footer id="rsvp" className="sand-light-bg text-white text-center py-5">
        <div className="mt-5 container">
          <h2>RSVP</h2>
          <p>We would be honored by your presence. Please RSVP below</p>
          <a href="/rsvp" className="btn btn-light">RSVP Now</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
