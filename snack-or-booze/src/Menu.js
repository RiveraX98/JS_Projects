import React from "react";
import { Link, useParams } from "react-router-dom";
import "./FoodMenu.css";
import { NotFound } from "./NotFound";

function Menu({ snacks, drinks }) {
  // Dispalys list of snacks OR drinks depending on url paramater entered

  const { requestedMenu } = useParams();
  let refreshment = null;

  //for invalid params route to homepage
  if (!(requestedMenu === "snacks" || requestedMenu === "drinks")) {
    return <NotFound />;
  }

  requestedMenu === "drinks" ? (refreshment = drinks) : (refreshment = snacks);

  console.log("refresh:", refreshment);

  return (
    <section className="row justify-content-center">
      <div className="col-md-4 p-5">
        <div className="card">
          <div className="card-body">
            <h3 className="font-weight-bold text-center card-title">
              {requestedMenu.charAt(0).toUpperCase() + requestedMenu.slice(1)}{" "}
              Menu
            </h3>
            <p className="card-text">
              Welcome to Snack Or Booze ! Your go to bar for quality booze,
              tastey snacks and great Vibes! Click an item below for details.
            </p>
            <ul className="list-group ">
              {refreshment.map((item) => (
                <Link to={`/${requestedMenu}/${item.id}`} key={item.id}>
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
  );
}

export default Menu;
