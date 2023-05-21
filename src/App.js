import "./App.css";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import Page from "./Components/Page/Page";
import CartContextProvider from "./Components/Store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <NavbarComponent />
      <Page />
    </CartContextProvider>
  );
}

export default App;
