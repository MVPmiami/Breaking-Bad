import Home from "./components/pages/Home/";
import Person from "./components/pages/Person";
import Catalog from "./components/pages/Catalog";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/person/:id" component={Person} />
          <Route path="/catalog" component={Catalog} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
