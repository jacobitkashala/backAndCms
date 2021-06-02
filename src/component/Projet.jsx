import React from 'react';
import {FaCross} from 'react-icons/fa';
import data from '../Data/DataPersonne'

export default function Projet() {
   const {projetRealiser}=data;
    //console.log(projetRealiser)
    // for (const value of projetRealiser) {
    //     console.log(value)
    // }
    const onClickAddProjet =()=>{

        console.log("add")
    }

    return (
        <>
            <h2 style={ {fontSize: "3rem",fontWeight: 900, }}>Projet</h2>
            <div className="row box--block">
            <div className="col-sm-4">
            <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">NomProjet</th>
                    <th scope="col">Client</th>
                    <th scope="col">langage</th>
                    <th scope="col">Logo</th>
                    </tr>
                </thead>
                <tbody>{
                        projetRealiser.map((projet,index)=>{
                            return(
                                <tr key={index}>
                                <td> {index}</td>
                                <td> {projet.nom}</td>
                                <td> {projet.client}</td>
                                <td> {projet.langage.map((langageProgrammation,index)=>{
                                    return(
                                        <span key={index}> {langageProgrammation+","}</span>
                                    )
                                })}</td>
                                <td> <img src={projet.image_path} alt={projet.nom} /></td>

                                </tr>
                            )
                        })
                    
                    }
                </tbody>
            </table>

                </div>
                <div className="col-4">
                    <input type="text" className="form-control mt-2" placeholder="Nom Projet "  />
                    <textarea className="form-control mt-2" placeholder="Description du projet" ></textarea>
                    <input className="form-control form-control  mt-2"  type="file" /> 
                    <input type="text" className="form-control mt-2" placeholder="Langage utiliser Ex:C,CS,Js "  />
                    <input type="text" className="form-control mt-2" placeholder="Nom client"  />
                    <button type="button" className="btn btn-secondary mt-2" onClick={onClickAddProjet} > <FaCross/>Ad </button> 
                </div>
            </div>    
        </>
    )
}
