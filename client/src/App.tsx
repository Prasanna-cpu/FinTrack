// @ts-ignore
import React from "react";

import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Auth from "./Pages/auth";


function App(){
    return(
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path={"/"} element={<Dashboard/>}></Route>
                    <Route path={"/auth"} element={<Auth/>}></Route>
                </Routes>
            </div>
        </Router>

    )
}

export default App;

