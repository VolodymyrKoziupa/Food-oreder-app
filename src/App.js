import { Fragment } from "react";
import Cart from "./componets/Cart/Cart";
import Header from "./componets/Layout/Header";
import Meals from "./componets/Meals/Meals";


function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
