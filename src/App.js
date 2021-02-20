import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
//Import Pages
import Challenges from "./pages/Challenges";
//Import Data
import datas from "./data";

function App() {
    const history = createMemoryHistory();
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <Challenges datas={datas} />}
                ></Route>
            </Switch>
        </Router>
    );
}

export default App;
