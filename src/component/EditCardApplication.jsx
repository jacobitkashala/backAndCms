import React,{useState,useRef,useEffect} from 'react'
import { FaCross } from 'react-icons/fa';

export default function EditCardApplication() {

    const [fileImage, setfileImage] = useState();
    const [preview, setpreview] = useState();
    const refIputFil = useRef(null);
    let newApp = {}

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

    const onDownloadImage = (event) => {
        const file = event.target.files[0]

        if (file && file.type.substr(0, 5) === "image") {
            setfileImage(file);
        } else {
            setfileImage(null);
        }
    }

    const onClickAddProjet = () => {
        console.log(newApp)

    }
    return (
        <>
            <input type="text" className="form-control mt-2" placeholder="Nom Application" onChange={(event) => {
                newApp.namApp = event.target.value;
            }} />
            <textarea className="form-control mt-2" placeholder="Description du projet" onChange={(event) => {
                newApp.descApp = event.target.value;
            }} />
            <input type="text" className="form-control mt-2" placeholder="Langage utiliser Ex:C,CS,Js" onChange={(event) => {
                newApp.langApp = event.target.value;
            }} />
            <input type="text" className="form-control mt-2" placeholder="Nom client" onChange={(event) => {
                newApp.namClient = event.target.value;
            }} />
            <input type="file" accept="image/*" multiple={false} ref={refIputFil} className="form-control form-control  mt-2" onChange={onDownloadImage} />
           <div className="row">
               <img src={preview} className="img-fluid mt-1 img-view" alt="" />
           </div>
            
            <button type="button" className="btn btn-secondary mt-2" onClick={onClickAddProjet} > <FaCross />Ad </button>
        </>
    )
}
