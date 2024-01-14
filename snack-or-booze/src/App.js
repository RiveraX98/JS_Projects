import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./App.css";
import SnackOrBoozeApi from "./Api";
import Home from "./Home";
import NavBar from "./NavBar";
import Menu from "./Menu";
import RefreshmentDetails from "./RefreshmentDetails";
import Recommended from "./Recommended";
import { NotFound } from "./NotFound";
import AddItemForm, { NewItemAction } from "./AddItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState({});
  const [drinks, setDrinks] = useState({});
  const [rec, setRec] = useState({});

  useEffect(() => {
    async function getSnacks() {
      // let snacks = await axiosInstance.get("/snacks");
      // let drinks = await axiosInstance.get("/drinks");
      let snacks = await SnackOrBoozeApi.get("/snacks");
      let drinks = await SnackOrBoozeApi.get("/drinks");
      let rec = await SnackOrBoozeApi.get("/recommended");
      // let rec = await SnackOrBoozeApi.get("/recommended");

      setDrinks(drinks);
      setSnacks(snacks);
      setRec(rec);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  const Root = () => {
    return (
      <>
        <div>
          <NavBar />
        </div>
        <div>
          <Outlet />
        </div>
      </>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home snacks={snacks} drinks={drinks} />} />
          <Route
            path=":requestedMenu"
            element={<Menu snacks={snacks} drinks={drinks} title="Snacks" />}
          />
          <Route
            path=":requestedMenu/:id"
            element={
              <RefreshmentDetails
                snacks={snacks}
                drinks={drinks}
                recommended={rec}
              />
            }
          />
          <Route
            path="/recommended/form"
            element={<AddItemForm />}
            action={NewItemAction}
          />
          <Route path="/recommended" element={<Recommended items={rec} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
