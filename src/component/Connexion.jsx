import auth from '../util/Auth'
import { useHistory } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import { RestDataSource } from "../webService/RestDataSources";
import React, { useRef, useEffect, useState } from 'react';

export default function Connexion() {

    const history = useHistory();

    const refUserName = useRef(null);
    const refPassword = useRef(null);

    const [loginData, setLoginData] = useState([]);

    const urlLogin = 'http://localhost:8080/api/information/login';

    let userPassworwordValue, userNmeValue, loginUser = [];

    useEffect(() => {
        const restData = new RestDataSource(urlLogin);
        restData.getData(data => setLoginData(data));
    }, [])

    const onClickUserName = () => {
        userNmeValue = refUserName.current.value;
    }
    const onClickPassword = () => {
        userPassworwordValue = refPassword.current.value;
    }

    const onClickValide = (userLogin) => {

        console.log(userLogin["user"], userLogin["password"])

        const { username, passwd } = loginData[0];

        console.log(username, passwd);

        if (username === userLogin["user"] &&
            passwd === userLogin["password"]) {

            auth.login(() => {
                history.push("/application")
            })

        }

    }

    return (
        <>
            <div className=" d-flex flex-row justify-content-center row connex">
                <h1 style={{ textAlign: "center" }}>Connexion</h1>
                <FaUserAlt className="" style={{ fontSize: "150px" }} />
                <div className="  col-4">
                    <label>UserName</label>
                    <input type="text" className="form-control mt-3" ref={refUserName} onChange={onClickUserName} />
                </div>
                <div className=" col-4">
                    <label>Password</label>
                    <input type="password" className="form-control mt-3" ref={refPassword} onChange={onClickPassword} />
                </div>
                <button type="button" className="btn btn-secondary mt-2 col-sm-7" onClick={() => {
                    loginUser["user"] = userNmeValue;
                    loginUser["password"] = userPassworwordValue;
                    refPassword.current.value = ""
                    refUserName.current.value = ""
                    onClickValide(loginUser)
                }}  > valider </button>
            </div>
        </>
    )
}
