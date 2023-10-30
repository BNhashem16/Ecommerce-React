import { CartContext } from 'context/CartContext'
import React, { useContext, useEffect, useState } from 'react'

const Cart = () => {
  const { getCart } = useContext(CartContext)
  const [cart, setCart] = useState({})

  async function getData() {
    const { data } = await getCart()
    setCart(data.data)
    console.log(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='bg-main-light p-3'>
      <h1>Shop Cart</h1>
      <p className="text-main">Total Cart Price: {cart.totalCartPrice} EGP</p>
      {cart.products && cart.products.length > 0 ? (
        cart.products.map((product) => {
          return (
            <div className="row align-items-center gy-2 border-bottom py-3">
              <div className="col-md-10">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img src={product.product.imageCover} alt={product.name} className="w-100" />
                  </div>
                  <div className="col-md-10">
                    <h6>{product.product.title}</h6>
                    <p className="text-main">{product.price} EGP</p>
                    <p className='text-main'><i className='fa-solid fa-trash'></i>Remove </p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <button className="btn btn-main btn-sm w-100">
                      <i className="fas fa-plus"></i>
                    </button>
                    <input type="number" value={product.count} className="form-control" />
                    <button className="btn btn-main btn-sm w-100">
                      <i className="fas fa-minus"></i>
                    </button>


              </div>
              </div>
              </div>
            </div>
          )
        })
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  )
}

export default Cart
