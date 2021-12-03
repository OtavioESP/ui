import React, { useEffect, useState } from "react";
import Header from "../Header/Header"
import CardV2 from "./BodyComponents/CardV2";
import axios from "axios";
import './Body.css';


const Body = () => {

    const [posts, setPosts] = useState()
    const [postArea, setPostArea] = useState(false)
    const [postTitle, setPostTitle] = useState("")
    const [postText, setPostText] = useState("")

    const fetchPosts = async () => {
        await axios.get(`http://localhost:8000/posts/`)
            .then(Response => setPosts(Response.data))
            .catch(err => alert("Fudeu"))
    }

    const updatePostLikes = async (id, Curtidas) => {
        await axios.patch(`http://localhost:8000/posts/${id}/`, { curtidas: Curtidas })
            .then(fetchPosts)
            .catch(err => alert("O post selecionado, não existe, por favor recarregue a pagina !"))
    }

    const createPosts = async () => {
        await axios.post(`http://localhost:8000/posts/`,
            {
                usuario: parseInt(localStorage.getItem("id")),
                titulo: postTitle,
                texto: postText,
                curtidas: 0
            }
        )
            .then(Response => alert("Criado com sucesso ! Status: " + Response.status))
            .then(fetchPosts)
            .catch(Response => alert("Algo de errado nao esta certo ! Status: " + Response.status))
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const handleModal = () => {
        setPostArea(!postArea)
    }

    const addLike = (id, Curtidas) => {
        updatePostLikes(id, Curtidas + 1)
    }

    return (
        <div>
            <Header />
            <div className="card-renderer">
                {postArea ?
                    <div>
                        <textarea label="titulo" onChange={(e) => setPostTitle(e.target.value)} className="titulo" placeholder="Estou pensando sobre..." />
                        <br />
                        <textarea label="texto" onChange={(e) => setPostText(e.target.value)} className="texto" placeholder="Sobre isso..." />
                        <br />
                        <button className="button" onClick={createPosts}> Enviar </button>
                    </div>
                    :
                    <button className="button" onClick={handleModal}> Estou pensando que... </button>
                }
                {posts && posts.map(post =>
                    <div className="card-renderer">
                        <CardV2
                            id={post.id}
                            NomeUsuario={post.nome_usuario}
                            DataCriacao={post.data_criacao}
                            Texto={post.texto}
                            Titulo={post.titulo}
                            Curtidas={post.curtidas}
                            onLikeClick={addLike}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Body
