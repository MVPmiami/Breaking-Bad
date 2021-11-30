import Home from "./components/pages/Home/";
import Person from "./components/pages/Person";
import Catalog from "./components/pages/Catalog";
import Header from "./components/organisms/Header/";
import Footer from "./components/molecules/Footer";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/person/:id" component={Person} />
          <Route path="/catalog" component={Catalog} />
          <Redirect to="/catalog" />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
