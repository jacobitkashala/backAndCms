import React, {
    useRef,
    useState, useEffect,
} from 'react';
import { FaCross } from 'react-icons/fa';
import data from '../Data/DataPersonne';
import { FiEdit } from "react-icons/fi"
import corver from "../Images/voiture.jpeg"
//import Image from 'cloudinary-react'

export default function Projet() {

    const { projetRealiser } = data;
    const [fileImage, setfileImage] = useState()
    const [preview, setpreview] = useState()
    const refIputFil = useRef(null)
    let pathImage;
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
  
    const cardProjets = projetRealiser.map((app, index) => {
        return (
            <div key={index} className="col-sm-10 mt-4 ">
                <div className="card bg-dark text-white ">
                    <img src={corver} className="card-img img-fluid" alt="..." />
                    <div className="card-img-overlay">
                        <FiEdit className="edit-icon" />
                        <h5 className="card-title">{app.nom}</h5>
                        <h5 className="card-text">{app.client}</h5>
                        <p className="card-text">{app.description}</p>
                        <p className="card-text">{app.langage}</p>
                    </div>
                </div>
            </div>

        )
    })

    useEffect(() => {
        if (fileImage) {
            const reader = new FileReader();

            reader.onload = () => {
                setpreview(reader.result);
            }
            reader.readAsDataURL(fileImage);
        } else {

        }

    }, [fileImage]);
    console.log(preview) ;
    const onDownloadImage = (event) => {
        const file = event.target.files[0]

        if (file && file.type.substr(0, 5) === "image") {

            setfileImage(file);
            
        } else {
            setfileImage(null);

        }
    }
    const onClickAddProjet = () => {

        console.log("add")
    }

    return (
        <>
            <h2 style={{ fontSize: "3rem", fontWeight: 900,marginTop: "10%" }}>Projet</h2>
            <div className="row contenaire-projet">
                <div className="col-sm-7">
                    {
                        cardProjets
                    }

                </div>
                <div className="col-sm-4" style={{ position: "fixed",right:"100px",top:"0px" }}>
                    <input type="text" className="form-control mt-2" placeholder="Nom Projet " />
                    <textarea className="form-control mt-2" placeholder="Description du projet" ></textarea>
                    <input type="text" className="form-control mt-2" placeholder="Langage utiliser Ex:C,CS,Js " />
                    <input type="text" className="form-control mt-2" placeholder="Nom client" />
                    <input type="file" accept="image/*" multiple={false} ref={refIputFil} className="form-control form-control  mt-2" onChange={onDownloadImage} />
                    <img src={preview} className="img-fluid mt-1 img-view"  alt="" />
                    <button type="button" className="btn btn-secondary mt-2" onClick={onClickAddProjet} > <FaCross />Ad </button>
                </div>
            </div>
        </>
    )
}
