import React from 'react';
import "./Card.css";

import { Link } from "react-router-dom";

const Card = ({ id, cover, title }) => {
    return (
        <Link to={`/projet/${id}`}>
            <li className="Card" id={id}>
                <img className="Card-image" src={"http://localhost:3000/Images/" + cover} alt="ImagePrincipal du projet " />
                <h3 className="Card-titre">{title}</h3>
            </li>
        </Link>
    );
};

export default Card;