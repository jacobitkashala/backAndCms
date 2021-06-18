import React, { useState, useEffect,useMemo} from 'react';
import Login from './component/Connexion';
import Detail from './pages/pageDetail';
import { RestDataSource } from "./webService/RestDataSources";

export default function Home() {

  const [dataLogin, setdataLogin] = useState([])
  const [displayConnexion, setdisplayConnexion] = useState(true);
  const urlLogin='http://localhost:8080/api/information/login';

  const restDataSource=  useMemo( () => {
    const restData = new RestDataSource(urlLogin);
    return restData;
  },[urlLogin])
  
  useEffect( () => {
    restDataSource.getData( async (data) => {
      setdataLogin(data);
    });
  }, [restDataSource])

  
  if(dataLogin[0]){
    var {username,passwd}=dataLogin[0];
  }
 
  const onClickValide = (userLogin) => {
   console.log("logn:"+userLogin["user"]);
    console.log(username,passwd);

    if(userLogin["user"]===username && userLogin["password"]===passwd){
      setdisplayConnexion(stateprev=>(!stateprev))
    }

  }

  return (
    <main className="container">
      {
        (false) ? (<Login onClickValide={onClickValide} />) : (<Detail />)
      }
    </main>
  )
}
