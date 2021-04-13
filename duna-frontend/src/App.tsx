import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./screens/Home";
import Pokemon from "./screens/Pokemon";

function App() {
  return (
    <Router>
      <Fragment>
        <GlobalStyle />
        <Switch>
          <Route path="/:name" component={Pokemon} />
          <Route path="/" component={Home} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
