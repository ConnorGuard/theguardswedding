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
                        <p><strong>Do you have a registry?</strong> <br/> We have a cozy home and don't require any additional items, but if you'd like, contributions to our honeymoon fund would be greatly appreciated <a href="/#wishing-well" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    </div>
                    <div
                        className="col-md-6 rounded"
                        style={{ overflow: "hidden" }}
                    >
                        <h2>Venue location</h2>
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
    );
  };
  
  export default FaqsSection;