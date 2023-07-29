import "./Product.css";
import card1 from "./img/card1.jpg";
import card2 from "./img/card2.jpg";
import card3 from "./img/card3.jpg";
import card4 from "./img/card4.jpg";
import card5 from "./img/card5.jpg";
import card6 from "./img/card6.jpg";
import card7 from "./img/card7.jpg";
import card8 from "./img/card8.jpg";
import card9 from "./img/card9.jpg";
import card10 from "./img/card10.jpg";
import card11 from "./img/card11.jpg";
import card12 from "./img/card12.jpg";




function Productright() {
    return (
      <div className="rightside">
        <div className="row1">
          <div className="card">
            <img src={card1} style={{ height: 235, width: 200 }} alt="x" />
            <p>Classic Men's Watch</p>
            <h3>
              ₹500 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
          <div className="card">
            <img src={card2} style={{ height: 250, width: 200 }} alt="x" />
            <p>Women's Premium chain</p>
            <h3>
              ₹350 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
          <div className="card">
            <img src={card3} style={{ height: 250, width: 200 }} alt="x" />
            <p>Classic Women's Chain</p>
            <h3>
              ₹450 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
          <div className="card">
            <img src={card4} style={{ height: 250, width: 200 }} alt="x" />
            <p>Platinum Necklace</p>
            <h3>
              ₹2000 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
        </div>
        <div className="row2">
          <div className="card">
            <img src={card5} style={{ height: 250, width: 200 }} alt="x" />
            <p>Apple iphone</p>
            <h3>
              ₹40000 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
          <div className="card">
            <img src={card6} style={{ height: 250, width: 200 }} alt="x" />
            <p>Boat airpod's</p>
            <h3>
              ₹700 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
          <div className="card">
            <img src={card7} style={{ height: 250, width: 200 }} alt="x" />
            <p>Neckband</p>
            <h3>
              ₹400 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
          <div className="card">
            <img src={card8} style={{ height: 250, width: 200 }} alt="x" />
            <p>Mobile Charger</p>
            <h3>
              ₹150 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
        </div>
        <div className="row3">
          <div className="card">
            <img src={card9} style={{ height: 250, width: 200 }} alt="x" />
            <p>Men's Kurta</p>
            <h3>
              ₹400 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
          <div className="card">
            <img src={card10} style={{ height: 250, width: 200 }} alt="x" />
            <p>Premium Kurta</p>
            <h3>
              ₹450 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
          <div className="card">
            <img src={card11} style={{ height: 250, width: 200 }} alt="x" />
            <p>Women's Premium saree</p>
            <h3>
              ₹400 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
          <div className="card">
            <img src={card12} style={{ height: 250, width: 200 }} alt="x" />
            <p>Women's Premium saree</p>
            <h3>
              ₹400 <span className="onwards">onwards</span>
            </h3>
            <button>Free delivery</button>
            <br />
            <button className="btn2">3.9☆</button>
          </div>
        </div>
      </div>
    );
  }
  export default Productright;
  