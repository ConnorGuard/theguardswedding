import Paypal from '../assets/images/Paypal.jpeg';

const WishingWellSection = () => {
    return (
        <section id="faqs" className="sand-dark-bg py-5">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 order-md-1">
                    <h2>Wishing Well</h2>
                    <p>Many of you are traveling across the globe to celebrate with us in Brisbane, so your presence means the world and is all we ask for. If you'd still like to contribute, please follow the link <a href="https://www.paypal.com/paypalme/theguardswedding" target="_blank" rel="noopener noreferrer" >here</a> or scan the QR code.</p>
                    <p><strong>Paypal</strong> <br /> https://www.paypal.com/paypalme/theguardswedding</p>
                    <p><strong>Bank Transfer</strong> <br />Account Name: Chelsea E Sales <br />BSB: 014 111 <br />ACC: 649 405 344</p>
                    <p><strong>Pay Id</strong> <br /> 0484 617 582</p>
                </div>
                <div className="col-md-6 order-md-2">
                    <h2>Pay Pal</h2>
                    <img style={{width: '300px', height: '300px'}} src={Paypal} alt="paypal-qr-code" className="img-fluid rounded" />
                </div>
            </div>
            </div>
        </section>
    );
  };
  
  export default WishingWellSection;