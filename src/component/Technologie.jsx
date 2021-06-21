import React from 'react';
import { FaCross } from 'react-icons/fa';
import data from '../Data/DataPersonne';
import {
    // DiAndroid,
    // DiNodejsSmall,
     DiJavascript,
    // DiVisualstudio,
    // DiReact,
    // DiBootstrap,
    // DiDotnet,
    DiHtml5,
    DiMysql,
    DiMongodb,
    DiCss3,
    DiSass,
    DiMsqlServer,
    DiJava,
} from "react-icons/di";
import { FaCuttlefish } from "react-icons/fa";

export default function Technologie() {

    const { langageProgrammation, BaseDonnee } = data;

    const baseDonneIco = [<DiMysql className="font-dev-icon" />,
    <DiMsqlServer className="font-dev-icon" />,
    <DiMongodb className="font-dev-icon" />];

    const lgProgrammationIcon = [<DiCss3 className="font-dev-icon" />,
    <FaCuttlefish className="font-dev-icon" />, <DiJavascript className="font-dev-icon" />,
    <DiSass className="font-dev-icon" />, < DiHtml5 className="font-dev-icon" />,
    < DiJava className="font-dev-icon" />]
    
    return (
        <>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, marginTop: "10%" }}>Competences</h2>
            <div className="row  contenaire-projet">
                <div className="col-sm-4">
                   
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Base deDonnee</th>
                                <th scope="col">Niveau</th>
                                <th scope="col">Logo</th>
                            </tr>
                        </thead>
                        <tbody>{
                            BaseDonnee.map((langage, index) => {
                                return (
                                    <tr key={index}>
                                        <td> {index}</td>
                                        <td> {langage.nom}</td>
                                        <td> {langage.niveau}</td>
                                        <td> {baseDonneIco[index]}</td>
                                    </tr>)
                            })

                        }
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4">
                    <input type="text" className="form-control mt-2" placeholder="Nom technologie " />
                    <input type="text" className="form-control mt-2" placeholder="niveau Ex: 60% " />
                    <button type="button" className="btn btn-secondary mt-2"  > <FaCross />Ad </button>

                </div>


            </div>
        </>
    )
}
