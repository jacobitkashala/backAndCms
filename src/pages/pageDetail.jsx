import React from 'react';
import Application from "../component/Projet"
import Competence from "../component/Technologie";
import UserInfo from "../component/Information";

import { Route, Switch } from "react-router-dom";

export default function PageDetail() {
    
    sessionStorage.getItem("login");
    
    return (
        <>
          
            <Switch>
                <Route exact path="/user" component={Application} />
                <Route exact path="/Competence" component={Competence} />
                <Route exact path="/userInfo/" component={UserInfo} />
            </Switch>
        </>
    )
}
