import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { FaCross } from 'react-icons/fa';
import { FaCuttlefish } from "react-icons/fa";
import ListCompetences from "./ListCompetences";
import { RestDataSource } from "../webService/RestDataSources";


export default function Technologie() {


    // const baseDonneIco = [<DiMysql className="font-dev-icon" />,
    // <DiMsqlServer className="font-dev-icon" />,
    // <DiMongodb className="font-dev-icon" />];


    // const lgProgrammationIcon = [<DiCss3 className="font-dev-icon" />,
    // <FaCuttlefish className="font-dev-icon" />, <DiJavascript className="font-dev-icon" />,
    // <DiSass className="font-dev-icon" />, < DiHtml5 className="font-dev-icon" />,
    // < DiJava className="font-dev-icon" />]
    const [dataCompetence, setDataCompetence] = useState([]);

    const restDataSource = useMemo(() => new RestDataSource("http://localhost:8080/api/langageprogrammation"), []);

    const addCompetence = useCallback(
        (newCompt) => {
            // const { error, value } = modelJoi.validate(newApp);
            // if (value !== undefined) {
            //     console.log(error);
            //     if (!error) {
            //         const { descrApp, langApp, nameApp, nameClient } = value;
            //         let dataLang = langApp.split(",")
            //         let dataApp = { descrApp, nameApp, nameClient }
            //         console.log("dataApp", dataApp);
            //         console.log("dataLang", dataLang);
            //         restDataSource.Post(dataApp);
            //     }
            // }
        },
        [],
    )

    const updateCompetence = useCallback((idApp) => {
        restDataSource.Update(idApp);
    }, [restDataSource]);

    const deleteCompetence = useCallback((idApp) => {
        restDataSource.Delete(idApp);
    }, [restDataSource]);


    useEffect(() => {
        restDataSource.getData((data) => { setDataCompetence(data) });
    }, [restDataSource])

    return (
        <>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, marginTop: "10%" }}>Competences</h2>
            <div className="row  contenaire-projet">
                <div className="col-sm-4">
                    <ListCompetences dataCompetence={dataCompetence} />
                </div>
                <div className="col-sm-4">
                   

                </div>


            </div>
        </>
    )
}
