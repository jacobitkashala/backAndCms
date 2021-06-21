import React from 'react'

export default function EditCompetence({addCompetence}) {
    return (
        <>
            <input type="text" className="form-control mt-2" placeholder="Nom technologie " />
            <input type="text" className="form-control mt-2" placeholder="niveau Ex: 60% " />
            <button type="button" className="btn btn-secondary mt-2"  > <FaCross onClick={
                addCompetence()} />Ad </button>
        </>
    )
}
