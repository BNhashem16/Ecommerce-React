import React, { useContext, useEffect, useState } from 'react'
import styles from './FeaturedProduct.module.css'
import { getProducts } from 'services/AxiosInstance'
import { BeatLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { CartContext } from 'context/CartContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const FeaturedProduct = () => {
  const { addToCart } = useContext(CartContext)
  const [isAddedToCartLoading, setIsAddedToCartLoading] = useState(false);
  async function addProductToCart(product) {
    setIsAddedToCartLoading(() => ({
      [product._id]: true,
    }));


    let { data } = await addToCart(product)
    if (data.status == 'success') {
      setIsAddedToCartLoading(() => ({
        [product._id]: false,
      }));

      toast.success(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }
  }

  let { isLoading, isError, data } = useQuery('featuredProducts', getProducts)
  let products = data?.data?.data

  return (
    <>
      <div className="container">
        <div className="row">
          {products && products.length > 0 ? (
            products.map((product) => {
              return (
                <div className="col-md-2" key={product._id}>
                  <Link
                    className="text-decoration-none"
                    to={{
                      pathname: `/product/${product._id}`,
                      state: {
                        product: product,
                      },
                    }}
                  >
                    <div className="inner product">
                      <img src={product.imageCover} className="card-img-top w-100" alt="..." />
                      <div className="card-body">
                        <h4 className="text-main h6 my-2">{product.category.name}</h4>
                        <h4 className="text-main h6 my-2">{product.title.split(' ', 2).join(' ')}</h4>
                        <div className="d-flex justify-content-between">
                          <small className=" col-6">{product.price}</small>
                          <small className=" col-6">
                            <i className="fas fa-star text-warning"></i>
                            {product.ratingsAverage}
                          </small>
                        </div>

                     
                      </div>
                    </div>
                  </Link>
                  <div className="d-flex" key={product._id}>
                    {
                      isAddedToCartLoading[product._id] ? (
                        <button type="submit" className="btn btn-primary" key={product._id}>
                        <BeatLoader />
                      </button>

                      ) : (
                        <button className="btn btn-main btn-sm w-100" key={product._id} onClick={() => addProductToCart(product)}>
                          <i className="fas fa-cart-plus"></i>
                        </button>
                      )
                    }

                    </div>
                  
                </div>
              )
            })
          ) : (
            <div className="d-flex justify-content-center col-md-12">
              <BeatLoader color="#36d7b7" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FeaturedProduct
