import React from "react";
import { Navbar } from "./component/navbar";
import Home from "./component/home/home";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Navbar>
        </div>
    );
}

export default App;
