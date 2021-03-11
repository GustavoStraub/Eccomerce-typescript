import { useContext, useState, useEffect } from "react"
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

  const { Cart, HandleCartOpen, isCartOpened, Total } = useContext(CartContext)

  useEffect(() => {

  }, [Cart])

  return (
    <div style={{ right: isCartOpened ? '0%' : '-80%' }} className={styles.Wrapper}>
      <h1 style={{ cursor: 'pointer' }} onClick={HandleCartOpen}>X</h1>
      <h4>TOTAL: R${Total.toFixed(2)}</h4>
      <div className={styles.WrapperCart}>
        <div className={styles.CartItems}>
          {Cart.map(Item => (
            <div key={Item.id}>
              <h2>{Item.name}</h2>
              <img src={Item.imageUrl} />
              <p>Quantidade: {Item.qtd}</p>
              <span>Preço: R${(Item.price * Item.qtd).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
