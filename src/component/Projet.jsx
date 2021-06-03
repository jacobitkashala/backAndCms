import React,{useRef,
    useState,useEffect,
    } from 'react';
import {FaCross} from 'react-icons/fa';
import data from '../Data/DataPersonne';
//import Image from 'cloudinary-react'


export default function Projet() {

   const {projetRealiser}=data;
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

    useEffect(() => {
      if(fileImage){
        const reader=new FileReader();
      
       reader.onload=()=>{
            setpreview(reader.result);
        }
        reader.readAsDataURL(fileImage);
      }else{

    }
       
   },[]);
   //console.log(preview);
   const onDownloadImage=(event)=>{
       const file=event.target.files[0]
       
    if(file && file.type.substr(0,5)==="image"){
        
        setfileImage(file);
    }else{
        setfileImage(null);

    }
   }
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
                                <td> <img src={preview} alt={pathImage} /></td>

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
                    <input  type="file" accept="image/*" multiple={false} ref={refIputFil} className="form-control form-control  mt-2" onChange={onDownloadImage}  /> 
                    <input type="text" className="form-control mt-2" placeholder="Langage utiliser Ex:C,CS,Js "  />
                    <input type="text" className="form-control mt-2" placeholder="Nom client"  />
                    <button type="button" className="btn btn-secondary mt-2" onClick={onClickAddProjet} > <FaCross/>Ad </button> 
                </div>
            </div>    
        </>
    )
}
