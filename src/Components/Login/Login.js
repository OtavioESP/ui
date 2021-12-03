import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

  let navigate = useNavigate();

  const [allUsers, setAllUsers] = useState([]);
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [createAccount, setCreateAccount] = useState(false)




  const handleLogin = async () => {
    for (var i in allUsers) {
      if (userName == allUsers[i].username && password == allUsers[i].senha) {
        console.log(allUsers[i])
        localStorage.setItem("id",allUsers[i].id)
        localStorage.setItem("user",allUsers[i].username)
        navigate("/body")
      }

    }
  }

  const createUser = async () => {
    await axios.post(`http://localhost:8000/usuarios/`, {
      username: userName,
      email: email,
      senha: password,
    })
    .then(() => setCreateAccount(!createAccount), fetchUsers())
    .catch(() => alert("Houve um erro!"))
  }

  const fetchUsers = async () => {
    await axios.get(`http://localhost:8000/usuarios/`)
    .then(Response => setAllUsers(Response.data))
    .catch(() => alert("Houve um erro ao carregar o login, API conectada?"))
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  

  return (
    <div className="body">
      <div className="main">
      <p className="branch" align="center">Tuíster</p>
        <p className="sign" align="center">Sign in</p>
        <form className="form1">
          <input placeholder="Usuario" type="text" align="center" className="un" onChange={e => setUserName(e.target.value)} />
          <input placeholder="Senha" type="password" align="center" className="pass" onChange={e => setPassword(e.target.value)} />
        </ form>
        <button className="submit" onClick={handleLogin}> Login </button>
        <br />
        <br />
        {
          createAccount ?
            <div>
              <input placeholder="Usuario de no maximo 30 digitos" className="un" onChange={e => setUserName(e.target.value)} />
              <input placeholder="Email" className="un" onChange={e => setEmail(e.target.value)} />
              <input placeholder="Senha de no maximo 30 digitos" type="password" className="un" onChange={e => setPassword(e.target.value)} />
              <button className="submit" onClick={createUser}> Criar usuario </button>
            </div>
            :
            <button className="submit" onClick={() => setCreateAccount(!createAccount)}> Deseja criar um usuario ?? </button>
        }
      </div>
      <br />
    </div>
  )
}

export default Login;
