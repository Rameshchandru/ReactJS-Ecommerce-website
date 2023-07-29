import "./Header.css"
import logo from "./img/logo.png";

function Header() {
    return(
       <>
       <div className="head">
        <div className="lefthead">
          <nav>
            <ul>
              <li>
                <img alt="img" src={logo} style={{ height: 40, width: 150 }} />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Try Saree,kurthi or search by product code"
                />
              </li>
            </ul>
          </nav>
        </div>
        <div className="righthead">
          <nav>
            <ul>
              <li>Download app</li>
              <li>Become a supplier</li>
              <li style={{ border: "none" }}>Profile</li>
              <li style={{ border: "none" }}>Cart</li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
       </>
    )

}
export default Header