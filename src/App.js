import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Components/Page/Page";
import About from "./Components/Page/About";
import CartContextProvider from "./Components/Store/CartContextProvider";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import Home from "./Components/Page/Home";
import Contact from "./Components/Page/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarComponent />,
    children: [
      { path: "/store", element: <Page /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
