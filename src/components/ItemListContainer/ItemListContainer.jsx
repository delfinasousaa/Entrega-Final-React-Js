import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { db } from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams()

    useEffect(() => {
        const misProductos = idCategoria 
            ? query(collection(db, 'productos'), where('idCat', '==', idCategoria)) 
            : collection(db, 'productos')

        getDocs(misProductos)
        .then(res => {
            const nuevosProductos = res.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProductos(nuevosProductos)
        })
        .catch(err => console.log(err))
        .finally(() => console.log('Se terminó de cargar los productos')) 
    }, [idCategoria]) 

    return (
        <div className='especial'>
            <h2 style={{ textAlign: 'center', fontSize: '40px', color: '#ffff', backgroundColor: ' #200040', padding: '20px', marginBottom: '0' }}>
                Nuestros productos
            </h2>
            <ItemList productos={productos} />
        </div>
    )  
}

export default ItemListContainer
