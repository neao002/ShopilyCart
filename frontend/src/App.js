import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Products from "./Components/Products";

import Home from "./Components/Home";
import Update from "./Components/Update";
import Footer from "./Components/Footer";

function App() {
  const [isUpdated, setIsUpdated] = useState(false);
  const updateHandler = () => {
    setIsUpdated(!isUpdated);
  };

  return (
    <HashRouter basename="/">
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add_Products">
            <Products updating={updateHandler} />
          </Route>
          <Route path="/update/:id">
            <Update />
          </Route>
        </Switch>

        <Footer />
      </Container>
    </HashRouter>
  );
}

export default App;
