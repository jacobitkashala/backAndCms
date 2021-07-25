import React, { useRef } from 'react';
import { FaCross } from 'react-icons/fa';

export default function EditCompetence({ addCompetence }) {
    const refPouc = useRef(null);
    const refNameComp = useRef(null);
    const Compet = {}
    const clean = () => {
        refNameComp.current.value = "";
        refPouc.current.value = "";
        Compet.nameCompt = "";
        Compet.levelCompt = "";
    }
    return (
        <>
            <input type="text" onChange={(event) => { Compet.nameCompt = event.target.value }} ref={refPouc} className="form-control mt-2" placeholder="Nom technologie " />
            <input type="text" onChange={(event) => { Compet.levelCompt = event.target.value }} ref={refNameComp} className="form-control mt-2" placeholder="niveau Ex: 60 " />
            <button type="button" className="btn btn-secondary mt-2"  > <FaCross onClick={
                () => {
                    addCompetence(Compet);
                    console.log(Compet);
                    clean();
                }
            } />Ad </button>
        </>
    )
}
