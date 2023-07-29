import "./Header2.css";
import Banner from "./img/Banner.jpg";

function Poster1() {
    return (
      <div>
        <div className="poster">
          <div className="pleft">
            <h1>Lowest Prices </h1>
            <h1>
              <span className="h2">Best Quality Shopping</span>{" "}
            </h1>
            <div className="bannerbox">
              <div className="boxicon">
                <img
                  alt="icon"
                  src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                />
                <p>
                  Free
                  <br /> Delivery
                </p>
              </div>
              <div className="boxicon">
                <img
                  alt="icon"
                  src="https://images.meesho.com/images/pow/cod_jamun.svg"
                />
                <p>
                  Cash on
                  <br /> Delivery
                </p>
              </div>
              <div className="boxicon">
                <img
                  alt="icon"
                  src="https://images.meesho.com/images/pow/easyReturns_jamun.svg"
                />
                <p>
                  Easy
                  <br /> Return
                </p>
              </div>
            </div>
            <div className="dbutton">
              <button>
                <img
                  alt="playstore"
                  src="https://images.meesho.com/images/pow/playstoreSmallIcon.png"
                />
                Download the Meesho App
              </button>
            </div>
          </div>
  
          <div className="bright">
            <img src={Banner} alt="ban" />
          </div>
        </div>
        <h1>Products For You</h1>
      </div>
    );
  }
  export default Poster1;
  