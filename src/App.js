import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Components/Page/Page";
import About from "./Components/Page/About";
import CartContextProvider from "./Components/Store/CartContextProvider";

const router = createBrowserRouter([
  { path: "/", element: <Page /> },
  {
    path: "/about",
    element: <About />,
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
