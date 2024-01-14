import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RefreshmentDetails({ drinks, snacks, recommended }) {
  // Displays details about food/drink item

  const { requestedMenu, id } = useParams();

  //for invalid params route to homepage
  if (
    !(
      requestedMenu === "snacks" ||
      requestedMenu === "drinks" ||
      requestedMenu === "recommended"
    )
  ) {
    return <Navigate to={"/"} />;
  }

  let refreshments = null;

  if (requestedMenu === "drinks") {
    refreshments = drinks;
  } else if (requestedMenu === "snacks") {
    refreshments = snacks;
  } else {
    refreshments = recommended;
  }

  let item = refreshments.find((item) => item.id === id);

  if (!item) return <Navigate to={`/${requestedMenu}`} />;

  return (
    <section>
      <Card className="row justify-conetent-center m-3">
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
          <p>
            <b>Price:</b> {item.price}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default RefreshmentDetails;
