import React, { useEffect, useState } from 'react'
import styles from './FeaturedProduct.module.css'
import { getProducts } from 'services/AxiosInstance'

const FeaturedProduct = () => {
  const [products, setProducts] = useState([])
  async function getAllProducts() {
    let { data } = await getProducts()
    setProducts(data.data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3">
                <div className="card">
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FeaturedProduct
