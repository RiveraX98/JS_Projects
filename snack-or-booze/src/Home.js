import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home({ snacks, drinks }) {
  // Home/Index page

  return (
    <div className="row justify-content-center">
      <section className="col-md-6 p-3 ">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <h3 className="font-weight-bold">
                Welcome to Silicon Valley's premier dive cafe!
              </h3>
            </CardTitle>
            <h5> Enjoy our selection of {snacks.length} food items</h5>
            <h5>AND</h5>
            <h5> Enjoy our selection of {drinks.length} drink items</h5>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}

export default Home;
