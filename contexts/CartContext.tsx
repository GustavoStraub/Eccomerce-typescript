import { createContext, ReactNode, useState } from "react";

interface CartProps {
  products: Products[],
  Cart: Products[],
  HandleCartOpen: () => void;
  isCartOpened: boolean
}

interface CartProvider {
  children: ReactNode
}
export const CartContext = createContext({} as CartProps)

interface Products {
  id: number,
  name: string,
  price: number,
  imageUrl: string
}
export function CartProvider({ children }: CartProvider) {

  const [products, setProducts] = useState<Products[]>([
    {
      id: 0,
      name: 'Lápis Bic',
      price: 2.30,
      imageUrl: 'https://www.papelmoderno.com.br/image/cache/data/032933-1000x1000.jpg'
    },
    {
      id: 1,
      name: 'Borracha Bic',
      price: 2.50,
      imageUrl: 'https://storage.googleapis.com/facily-images/Borracha-Branca-Eraser-Bic-1547659472.png'
    },
    {
      id: 2,
      name: 'Caneta Bic',
      price: 3,
      imageUrl: 'https://cdn.iset.io/assets/48768/produtos/287/bicazfina.jpg'
    }
  ])

  const [Cart, setCart] = useState([
    {
      id: 0,
      name: 'Lápis Bic',
      price: 2.30,
      imageUrl: 'https://www.papelmoderno.com.br/image/cache/data/032933-1000x1000.jpg'
    },
  ])

  const [isCartOpened, setIsCartOpened] = useState(false)

  function HandleCartOpen() {
    setIsCartOpened(!isCartOpened)
  }

  return (
    <CartContext.Provider
      value={{
        products,
        Cart,
        HandleCartOpen,
        isCartOpened
      }}>
      {children}
    </CartContext.Provider>
  )
}