import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='card-container'>
        <img className='img-card' src={img} alt={nombre} />
        <h3 className='title-card'>{nombre}</h3>
        <p className='price-card'>${precio}</p>
        <p className='id-container'>{id}</p>
        <Link className='link' to={`/item/${id}`}>Ver más</Link>
    </div>
  )
}

export default Item
