import "./App.css";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Dashboard />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route path="/pokemon/:id">
            <PokemonDetail />
          </Route>

          {/* <Route
            path="/pokemon/:id"
            render={(props) => <PokemonDetail {...props} />}
          /> */}
          {/* <Route path="/pokemon/:id" component={PokemonDetail} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
