import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";

import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

import Contact from "./components/Contact/Contact";

import Main from "./components/Pages/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
