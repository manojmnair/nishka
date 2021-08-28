import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Networks from "./components/Networks";
import Profile from "./components/Profile";
import Trade from "./components/Trade";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>

        <Route path='/trade'>
          <Trade />
        </Route>

        <Route path='/networks'>
          <Networks />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>

{/*         <Route path='*'>
          <NotFound />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
