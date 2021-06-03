import React,{useState,useEffect} from 'react';
import Connexion from './component/Connexion';
import Detail from './pages/pageDetail' ;
import data from "./Data/DataPersonne";
import axios from "axios";
import {RestDataSource} from "./webService/RestDataSources";

export default function Home() {

const [dataPrimary, setdataPrimary] = useState([])
const {login}=  data ;
const [displayConnexion, setdisplayConnexion] = useState(true)  
const url='http://localhost:8800/api/usersinfos';

const dataSource=new RestDataSource(url);

useEffect( () => {
  dataSource.getData((data)=>{
    setdataPrimary(data);
  });

  const reponse =  axios("http://localhost:8800/api/usersinfos/");
  console.log(reponse);   
  if(reponse.status===200){
       let data=reponse.data.results;
        console.log(data) ;
      }
  
}, [])

  //console.log(dataSource.getStatus);

  const onClickValide=(loginUser)=>{
    if(loginUser["user"]===login.user && loginUser["password"]===login.password ){
        setdisplayConnexion(stateprev=>(!stateprev))

    }else(
        setdisplayConnexion(true)

    )
}

  return (
        <main className="container">
          { (displayConnexion)?( 
            <Connexion onClickValide={onClickValide} />  
          ):(
            <Detail/>
          )}
        </main>
    )
}
