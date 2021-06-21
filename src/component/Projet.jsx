// id:"",
// nom:"cloneCinema",
// description:"une application de cinéma qui utilise l API de movieDB",
// image:"",
// langageid:["langage1","langage6","langage3"],
// langage:["Css","Html","js"],
// client:
//acceptedFile=fileImage
//    const imageCopy=useCallback(
//         (acceptedFiles) => {
//          const url=`https://api.cloudinary.com/v1_1/zenderp/upload`;

//             acceptedFiles.forEach( async(acceptedFile) => {

//                 const formData =new FormData();
//                 formData.append("file",acceptedFile)
//                 formData.append('Upload_presets','tfb8i478')

//                 const reponse=await fetch(url,
//                 {method:'post',
//                 body:formData})
//                 const data=await reponse.json();
//                 console.log(data) 

//             });

//         },
//        [],
//    )
import React, { useMemo, useState, useEffect, useCallback } from 'react';
import CardListApplication from "./CardApplications";
import EditCardApplication from "./EditCardApplication";
import { RestDataSource } from "../webService/RestDataSources";
import Joi from "joi";
//import Image from 'cloudinary-react'

export default function Projet() {
    const [dataApplication, setDataApplication] = useState();

    const restDataSource = useMemo(() => {
        return new RestDataSource("http://localhost:8080/api/application");
    }, [])

    const modelJoi = Joi.object({
        nameApp: Joi.string()
            .alphanum()
            .min(1)
            .required(),
        nameClient: Joi.string()
            .alphanum()
            .min(1)
            .required(),
        descrApp: Joi.string()
            .required()
            .min(5),
        langApp: Joi.string()
            .min(2)
            .required()
    });

    const appAdd = useCallback(
        (newApp) => {
            const { error, value } = modelJoi.validate(newApp);
            if (value !== undefined) {
                console.log(error);
                if (!error) {
                    const { descrApp, langApp, nameApp, nameClient } = value;
                    let dataLang = langApp.split(",")
                    let dataApp = { descrApp, nameApp, nameClient }
                    console.log("dataApp", dataApp);
                    console.log("dataLang", dataLang);
                    restDataSource.Post(dataApp);
                }
            }
        },
        [modelJoi, restDataSource],
    )

    const appUpdate = useCallback((idApp) => {
        restDataSource.Update(idApp);
    }, [restDataSource]);

    const appDelete = useCallback((idApp) => {
        restDataSource.Delete(idApp);
    }, [restDataSource]);

    useEffect(() => {
        restDataSource.getData(async (data) => {
            setDataApplication(data);
        })
    }, [restDataSource])
    // , appAdd,appUpdate,appDelete

    return (
        <>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, marginTop: "10%" }}>Application</h2>
            <div className="row contenaire-projet">
                <div className="col-sm-7">
                    <CardListApplication dataApplication={dataApplication}
                        appUpdate={appUpdate} appDelete={appDelete} />
                </div>
                <div className="col-sm-4" style={{ position: "fixed", right: "100px", top: "10%" }}>
                    <EditCardApplication appAdd={appAdd} />
                </div>
            </div>
        </>
    )
}
