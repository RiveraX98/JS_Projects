import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";

function Recommended({ items }) {
  return (
    <div>
      <section className="row justify-content-center">
        <div className="col-md-5 p-5">
          <div className="card">
            <div className="card-body">
              <h3 className="font-weight-bold text-center card-title">
                Recommened Menu Items
              </h3>
              <p className="card-text">
                Don't see what your'e craving? Add your favorite drink or snack
                to our recommendations list! You just might see your item added
                to our menu!
              </p>
              <ul className="list-group ">
                {items.map((item) => (
                  <Link to={`/recommended/${item.id}`} key={item.id}>
                    <li className="list-group-item ">
                      {item.name} {item.price}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <p>
        Want to add your recommendation?{" "}
        <Link to="/recommended/form">Click here</Link>
      </p>
    </div>
  );
}

export default Recommended;
