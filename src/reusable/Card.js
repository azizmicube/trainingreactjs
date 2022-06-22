import React from 'react'
import './Card.css';
import '../bootstrap.min.css'

const Card = ({imageSrc, title}) => {
  return (
    <div className="cardWrapper">
        <a href="#">
            <img className="cardImage" src={imageSrc} alt={title}/>
            <p className="cardtext">{title}</p>
        </a>
    </div>
  )
}

export default Card