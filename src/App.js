import "./App.css";
import Page from "./Components/Page/Page";
import About from "./Components/Page/About";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import Home from "./Components/Page/Home";
import Contact from "./Components/Page/Contact";
import { Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import Products from "./Components/Page/Products";
import Login from "./Components/Page/Login";

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store" exact>
          <Page />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/store/:productId">
          <Products />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
