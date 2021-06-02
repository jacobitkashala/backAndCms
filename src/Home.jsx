import React from 'react';
import Connexion from './component/Connexion';
import Detail from './pages/pageDetail' ;

export default function Home() {
//console.log(data.userInfos);

//const [arrayInfo, setArrayInfo] = useState([])

  return (
        <main className="container">
           <Connexion  />         
            <Detail/>
        </main>
    )
}
