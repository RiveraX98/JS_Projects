import React from "react";
import { Form, redirect } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";
const AddItemForm = () => {
  return (
    <div className="row g-3 justify-content-center p-4">
      <Card>
        <Form method="POST" action="/recommended/form">
          <div col-md-6>
            {" "}
            <label htmlFor="item-name">Name:</label>
            <input
              id="item-name"
              type="text"
              placeholder="item name"
              name="name"
            />
          </div>
          <div col-md-6>
            <label htmlFor="item-price">Price:</label>
            <input
              id="item-price"
              type="text"
              placeholder="price"
              name="price"
            />
          </div>
          <div col-12>
            <label htmlFor="item-price">Description:</label>
            <input
              id="item-description"
              type="text"
              placeholder="description"
              name="description"
            />
          </div>
          <div col-12>
            <label htmlFor="item-price">Recipe:</label>
            <input
              id="item-recipe"
              type="text"
              placeholder="recipe"
              name="recipe"
            />
          </div>
          <div col-md-6>
            <label htmlFor="item-price">Serve:</label>
            <input
              id="item-serve"
              type="text"
              placeholder="How to Serve"
              name="serve"
            />
          </div>
          <div col-12>
            {" "}
            <button>Add</button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddItemForm;

export const NewItemAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    name: data.get("name"),
    price: data.get("price"),
    description: data.get("description"),
    recipe: data.get("recipe"),
    serve: data.get("serve"),
  };

  SnackOrBoozeApi.create("/recommended", submission);

  return redirect("/recommended");
};
