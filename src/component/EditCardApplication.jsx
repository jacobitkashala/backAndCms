import React, { useState, useRef, useEffect, useMemo } from 'react';
import { FaCross } from 'react-icons/fa';

export default function EditCardApplication({onClickAddProjet}) {

    const [fileImage, setfileImage] = useState();
    const [preview, setpreview] = useState();

    const refIputFil = useRef(null);
    const refNameApp = useRef(null);
    const refDescApp = useRef(null);
    const refLangApp = useRef(null);
    const refClientApp = useRef(null);

    let newApp = useMemo(() => {
        let newApp = {};
        return newApp;
    }, [])
    useEffect(() => {

        if (fileImage) {
            const reader = new FileReader();
            reader.onload = () => {
                setpreview(reader.result);
            }
            newApp.image = preview;
            reader.readAsDataURL(fileImage);
            console.log(preview);
        }

    }, [fileImage, newApp, preview]);

    const onDownloadImage = (event) => {
        const file = event.target.files[0]
        if (file && file.type.substr(0, 5) === "image") {
            setfileImage(file);
        } else {
            setfileImage(null);
        }
    }

    const clean = () => {
        refNameApp.current.value = "";
        refDescApp.current.value = "";
        refLangApp.current.value = "";
        refClientApp.current.value = "";
        newApp.nameApp = "";
        newApp.descrApp = "";
        newApp.langApp = "";
        newApp.nameClient = "";

    }

    return (
        <>
            <input type="text" className="form-control mt-2" ref={refNameApp} placeholder="Nom Application" onChange={(event) => {
                newApp.nameApp = event.target.value;
            }} />
            <textarea className="form-control mt-2" ref={refDescApp} placeholder="Description du Application" onChange={(event) => {
                newApp.descrApp = event.target.value;
            }} />
            <input type="text" className="form-control mt-2" ref={refLangApp} placeholder="Langage utiliser Ex:C,CS,Js" onChange={(event) => {
                newApp.langApp = event.target.value;
            }} />
            <input type="text" className="form-control mt-2" ref={refClientApp} placeholder="Nom client" onChange={(event) => {
                newApp.nameClient = event.target.value;
            }} />
            <input type="file" accept="image/*" multiple={false} ref={refIputFil} className="form-control form-control  mt-2" onChange={onDownloadImage} />
            <div className="row">
                <img src={preview} className="img-fluid mt-1 img-view" alt="" />
            </div>
            <button type="button" className="btn btn-secondary mt-2" onClick={() => {
                onClickAddProjet(newApp);
                 clean();
            }} > <FaCross />Ad </button>
        </>
    )
}
