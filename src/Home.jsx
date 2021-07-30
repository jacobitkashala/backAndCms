import React from 'react';
import Error from './component/Error';
import Application from "./pages/Projets";
import Login from './component/Connexion';
import Competence from "./pages/Competences";
import { Route, Switch } from "react-router-dom";
import ProtetedRoute from "./util/protectedRoute"

export default function Home() {

  return (
    <main className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtetedRoute exact path="/application" component={Application} />
        <ProtetedRoute exact path="/Competence" component={Competence} />
        <ProtetedRoute exact path="/user" component={Competence} />
        <Route path="*" component={Error} />
      </Switch>
    </main>
  )
}
