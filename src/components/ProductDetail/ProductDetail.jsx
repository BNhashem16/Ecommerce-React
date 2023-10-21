import React, { useEffect, useState } from 'react'
import styles from './ProductDetail.module.css'
import { useParams } from 'react-router-dom'
import { showProduct } from 'services/AxiosInstance'
import Slider from 'react-slick'

const ProductDetail = () => {
  let { id } = useParams()
  const [product, setProduct] = useState({})
  async function getProductDetail() {
    let { data } = await showProduct(id)
    setProduct(data.data)
  }

  useEffect(() => {
    getProductDetail()
  }, [])
  return (
    <>
      <div className='container'>
        <div className="row align-items-center mt-3">
          <div className="col-md-3" key={product._id} >
            <Slider>
              {
                product.images?.map((image) => {
                  return (
                    <img src={image} className="w-100" alt="" key={product._id} />
                  )
                })
              }
            </Slider>
          </div>
          <div className="col-md-9">
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <p className='text-muted'>{product.description}</p>
            <h6>{product.category?.name}</h6>
            <div className="d-flex">
              <div className="col-6">
                <h6>{product.price} EGP</h6>
              </div> 
              <div className="col-6">
                <i className="fas fa-star text-warning"></i>
                {product.ratingsAverage}
              </div>
            </div>
            <button className="btn btn-main btn-block mt-2 bg-main w-100">Add to cart</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductDetail
