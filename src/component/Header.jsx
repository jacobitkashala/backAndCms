import React from 'react';
import { NavLink, Link } from "react-router-dom";

export default function Header() {

    return (
        <>
            <div className="row mt-3">
                <div className=" col-10 nav navigation">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink exact to="/">
                                Projet
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/Competence/">
                                Competence
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}