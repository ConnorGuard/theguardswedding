import RSVPForm from "../Components/RSVPForm";

const Rsvp = () => {
    return (
      <div id="rsvp">
        <div className='rsvp-bg'>
            <header className="text-white">
                <div>
                    <p>We look forward to seeing you!</p>
                    <h1>RSVP</h1>
                </div>
            </header>
        </div>
        <section className="py-5 sand-light-bg">
            <div className="container">
                <div className="card my-card p-3">
                    <RSVPForm />
                </div>
            </div>
        </section>
      </div>
    );
  };
  
  export default Rsvp;