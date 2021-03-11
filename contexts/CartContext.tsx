import { createContext, ReactNode, useState, useEffect } from "react";

interface CartProps {
  products: Products[],
  Cart: Products[],
  HandleCartOpen: () => void;
  addProductToCart: Function;
  isCartOpened: boolean;
  ItemAdded: boolean;
  Total: number
}

interface CartProvider {
  children: ReactNode
}
export const CartContext = createContext({} as CartProps)

interface Products {
  id: number,
  name: string,
  price: number,
  imageUrl: string,
  qtd: number
}
export function CartProvider({ children }: CartProvider) {

  const [products, setProducts] = useState<Products[]>([
    {
      id: 0,
      name: 'Lápis Bic',
      price: 2.30,
      imageUrl: 'https://www.papelmoderno.com.br/image/cache/data/032933-1000x1000.jpg',
      qtd: 1
    },
    {
      id: 1,
      name: 'Borracha Bic',
      price: 2.50,
      imageUrl: 'https://storage.googleapis.com/facily-images/Borracha-Branca-Eraser-Bic-1547659472.png',
      qtd: 1
    },
    {
      id: 2,
      name: 'Caneta Bic',
      price: 3,
      imageUrl: 'https://cdn.iset.io/assets/48768/produtos/287/bicazfina.jpg',
      qtd: 1
    }
  ])

  const [Cart, setCart] = useState<Products[]>([])

  const [isCartOpened, setIsCartOpened] = useState(false)
  const [ItemAdded, setItemAdded] = useState(false)
  const [Total, setTotal] = useState<number>(0)

  useEffect(() => {
    GetTotalPrice()
  }, [Cart])

  function HandleCartOpen() {
    setIsCartOpened(!isCartOpened)
  }

  function GetTotalPrice() {
    let TotalPrice = 0
    for (let i = 0; i < Cart.length; i++) {
      const product = Cart[i]
      TotalPrice = TotalPrice + product.price * product.qtd
    }
    setTotal(TotalPrice)
  }

  function addProductToCart(product: Products) {
    if (Cart.includes(product)) {

      Cart.forEach(Item => {
        Item.id == product.id && Item.qtd++
      })
      GetTotalPrice()
    }
    else {
      setCart([...Cart, product])
    }
    setItemAdded(true)
    setTimeout(() => {

      setItemAdded(false)
    }, 1500);

  }

  return (
    <CartContext.Provider
      value={{
        products,
        Cart,
        HandleCartOpen,
        isCartOpened,
        addProductToCart,
        ItemAdded,
        Total
      }}>
      {children}
    </CartContext.Provider>
  )
}