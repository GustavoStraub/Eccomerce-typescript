import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import styles from '../styles/components/Product.module.css'

interface ProductProps {
  id: number
  name: string,
  price: number,
  imageUrl: string
}

export default function Product(props: ProductProps) {

  function addProductToKart(id: number) {
    alert(id)
  }



  return (
    <div onClick={() => addProductToKart(props.id)} 
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
