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


import React, {
    useRef,
    useState,
    useEffect,
    useMemo
} from 'react';
import data from '../Data/DataPersonne';
import CardListApplication from "./CardApplications"
//import Image from 'cloudinary-react'

export default function Projet() {

    const { projetRealiser } = data;
  



    useEffect(() => {
        // if (fileImage) {
        //     const reader = new FileReader();

        //     reader.onload = () => {
        //         setpreview(reader.result);
        //     }
        //     newApp.image = preview;
        //     reader.readAsDataURL(fileImage);
        //     console.log(preview);
        // }


    }, []);



    return (
        <>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, marginTop: "10%" }}>Application</h2>
            <div className="row contenaire-projet">
                <div className="col-sm-7">
                    <CardListApplication />
                </div>
                <div className="col-sm-4" style={{ position: "fixed", right: "100px", top: "10%" }}>

                </div>
            </div>
        </>
    )
}
