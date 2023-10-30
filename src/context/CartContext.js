import { createContext } from 'react'
import { addToCartRoute } from 'services/AxiosInstance'

export const CartContext = createContext()

export function CartContextProvider(props) {
  async function addToCart(product) {
    return await addToCartRoute({ productId: product._id })
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
  }
  return <CartContext.Provider value={{ addToCart }}>{props.children}</CartContext.Provider>
}
