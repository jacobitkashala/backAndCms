import React from 'react'
import hero from '../Images/corver.jpg'
export default function Connexion() {
    return (
        <>
        <div className="row" style={{backgroundImage:hero}}> 
            <div className="form-floating  col-3">
            <input type="email" className="form-control mt-3"  placeholder="E-mail"/>
            </div>
            <div className="form-floating col-3">
                <input type="password" className="form-control mt-3" placeholder="Password"/>
              
        </div>
      </div>
      </>       
    )
}
