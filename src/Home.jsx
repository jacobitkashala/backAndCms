import React, { useState, useEffect,useMemo} from 'react';
import Login from './component/Connexion';
import Detail from './pages/pageDetail';
import { RestDataSource } from "./webService/RestDataSources";

export default function Home() {

  const [dataPrimary, setdataPrimary] = useState([])
  const [displayConnexion, setdisplayConnexion] = useState(true);
  const urlLogin='http://localhost:8080/api/information';

  const restDataSource=  useMemo( () => {
    const restData = new RestDataSource(urlLogin);
    return restData;
  },[urlLogin])
  
  useEffect( () => {
    restDataSource.getData( async (data) => {
      setdataPrimary(data);
    });
  }, [restDataSource])

  if(dataPrimary[0]){
    var {username,passwd}=dataPrimary[0];
  }

  const onClickValide = (userLogin) => {
   // console.log(userLogin);
    //console.log(username,passwd);
    if(userLogin["user"]===username && userLogin["password"]===passwd){
      setdisplayConnexion(stateprev=>(!stateprev))
    }else   setdisplayConnexion(true)

  }

  return (
    <main className="container">
      {
        (displayConnexion) ? (<Login onClickValide={onClickValide} />) : (<Detail />)
      }
    </main>
  )
}
