const FaqsSection = () => {
    return (
        <section id="ceremony" className="py-5 sand-dark-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>FAQs</h2>
                        <p><strong>Can I take photos on the day?</strong> <br/> We will be having an unplugged ceremony, however take as many as you like at the reception!</p>
                        <p><strong>Can I bring my children?</strong> <br/> We will be having a (mostly) adult only wedding! Named invitees only please.</p>
                        <p><strong>Is there a dress code?</strong> <br/> Formal / Cocktail attire, find inspo on our home page!</p>
                        <p><strong>Can I bring a plus one?</strong> <br/> Our venue has a strict head count, named invitees only please.</p>
                        <p><strong>Do you have a registry?</strong> <br/> We have a cozy home and don't require any additional items, but if you'd like make a contribution, please follow the link <a href="/#wishing-well" target="_blank" rel="noopener noreferrer">here</a>.</p>
                        <p><strong>A different question?</strong> <br/> Please contact us at <a href="mailto: chelseasales2017@gmail.com"> chelseasales2017@gmail.com</a>.</p>
                    </div>
                    <div
                        className="col-md-6 rounded"
                        style={{ overflow: "hidden" }}
                    >
                        <h2>Venue location</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14163.013460605065!2d153.0438484!3d-27.4457961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91597beb96734b%3A0xf5fdbf989977a6c0!2sThe%20Refinery!5e0!3m2!1sen!2sau!4v1733014069556!5m2!1sen!2sau"
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
    );
  };
  
  export default FaqsSection;