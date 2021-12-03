import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { faArrowAltCircleRight } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Header = () => {

    let navigate = useNavigate();

    const [profileInfos, setProfileInfos] = useState([])

    const atributeData = () => {
        setProfileInfos(localStorage.getItem("user"))
    }

    const leavePage = () => {
        navigate("/")
    }

    useEffect(() => {
        atributeData()
    }, [])


    return (
        <div className="header">
            <a className="logo">Tuíster</a>
            <div className="header-right">
            <span className="profile-content">
                {profileInfos}
            </span>
                <a className="active" href="home">Home</a>
                <a href="contact">Contact</a>
                <a href="about">About</a>
                <button
                    className="like-button"
                    onClick={leavePage}
                >
                    <FontAwesomeIcon icon={faArrowAltCircleRight} size={"2x"} />
                </button>

            </div>
        </div>

    )
}

export default Header