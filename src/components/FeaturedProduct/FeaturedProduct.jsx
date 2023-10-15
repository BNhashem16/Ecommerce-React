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
              <div className="col-md-2">
                <div className="inner product">
                  <img src={product.imageCover} className="card-img-top w-100" alt="..." />
                  <div className="card-body">
                    <h4 className="text-main h6 my-2">{product.category.name}</h4>
                    <h4 className="text-main h6 my-2">{product.title.split(" ", 2).join(" ")}</h4>
                    <div className="d-flex justify-content-between">
                      <small className=" col-6">{product.price}</small>
                      <small className=" col-6">
                        <i className="fas fa-star text-warning"></i>
                        {product.ratingsAverage}
                      </small>
                    </div>
                    
                    <button className="btn btn-main btn-block mt-2">Add to cart</button>

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
