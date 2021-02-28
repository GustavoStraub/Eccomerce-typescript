import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import styles from '../styles/components/Cart.module.css'

interface ProductProps {
  id: number
  name: string,
  price: number,
  imageUrl: string
}

export default function Cart() {

  const [cartList, setCartList] = useState<ProductProps[]>([])
  const [isCartOpened, setIsCartOpened] = useState(true)
  const { Cart } = useContext(CartContext)

  return (
    <div style={{ right: isCartOpened ? '0%' : '-30%' }} className={styles.Wrapper}>
      <h1 onClick={() => setIsCartOpened(false)}>X</h1>
      <div className={styles.CartItems}>
        {Cart.map(Item => (
          <p>{Item.name}</p>
        ))}
      </div>
    </div>
  )
}
