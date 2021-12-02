import React from "react";


const InputPost = ({ updatePosts }) => {

    return (
        <div>
            <input  placeholder="Estou pensando..." />
            <button onClick={updatePosts}> Enviar </button>
        </div>
    )
}

export default InputPost;