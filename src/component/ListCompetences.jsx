import React from 'react';
import {
    DiAndroid,
    DiNodejsSmall,
    DiJavascript,
    DiVisualstudio,
    DiReact,
    DiBootstrap,
    DiDotnet,
    DiHtml5,
    DiMysql,
    DiMongodb,
    DiCss3,
    DiSass,
    DiMsqlServer,
    DiJava
} from "react-icons/di";

export default function ListCompetences({ dataCompetence }) {
    const lgPrIcons = [
        <DiAndroid />,
        <DiNodejsSmall />,
        <DiJavascript />,
        <DiVisualstudio />,
        <DiReact />,
        <DiBootstrap />,
        <DiDotnet />,
        <DiHtml5 />,
        <DiMysql />,
        <DiMongodb />,
        <DiCss3 />,
        <DiSass />,
        <DiMsqlServer />,
        <DiJava />
    ]


    return (
        <>
            <table className="table table-dark table-hover table-striped" style={{ cursor: "pointer" }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NomLangage</th>
                        <th scope="col">Niveau</th>
                        <th scope="col">Logo</th>
                    </tr>
                </thead>
                <tbody>{
                    dataCompetence.map((lang, index) => {
                        return (
                            <tr key={index}>
                                <td> {index}</td>
                                <td> {lang.nom}</td>
                                <td> {lang.niveau}</td>
                                <td> {lgPrIcons[index]}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}
