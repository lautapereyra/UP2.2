/* El componente padre le pasa a este la info mediante props */

function ProductCard({ product, onAdd }) {

    return (
        <div>
            <h3>{product.name}</h3>
            <p>precio: ${product.price}</p>
            <p>Disponible: {product.isAvailable ? "Disponible" : "No Disponible"}</p>
            <button
                onClick={() => onAdd(product)}
                disabled={!product.isAvailable}
            >Agregar al carrito</button>
        </div>
    )
}

export default ProductCard;