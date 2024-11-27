import Paypal from '../assets/images/Paypal.jpeg';

const WishingWellSection = () => {
    return (
        <section id="faqs" className="sand-dark-bg py-5">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 order-md-2">
                <h2>Wishing Well</h2>
                <p>Many of you are traveling across the globe to celebrate with us in Brisbane, so your presence means the world to us and is all we ask for. If you'd still like to contribute to our honeymoon funds, please click <a href="https://www.paypal.com/paypalme/theguardswedding" target="_blank" rel="noopener noreferrer" >here</a> or scan the QR code.</p>
                <p><strong>Paypal</strong> - https://www.paypal.com/paypalme/theguardswedding</p>
                <p><strong>PayId</strong> - Connor.guard@gmail.com</p>
                </div>
                <div className="col-md-6 order-md-1">
                    <img style={{width: '300px', height: '300px'}} src={Paypal} alt="paypal-qr-code" className="img-fluid rounded" />
                </div>
            </div>
            </div>
        </section>
    );
  };
  
  export default WishingWellSection;