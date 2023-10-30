import { createContext } from 'react'
import { addToCartRoute, getCartRoute } from 'services/AxiosInstance'

export const CartContext = createContext()

export function CartContextProvider(props) {
  async function getCart() {
    return await getCartRoute()
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
  }

  async function addToCart(product) {
    return await addToCartRoute({ productId: product._id })
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
  }
  return <CartContext.Provider value={{ addToCart, getCart }}>{props.children}</CartContext.Provider>
}
