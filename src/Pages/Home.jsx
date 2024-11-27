import CrocImage from '../assets/images/ConnorandChlesea_0029.jpg';
import Sophie from '../assets/images/Sophie.jpg';
import Kirra from '../assets/images/Kirra.jpg';
import Nykita from '../assets/images/Nykita.jpg';
import Kayla from '../assets/images/Kayla.jpg';
import Joel from '../assets/images/Joel.jpg';
import Jordan from '../assets/images/Jordan.jpg';
import Noah from '../assets/images/Noah.jpg';
import Zach from '../assets/images/Zach.jpg';

const Home = () => {
    return (
      <div>
        {/* Home Section */}
        <div className='home-bg'>
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
                <p className="lead">We met on Instagram, of all places. 
                I slid into Chelsea’s DMs, quickly figured out she likes the movie Hot Rod, and next thing you know, we’re at Sushi Train for our first date. 
                I was a bit nervous at first, but we instantly hit it off. The second date in Caloundra? Yeah, that’s when I realized I was falling for her. 
                But it wasn’t until we were in Minecraft, building stuff together, that Chelsea casually dropped "I love you". I wasn’t expecting it, but I was pretty stoked.
                From there, it was pretty much non-stop fun. She drags me to every theater show in town, and I make her watch UFC. And, yeah, I come home from Jiu-Jitsu with bruises, 
                but that’s just part of the deal. We have our quirks, but it all just works. And then, on November 6, 2024, with the sun setting over Palm Cove, I asked her to marry me. 
                The best decision I’ve ever made.
                </p>
            </div>
        </section>

        {/* Bridal Party */}
        <section id="bridal-party" className="py-5 bg-light text-center">
            <div className="container">
            <h2 className="mb-4">Wedding Party</h2>
            <div className="row justify-content-center">
                {/* Bridesmaids */}
                <div className="col-lg-6 p-5">
                <h3 className="mb-3">Bridesmaids</h3>
                <div className="row">
                    <div className="col-6 col-md-3 mb-4">
                    <div className="photo-wrapper">
                        <img src={Kirra} alt="Bridesmaid 2" className="img-fluid rounded-circle" />
                    </div>
                    <p className="mt-2">Kirra</p>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                    <div className="photo-wrapper">
                        <img src={Sophie} alt="Bridesmaid 1" className="img-fluid rounded-circle" />
                    </div>
                    <p className="mt-2">Sophie</p>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                    <div className="photo-wrapper">
                        <img src={Nykita} alt="Bridesmaid 3" className="img-fluid rounded-circle" />
                    </div>
                    <p className="mt-2">Nykita</p>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                    <div className="photo-wrapper">
                        <img src={Kayla} alt="Bridesmaid 4" className="img-fluid rounded-circle" />
                    </div>
                    <p className="mt-2">Kayla<br/> <b>Maid of honor</b></p>
                    </div>
                </div>
                </div>

                {/* Groomsmen */}
                <div className="col-lg-6 p-5">
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
                    <div
                        className="col-md-6 rounded"
                        style={{ overflow: "hidden" }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.9113665398395!2d152.9893148751384!3d-27.503131818130875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91505fd51b4b99%3A0x9d1ec09b9df03dd7!2sHillstone%20St%20Lucia!5e0!3m2!1sen!2sau!4v1732696845422!5m2!1sen!2sau"
                            width="100%"
                            height="400px"
                            style={{ border: "0" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ceremony Location"
                        ></iframe>
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
        <section id="guest-attire" className="sand-light-bg py-5">
            <div className="container">
            <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-md-6">
                <h2>Guest Attire</h2>
                <p>Please look your best!</p>
                <p><strong>Dress Code</strong><br/> Black Tie</p>
                <p><strong>Gentlemen</strong><br/> Black Suit, White Shirt, Black Shoes</p>
                <p><strong>Ladies</strong><br/> Formal gowns or cocktail dress</p>
                </div>

                {/* Color Palette Section */}
                <div className="col-md-6">
                <div className="d-flex justify-content-center">
                    <h3>Color Palette</h3>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="color-swatch" style={{ backgroundColor: "#000000" }}></div>
                    <div className="color-swatch" style={{ backgroundColor: "#a39082" }}></div>
                    <div className="color-swatch" style={{ backgroundColor: "#f2ebe6" }}></div>
                    <div className="color-swatch" style={{ backgroundColor: "#f9e4d7" }}></div>
                    <div className="color-swatch" style={{ backgroundColor: "#b3c4b3" }}></div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="sand-dark-bg py-5">
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
  };

  export default Home;