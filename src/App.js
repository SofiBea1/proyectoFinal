import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Router, BrowserRouter, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Login />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
