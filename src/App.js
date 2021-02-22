import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
//Import Pages
import Challenges from "./pages/Challenges";
//Import Data
import datas from "./data";
//Import Global Styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
    const history = createMemoryHistory();
    return (
        <>
            <GlobalStyles />
            <Router history={history}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Challenges datas={datas} />}
                    ></Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
