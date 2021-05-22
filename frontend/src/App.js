import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Products from "./Components/Products";
import AllProducts from "./Components/AllProducts";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add_Products">
            <Products />
          </Route>
          <Route path="/all_Products">
            <AllProducts />
          </Route>
        </Switch>

        <Footer />
      </Container>
    </Router>
  );
}

export default App;
