import React,{useRef} from 'react';
import data from "../Data/DataPersonne";
import {FaUserAlt} from 'react-icons/fa'

export default function Connexion({arrayInfo}) {
    const {userInfos}=data;
    const refUserName = useRef(null);    
    const refPassword = useRef(null);    
   
     const onClickUserName=()=>{
        let value=refUserName.current.value
        arrayInfo.push(value)
        //console.log(value)
       
    }
     const onClickPassword=()=>{
        let value=refPassword.current.value
        arrayInfo.push(value)

        //console.log(value)
    }
    return (
        <>
            <div className=" d-flex flex-row justify-content-center row connex"> 
                <h1 style={{textAlign:"center"}}>Connexion</h1>
                <FaUserAlt  className="" style={{fontSize:"150px"}}/>
                <div className="  col-4">
                    <label>UserName</label>
                    <input type="text" className="form-control mt-3" ref={refUserName} onChange={onClickUserName} />
                </div>
                <div className=" col-4">
                <label>Password</label>
                    <input type="password" className="form-control mt-3" onChange={onClickPassword} />  
                </div>
                <button type="button" class="btn btn-secondary mt-2"  > valider </button>     

            </div>
        </>       
    )
}
