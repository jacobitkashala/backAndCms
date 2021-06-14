import React from 'react';
import Application from "../component/Projet"
import Technologie from "../component/Technologie";
import Header from "../component/Header";
import { Route, Switch } from "react-router-dom";

// import Information from "../component/Information"


export default function PageDetail() {
    return (
        <>
            <Header />
            <Switch>
            <Route to="/" component={Application} />
            </Switch>

            {/* <Information/> */}
            {/*          
          <Projet/>
          <Technologie/>   */}

        </>
    )
}
