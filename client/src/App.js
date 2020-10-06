import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper/index";
import Footer from "./components/Footer/index";
import Substitution from "./pages/home";
import Recipe from "./pages/recipes";
import Saved from "./pages/saved";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      <Wrapper>
          <Switch>
            <Route exact path="/" component={Substitution} />
            <Route exact path="/recipes" component={Recipe} />
            <Route exact path="/saved"  />
          </Switch>
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
