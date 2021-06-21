import React, { useEffect, useState, useMemo } from 'react';
import corver from "../Images/voiture.jpeg";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { RestDataSource } from "../webService/RestDataSources";

export default function CardApplications({ onClickAddProjet }) {

    const [dataApplication, setDataApplication] = useState();

    const restDataSource = useMemo(() => {
        const restDataSource = new RestDataSource("http://localhost:8080/api/application");
        return restDataSource;
    }, [])

    const appUpdate = (idApp) => {
        console.log(idApp)
    }

    const appDelete = useMemo( ()=>(idApp) => {
        restDataSource.Delete(idApp);
    }, [restDataSource])

    useEffect(() => {
        restDataSource.getData(async (data) => {
            setDataApplication(data);
        })
    }, [restDataSource, appDelete])

    if (dataApplication) {
        var displayApplication = dataApplication.map((app, index) => {
            return (
                <div key={index} className="col-sm-10 mt-4 ">
                    <div className="card bg-dark text-white ">
                        <img src={corver} className="card-img img-fluid" alt="..." />
                        <div className="card-img-overlay">
                            <FiEdit className="edit-icon" onClick={() => { appUpdate(app.application_id) }} />
                            <MdDelete className="deleet-icon" onClick={() => { appDelete(app.application_id) }} />
                            <h5 className="card-title">Nom: {app.application_nom}</h5>
                            <h5 className="card-text">Client: {app.application_client}</h5>
                            <p className="card-text">{app.description}</p>
                            <p className="card-text">Description: {app.application_description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <>
            {
                displayApplication
            }
        </>
    )
}
