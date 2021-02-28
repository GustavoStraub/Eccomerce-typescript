import Head from 'next/head'
import { useContext, useState } from 'react'
import Cart from '../components/Cart'
import Product from '../components/Product'
import { CartContext } from '../contexts/CartContext'
import styles from '../styles/Home.module.css'


export default function Home() {
  const { products, HandleCartOpen } = useContext(CartContext)
  console.log(products)
  return (
    <div>
      <Head>
        <title>Typescript Ecommerce</title>
      </Head>

      <Cart />
      <div className={styles.Header}>
        <h2 className={styles.PageTitle}>Produtos</h2>
        <h2
          onClick={HandleCartOpen}
          className={styles.PageTitle}>
          Carrinho
          </h2>
      </div>
      <hr />
      <div className={styles.List}>
        {products.map(product => (
          <Product
            id={product.id}
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price} />
        ))}
      </div>
    </div>
  )
}
