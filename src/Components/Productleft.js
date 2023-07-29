import "./Product.css";
import { FaAngleDown } from "react-icons/fa";

function Productleft() {
  return (
    <div className="leftside">
      <div className="sort">
        <label>Sort By:</label>
        <select>
          <option>New Arrivals</option>
          <option>Price(High to Low)</option>
          <option>Price(Low to High)</option>
          <option>Ratings</option>
          <option>Discounts</option>
        </select>
      </div>
      <div className="filters">
        <div>
          <h2>Filters</h2>
          <p>1000+ Products</p>
          <hr />
        </div>
        <div className="category">
          <p>
            Category{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Gender{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Fabrics{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Oxford{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Color{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            dail_shape{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Meesho Mall{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Occassion{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Dupatta Color{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Size{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Combo{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Rating{" "}
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
        <div className="category">
          <p>
            Discount
            <span className="icon">
              <FaAngleDown />
            </span>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default Productleft;
