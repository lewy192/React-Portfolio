import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";

import About from "./components/About";
import Portfolio from "./components/Portfolio";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Switch>
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/about" component={About} />
            </Switch> */}
        </div>
    );
}

export default App;
