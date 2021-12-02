import React, { useEffect, useState } from "react";
import CardV2 from "./BodyComponents/CardV2";
import axios from "axios";
import './Body.css';


const Body = () => {

    const [posts, setPosts] = useState()
    const [postModal, setPostModal] = useState(false)

    const vart = {
        "usuario": 1,
        "titulo": "Formatacoes de texto",
        "texto": "LOREM IPSUM",
        "curtidas": 4
    }

    const fetchPosts = async () => {
        await axios.get(`http://localhost:8000/posts/`)
            .then(Response => setPosts(Response.data))
            .catch(err => alert("Fudeu"))
    }

    const updatePostLikes = async (id, Curtidas) => {
        await axios.patch(`http://localhost:8000/posts/${id}/`, {curtidas:Curtidas} )
            .then(fetchPosts)
            .catch(err => alert("O post selecionado, não existe, por favor recarregue a pagina !"))
    }

    useEffect(() => {
        fetchPosts()
    }, [])


    const createPosts = async () => {
        await axios.post(`http://localhost:8000/posts/`, vart)
            .then(Response => alert("Criado com sucesso ! Status: " + Response.status))
            .catch(Response => alert("Algo de errado nao esta certo ! Status: " + Response.status))
    }

    const handleModal = () => {
        setPostModal(!postModal)
        console.log(postModal)
    }

    const addLike = (id, Curtidas) => {
        updatePostLikes(id, Curtidas+1)
    }

    return (
        <div className="card-renderer">
            <div>
                <textarea className="textarea" placeholder="Estou pensando em..."/>
            </div>
            <button className="button" onClick={handleModal}> Estou pensando que... </button>

            <button onClick={createPosts}> aa </button>

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
    )
}

export default Body
