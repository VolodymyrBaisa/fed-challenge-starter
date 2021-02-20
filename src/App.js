import React from "react";
//Import Pages
import Challenges from "./pages/Challenges";
//Import Data
import datas from "./data";

function App() {
    return <Challenges datas={datas} />;
}

export default App;
