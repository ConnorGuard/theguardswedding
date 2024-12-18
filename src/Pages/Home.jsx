import Sophie from '../assets/images/Sophie.jpg';
import Kirra from '../assets/images/Kirra.jpg';
import Nykita from '../assets/images/Nykita.jpg';
import Kayla from '../assets/images/Kayla.jpg';
import Joel from '../assets/images/Joel.jpg';
import Jordan from '../assets/images/Jordan.jpg';
import Noah from '../assets/images/Noah.jpg';
import Zach from '../assets/images/Zach.jpg';
import RingBoy from '../assets/images/RingBoy.jpg';
import Maddi from '../assets/images/Maddi.jpg';
import Silver from '../assets/images/Silver.jpg';
import Gold from '../assets/images/Gold.jpg';
import TheRefinery from '../assets/images/TheRefinery.jpg';
import FaqsSection from '../Components/FaqsSection';

const Home = () => {
    const scrollToSection = (id) => { 
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
      <div>
        {/* Home Section */}
        <div className='home-bg'>
            <header id="home" className="text-white text-center">
                <div>
                    <p>We're Getting Married!</p>
                    <h1>Connor & Chelsea</h1>
                    <button onClick={() => scrollToSection("our-story")} className="mt-4 btn btn-light">Read Our Story</button>
                </div>
            </header>
        </div>

        {/* Our Story Section */}
        <section id="our-story" className="sand-light-bg py-5 text-center">
            <div className="container">
            <h2>Our Story</h2>
                <p className="lead">They met on Instagram, of all places. Connor slid into Chelsea’s DMs, quickly discovering her love for the movie Hot Rod. 
                    Soon after, they were at Sushi Train for their first date. Both were nervous, but they instantly connected. By the second date in Caloundra, 
                    Connor realized he was falling for her. It wasn’t until they were building together in Minecraft that Chelsea casually dropped, "I love you." 
                    The moment caught him off guard (pun intended), but he was thrilled.
                    From there, their relationship was filled with adventure. 
                    She took him to every theatre show in town, while he drags her to watch the UFC.
                    Their quirks complemented each other perfectly. On November 6, 2024, with the sun setting over Palm Cove, he asked her to marry him. 
                    The best decision Connor has ever made.
                </p>
            </div>
        </section>


        {/* Ceremony & Reception Section */}
        <section id="ceremony" className="py-5 sand-dark-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Ceremony & Reception</h2>
                        <p style={{maxWidth: '600px' }}>We’re so excited to invite you to join us on our special day as we exchange vows and celebrate this milestone with good food, great music, and some dancing. We’d love for you to be part of the joy and memories!</p>
                        <p><strong>Date</strong>
                        <br/> Thursday, 19th June 2025</p>
                        <p><strong>Time</strong>
                        <br/>3:00pm - Arrival
                        <br/>3:30pm - Ceremony Begins
                        <br/>10:00pm - Finish
                        </p>
                        <p><strong>Location</strong>
                        <br/>The Refinery, 12 Austin St, Newstead QLD 4006</p>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <img src={TheRefinery} alt="Reception" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </section>

        {/* Guest Attire */}
        <section id="guest-attire" className="sand-light-bg py-5">
            <div className="container">
            <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-md-6">
                    <h2>Guest Attire</h2>
                    <p>Wear whats comfortable & look your best!</p>
                    <p><strong>Dress Code</strong><br/>Formal / Cocktail.</p>
                    <p><strong>Ladies</strong><br/>Formal gown or a chic cocktail dress, or for a slightly more casual look, a jumpsuit or a stylish midi/maxi dress paired with dressy flats or sandals.</p>
                    <p><strong>Gentlemen</strong><br/>Suit with a tie or bow tie and dress shoes, or opt for a slightly more casual look with a blazer / dress shirt.</p>
                </div>

                {/* Color Palette Section */}
                <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                        <h3>Color Palette Inspo</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="color-swatch" style={{ backgroundColor: "#000000" }}></div>
                        <div className="color-swatch" style={{ backgroundColor: "#5c414a" }}></div>
                        <div className="color-swatch" style={{ backgroundColor: "#b59076" }}></div>
                        <div className="color-swatch" style={{ backgroundColor: "#ddb6aa" }}></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="color-swatch">
                            <img src={Gold} alt="Bridesmaid 4" className="img-fluid rounded-circle" />
                        </div>
                        <div className="color-swatch">
                            <img src={Silver} alt="Bridesmaid 4" className="img-fluid rounded-circle" />
                        </div>
                        <div className="color-swatch" style={{ backgroundColor: "#c4c6b5" }}></div>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                        <p>This is just a suggestion 😊</p>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <FaqsSection />

        {/* Bridal Party */}
        <section id="bridal-party" className="py-5 sand-light-bg text-center">
            <div className="container">
            <h2 className="mb-4">Wedding Party</h2>
            <div className="row justify-content-center gx-6">
                {/* Bridesmaids */}
                <div className="col-lg-5">
                    <h3 className="mb-3">Bridesmaids</h3>
                    <div className="row">
                        <div className="col-6 col-md-3 mb-4">
                            <div className="photo-wrapper">
                                <img src={Kayla} alt="Bridesmaid 4" className="img-fluid rounded-circle" />
                            </div>
                            <p className="mt-2">Kayla<br/> <b>Maid of honour</b></p>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="photo-wrapper">
                                <img src={Nykita} alt="Bridesmaid 3" className="img-fluid rounded-circle" />
                            </div>
                            <p className="mt-2">Nykita</p>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="photo-wrapper">
                                <img src={Sophie} alt="Bridesmaid 1" className="img-fluid rounded-circle" />
                            </div>
                            <p className="mt-2">Sophie</p>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="photo-wrapper">
                                <img src={Kirra} alt="Bridesmaid 2" className="img-fluid rounded-circle" />
                            </div>
                            <p className="mt-2">Kirra</p>
                        </div>
                    </div>
                </div>

                {/* Groomsmen */}
                <div className="col-lg-5">
                <h3 className="mb-3">Groomsmen</h3>
                <div className="row">
                    <div className="col-6 col-md-3 mb-4">
                        <div className="photo-wrapper">
                            <img src={Noah} alt="Groomsman 1" className="img-fluid rounded-circle" />
                        </div>
                        <p className="mt-2">Noah <br/> <b>Best Man</b></p>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                    <div className="photo-wrapper">
                        <img src={Joel} alt="Groomsman 2" className="img-fluid rounded-circle" />
                    </div>
                    <p className="mt-2">Joel</p>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                    <div className="photo-wrapper">
                        <img src={Zach} alt="Groomsman 3" className="img-fluid rounded-circle" />
                    </div>
                    <p className="mt-2">Zach</p>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                    <div className="photo-wrapper">
                        <img src={Jordan} alt="Groomsman 4" className="img-fluid rounded-circle" />
                    </div>
                    <p className="mt-2">Jordan</p>
                    </div>
                </div>
                </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="row justify-content-center">
                        <div className="col-6 col-md-3 mb-4">
                            <div className="photo-wrapper">
                            <img src={Maddi} alt="Bridesmaid 4" className="img-fluid rounded-circle" />
                            </div>
                            <p className="mt-2">Maddi<br /> <b>MC</b></p>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <div className="photo-wrapper">
                            <img src={RingBoy} alt="Groomsman 1" className="img-fluid rounded-circle" />
                            </div>
                            <p className="mt-2">Zephyr <br /> <b>Ring Boy</b></p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* RSVP Section */}
        <footer id="rsvp" className="sand-light-bg text-white text-center py-5">
            <div className="mt-5 container">
                <h2>RSVP</h2>
                <p>We would be honored by your presence. Please RSVP below.</p>
                <a href="/#rsvp" className="btn btn-light">RSVP Now</a>
            </div>
        </footer>
      </div>
    );
  };

  export default Home;