import { allProducts } from '../data/Products'
import ProductCard from './ProductCard'
import { useState } from 'react'

/* Es el componente padre */
function Products() {

  const [cart, setCart] = useState([])
  const [message, setMessage] = useState("")

  // agregar productos al carrito
  const addToCart = (product) => {

    // validar que no se agregue dos veces
    const exists = cart.find(el => el.code === product.code)

    if (exists) {
      setMessage("El producto ya está en el carrito")
      return
    }

    setCart([...cart, product])
    setMessage("Producto agregado con éxito")
  }

  // eliminar producto del carrito
  const removeProduct = (code) => {
    const newCart = cart.filter(item => item.code !== code)

    setCart(newCart)
    setMessage("Producto eliminado con éxito")
  }

  // limpiar carrito
  const clearCart = () => {
    setCart([])
    setMessage("Carrito limpiado")
  }

  return (
    <div>

      {message && <p>{message}</p>}

      <section>
        <h2>Productos</h2>

        {allProducts.map(product => (
          <ProductCard
            key={product.code}
            product={product}
            onAdd={addToCart}
          />
        ))}

      </section>

      <section>

        <h2>Carrito</h2>

        <ul>
          {cart.map(item => (
            <li key={item.code}>
              {item.name} - ${item.price}

              <button onClick={() => removeProduct(item.code)}>
                Eliminar producto
              </button>
            </li>
          ))}
        </ul>

        <h3>
          Total: $
          {cart.reduce((total, item) => total + item.price, 0)}
        </h3>

        <button onClick={clearCart}>
          Limpiar carrito
        </button>

        <button>Comprar</button>

      </section>

    </div>
  )
}

export default Products