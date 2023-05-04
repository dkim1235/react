import React, { Fragment } from "react";

import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
			<Meals></Meals>
    </Fragment>
  );
}

export default App;
