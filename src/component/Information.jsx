import React from 'react'
import Data from '../Data/DataPersonne'

export default function Information() {
    const {userInfos}=Data;

    return (
        <>
            <h2 style={{fontSize: "3rem",font: 900}} >Information</h2> 
            <div className="row box--block">
                <div className="col-sm-4"> 
                    <div className="box">
                        <h2 style={ {fontSize: "3rem",fontWeight: 900,}}>Donnée</h2>
                        <h2 > {userInfos.prenom}</h2>
                        <h2> {userInfos.postNom}</h2>
                        <h2> {userInfos.nom}</h2>
                        <h2> {userInfos.ville}</h2>
                        <h2> {userInfos.pays}</h2>
                        <h2> {userInfos.niveau}</h2>
                        <h2> {userInfos.telephone}</h2>
                        <h2> {userInfos.nationalite}</h2>
                    </div>
                </div>
                <div className="col-sm-4"> 
                <div className="box">
                    <h2 style={ {fontSize: "3rem",fontWeight: 900,}}>Personnel</h2>
                    <input type="text" className="form-control mt-2" placeholder="Prenom"  />
                    <input type="text" className="form-control mt-2" placeholder="PostNom"  />
                    <input type="text" className="form-control mt-2" placeholder="Nom"  />
                    <input type="text" className="form-control mt-2" placeholder="Ville"  />
                    <input type="text" className="form-control mt-2" placeholder="Pays"  />
                    <input type="text" className="form-control mt-2" placeholder="Niveau"  />
                    <input type="text" className="form-control mt-2" placeholder="Téléphone"  />
                    <input type="text" className="form-control mt-2" placeholder="Nationalité"  />
                    <button type="button" class="btn btn-secondary mt-2"  > valider </button>     
                
                </div>
            </div>
            </div>
        </>
    )
}
