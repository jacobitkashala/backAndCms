import React from 'react';
import { NavLink } from "react-router-dom";
import { AiFillCode } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";


export default function Header() {

    return (
        <>
            <div className="row">
                <div className="nav navigation" style={{
                    width: "80%",
                    marginBottom: "40px", position: "fixed", zIndex: "4", top: "0", background: "#d67a27"
                }}>
                    <ul className="nav nav-pills">
                        <li className="nav-item col-4">
                            <NavLink exact to="/user">
                                <AiFillCode className="font-icone" />
                            </NavLink>
                        </li>
                        <li className="nav-item px-3 col-4">
                            <NavLink exact to="Competence">
                                <GiSkills className="font-icone" />
                            </NavLink>
                        </li>
                        <li className="nav-item px-3 col-4">
                            <NavLink exact to="/detail/User/">
                                <FaUserCircle className="font-icone" />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}