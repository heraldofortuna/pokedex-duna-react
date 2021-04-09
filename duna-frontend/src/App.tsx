import { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import Home from "./screens/Home";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
