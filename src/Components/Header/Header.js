import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Header.css';



const Header = () => {

    const [profileInfos, setProfileInfos] = useState([])

    const fetchUserData = async () => {

      await  axios.get(`http://localhost:8000/posts/`)
        .then(Response => setProfileInfos(Response.data))
        .catch("bugou")

    }

    useEffect(() => {
        fetchUserData()
    }, [])
    

    return(
        <div className="header">
        <a className="logo">Tuíster</a>
        <div className="header-right">
            <a className="active" href="home">Home</a>
            <a href="contact">Contact</a>
            <a href="about">About</a>
        </div>
        </div>
      
    )
}

export default Header