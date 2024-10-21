export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (misProductos)
        }, 0);
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
           const producto = misProductos.find(item => item.id === id)
           resolve(producto)
        }, 0)
    })
}

export const getProductosPorCat = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout (() => {
            const producto = misProductos.filter(item=> item.idCat === idCategoria)
            resolve(producto)
        }, 0);
    })
    }