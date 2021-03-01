import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import styles from '../styles/components/ItemAddedBox.module.css'

export default function ItemAddedBox() {
  const { ItemAdded } = useContext(CartContext)
  return (
    <>

      <div
        className={styles.container}
        style={{ opacity: ItemAdded ? '1' : '0' }}>
        <p>Item added to cart !</p>
      </div>
    </>
  )
}
