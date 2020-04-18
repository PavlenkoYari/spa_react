import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { NoMatch} from "./components/NoMatch/NoMatch";
import Home from "./components/Home/Home";
import User from "./components/User/User";



function App() {
  return (
    <div className="app">
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path='/user/:id'>
                    <User />
                </Route>
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
            <Footer />

        </Router>
    </div>
  );
}

export default App;
