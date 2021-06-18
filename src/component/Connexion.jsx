import React,{useRef} from 'react';
import {FaUserAlt} from 'react-icons/fa';
//import data from '../Data/DataPersonne'

export default function Connexion({onClickValide}) {
    //const {login}=data;
    const refUserName = useRef(null);    
    const refPassword = useRef(null);  
    let loginUser=[]  
    let userPassworwordValue,userNmeValue;
   
    const onClickUserName=()=>{
        userNmeValue=refUserName.current.value;

    }
    const onClickPassword=()=>{
        userPassworwordValue=refPassword.current.value;
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
                    <input type="password" className="form-control mt-3" ref={refPassword} onChange={onClickPassword} />  
                </div>
                <button type="button" className="btn btn-secondary mt-2 col-sm-7" onClick={()=>{ 
                    loginUser["user"]=userNmeValue; 
                    loginUser["password"]=userPassworwordValue; 
                    refPassword.current.value=""
                    refUserName.current.value=""
                    onClickValide(loginUser)}}  > valider </button>     

            </div>
        </>       
    )
}
