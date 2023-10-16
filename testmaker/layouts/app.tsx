import React from "react";
import loadable from "@loadable/component";
import { Switch, Route, Redirect } from "react-router";
import CreateProblem from "@pages/CreateProblem";
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
            {/* <Route path='/problem/create' component={CreateProblem}></Route> */}
        </Switch>
        
        </>     
    )
}   

export default App;