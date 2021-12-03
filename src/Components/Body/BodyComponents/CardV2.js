import React from "react";
import "./CardV2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid'
import { faHeart as faHeartRegular } from '@fortawesome/fontawesome-free-regular'


export default function CardV2({ id, NomeUsuario, DataCriacao, Titulo, Texto, Curtidas, onLikeClick }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">
            {NomeUsuario}
          </span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">
            {NomeUsuario}
          </h5>
          <div className="card-date">
            {"@" + NomeUsuario}
          </div>
        </div>
      </div>
      <div className="card-title">
        {Titulo}
      </div>
      <br />
      <div className="card-text">
        {Texto}
      </div>
      <div className="card-like-bar">
        {Curtidas > 0 ? (
          <div>
            <button
              className="like-button"
              onClick={() => onLikeClick(id, Curtidas)}>
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <br />
            {Curtidas}
          </div>
        ) : (
          <div>
            <button
              className="like-button"
              onClick={() => onLikeClick(id, Curtidas)}>
          <FontAwesomeIcon icon={faHeartRegular} />
          </button>
            <br />
            {Curtidas}
          </div>
        )}
        <div className="like-text">
          <b>{DataCriacao}</b>
        </div>
      </div>
    </div>
  );
}