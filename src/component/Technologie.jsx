import React from 'react';
import {FaCross} from 'react-icons/fa';
import data from '../Data/DataPersonne'



export default function Technologie() {
    const {langageProgrammation,BaseDonnee,libreryFromwork}=data;
    return (
        <>
        <h2 style={ {fontSize: "3rem",fontWeight: 900, }}>Competences</h2>
        <div className="row box--block">
                <div className="col-sm-4">
                <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">NomLangage</th>
                    <th scope="col">Niveau</th>
                    <th scope="col">Logo</th>
                    </tr>
                </thead>
                <tbody>{
                    langageProgrammation.map((langage,index)=>{
                        return(
                        <tr key={index}>
                            <td> {index }</td>
                            <td> {langage.nom }</td>
                            <td> {langage.niveau }</td>
                            <td> <img src={langage.nom}  alt={langage.nom}/> </td>
                        </tr>)
                    })
                       
                    }
                </tbody>
            </table>
            <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Base deDonnee</th>
                    <th scope="col">Niveau</th>
                    <th scope="col">Logo</th>
                    </tr>
                </thead>
                <tbody>{
                    BaseDonnee.map((langage,index)=>{
                        return(
                        <tr key={index}>
                            <td> {index }</td>
                            <td> {langage.nom }</td>
                            <td> {langage.niveau }</td>
                            <td> <img src={langage.nom}  alt={langage.nom}/> </td>
                        </tr>)
                    })
                       
                    }
                </tbody>
            </table>
                </div>
                <div className="col-sm-4">
                   <input type="text" className="form-control mt-2" placeholder="Nom technologie "  />
                    <input type="text" className="form-control mt-2" placeholder="niveau Ex: 60% "  />
                    <button type="button" className="btn btn-secondary mt-2"  > <FaCross/>Ad </button> 
                 
                </div>
               
                
            </div>
        </>
    )
}
