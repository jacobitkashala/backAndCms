import React,{useState} from 'react';
import Connexion from './component/Connexion';
import Detail from './pages/pageDetail' ;
import data from "./Data/DataPersonne";

export default function Home() {
const {login}=  data ;
const [displayConnexion, setdisplayConnexion] = useState(true)  
//   console.log();
//   console.log(userInfos);

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
