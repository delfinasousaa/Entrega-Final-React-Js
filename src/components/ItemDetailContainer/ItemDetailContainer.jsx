import { useState, useEffect } from 'react'
import { getUnProducto } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../services/config'
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const {idItem} = useParams()

    useEffect (() => {
      const nuevoDoc = doc(db, 'productos', idItem)

      getDoc (nuevoDoc)
      .then (res => {
        const data = res.data()
        const nuevosProductos = {id: res.id, ...data}
        setProducto(nuevosProductos)
      })

    }, [idItem])

  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer