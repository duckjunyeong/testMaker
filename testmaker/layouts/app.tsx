import React from "react";
import loadable from "@loadable/component";
import { Switch, Route, Redirect } from "react-router";

import Login from "@pages/Login";
import Main from "@pages/Main";
import Join from "@pages/Join";
const App = () => {
    return (
        <>   
        <Switch>
            <Route exact path='/' component={Main}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/join' component={Join}></Route>

        </Switch>
        
        </>     
    )
}   

export default App;