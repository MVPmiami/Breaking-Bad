import CardList from "./components/organisms/CardList";
import Home from "./components/pages/Home/";
import CurrentPerson from "./components/pages/CurrentPerson/";
import PersonList from "./components/pages/PersonList/";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={CardList} />
          <Route path="/Home" component={Home} />
          <Route path="/CurrentPerson" component={CurrentPerson} />
          <Route path="/PersonList" component={PersonList} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
