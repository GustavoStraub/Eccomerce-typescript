import Head from 'next/head'
import { useContext, useState } from 'react'
import Cart from '../components/Cart'
import ItemAddedBox from '../components/ItemAddedBox'
import Product from '../components/Product'
import { CartContext } from '../contexts/CartContext'
import styles from '../styles/Home.module.css'


export default function Home() {
  const { products, HandleCartOpen } = useContext(CartContext)

  return (
    <div>
      <Head>
        <title>Typescript Ecommerce</title>
      </Head>

      <Cart />
      <div className={styles.Header}>
        <h2 className={styles.PageTitle}>Produtos</h2>
        <img
          style={{ cursor: 'pointer' }}
          onClick={HandleCartOpen}
          className={styles.PageTitle}
          src='/cart.png'
          width='50px'>
        </img>
      </div>
      <hr />
      <div className={styles.List}>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price} />
        ))}
      </div>
      <ItemAddedBox />
    </div>
  )
}
