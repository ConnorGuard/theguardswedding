import CrocImage from '../assets/images/ConnorandChlesea_0029.jpg';

const FaqsSection = () => {
    return (
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
    );
  };
  
  export default FaqsSection;