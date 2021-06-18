import React, { useEffect, useMemo,useState } from 'react';
import corver from "../Images/voiture.jpeg";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { RestDataSource } from "../webService/RestDataSources";
export default function CardApplications() {
    const [dataApplication, setDataApplication] = useState()

    const restDataSource = useMemo(() => {
        const restDataApplication = new RestDataSource("http://localhost:8080/api/application");
        return restDataApplication;
    }, [])

    useEffect(() => {
        restDataSource.getData(async (data) => {
            setDataApplication(data);
        })

    }, [restDataSource])
    return (
        <>
            <h1>hele</h1>
            {
                // dataApplication.map((app, index) => {
                //     return (
                //         <div key={index} className="col-sm-10 mt-4 ">
                //             <div className="card bg-dark text-white ">
                //                 <img src={corver} className="card-img img-fluid" alt="..." />
                //                 <div className="card-img-overlay">
                //                     <FiEdit className="edit-icon" />
                //                     <MdDelete className="deleet-icon" />
                //                     <h5 className="card-title">{app.nom}</h5>
                //                     <h5 className="card-text">{app.client}</h5>
                //                     <p className="card-text">{app.description}</p>
                //                     <p className="card-text">{app.langage}</p>
                //                 </div>
                //             </div>
                //         </div>

                //     )
                // })
            }
        </>
    )
}
