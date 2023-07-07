import "./App.css";
import { lazy, Suspense } from "react";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import { Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import AuthContext from "./Components/Store/AuthContext";
import { useContext } from "react";
import CartContextProvider from "./Components/Store/CartContextProvider";

const App = () => {
  const Page = lazy(() => import("./Components/Page/Page"));
  const About = lazy(() => import("./Components/Page/About"));
  const Home = lazy(() => import("./Components/Page/Home"));
  const Products = lazy(() => import("./Components/Page/Products"));
  const Login = lazy(() => import("./Components/Page/Login"));
  const Contact = lazy(() => import("./Components/Page/Contact"));
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <CartContextProvider>
        <NavbarComponent />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Home" />
          </Route>
          <Route path="/home">
            <Suspense fallback={<p>Loading...</p>}>
              <Home />
            </Suspense>
          </Route>
          <Route path="/store" exact>
            {authCtx.isLoggedIn && (
              <Suspense fallback={<p>Loading...</p>}>
                <Page />
              </Suspense>
            )}
            {!authCtx.isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/about">
            <Suspense fallback={<p>Loading...</p>}>
              <About />
            </Suspense>
          </Route>
          <Route path="/contact">
            <Suspense fallback={<p>Loading...</p>}>
              <Contact />
            </Suspense>
          </Route>
          <Route path="/login">
            <Suspense fallback={<p>Loading...</p>}>
              <Login />
            </Suspense>
          </Route>
          <Route path="/store/:productId">
            <Suspense fallback={<p>Loading...</p>}>
              <Products />
            </Suspense>
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </CartContextProvider>
    </div>
  );
};

export default App;
