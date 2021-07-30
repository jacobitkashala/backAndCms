
//import Axios from "axios";
import React, { useState, useEffect } from 'react';
import Error from './component/Error';
import Application from "./component/Projet"
import Login from './component/Connexion';
import Competence from './component/Technologie';
import { Route, Switch, useHistory } from "react-router-dom";
import { RestDataSource } from "./webService/RestDataSources";


export default function Home() {
  const [loginData, setLoginData] = useState([]);
  let history = useHistory();
  const urlLogin = 'http://localhost:8080/api/information/login';

  sessionStorage.setItem("connected", true);
  let isAuthenticated = sessionStorage.getItem("connected");

  useEffect(() => {
    const restData = new RestDataSource(urlLogin);
    restData.getData(data => setLoginData(data));

  }, [])

  console.log(loginData);
  console.log(isAuthenticated);


  const onClickValide = (userLogin) => {
    //console.log(userLogin["user"],userLogin["password"])

    const { username, passwd } = loginData[0];

    console.log(username, passwd);

    if (username === userLogin["user"] &&
      passwd === userLogin["password"]) {
      sessionStorage.setItem("connected", true);
      isAuthenticated = sessionStorage.getItem("connected");

      history.push("/application");
      console.log(isAuthenticated);
    }

  }

  return (
    <main className="container">
      <Switch>
        <Route exact path="/"
          render={props => <Login {...props} onClickValide={onClickValide} />}
        />

        <Route exact path="/application" component={Application} />
        <Route exact path="/Competence" component={Competence} />
        <Route path="/" component={Error} />
      </Switch>

    </main>
  )
}
