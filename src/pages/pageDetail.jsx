import React from 'react';
import Application from "../component/Projet"
import Competence from "../component/Technologie";
import UserInfo from "../component/Information";
import Header from "../component/Header";
import { Route, Switch } from "react-router-dom";

// import Information from "../component/Information"


export default function PageDetail() {
    return (

        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Application} />
                <Route path="/Competence/" component={Competence} />
                <Route path="/User/" component={UserInfo} />
            </Switch>
        </>
    )
}
