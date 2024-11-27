import WishingWellSection from "../Components/WishingWellSection";

const WishingWell = () => {
    return (
      <div id="wishing-well">
        <div className='wishing-well-bg'>
            <header className="text-white">
                <div>
                    <h1>Wishing Well</h1>
                </div>
            </header>
        </div>
        <WishingWellSection/>
      </div>
    );
  };
  
  export default WishingWell;