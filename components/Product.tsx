import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import styles from '../styles/components/Product.module.css'

interface ProductProps {
  name: string,
  price: number,
  imageUrl: string,
  product: object
}

export default function Product(props: ProductProps) {

  const { addProductToCart } = useContext(CartContext)



  return (
    <div onClick={() => addProductToCart(props.product)}
      className={styles.Product}>
      <h3>{props.name}</h3>
      <img src={props.imageUrl} alt={props.name} />
      <p>R${props.price.toFixed(2)}</p>
      <button>
        <span>Adcionar ao carrinho </span>
      </button>
    </div>
  )
}
