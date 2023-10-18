import React, { useEffect, useState } from 'react'
import styles from './CategorySlider.module.css'
import axios from 'axios'
import { categories, getAllCategories } from 'services/AxiosInstance'
import Slider from 'react-slick'

const CategorySlider = () => {
  const [categories, setCategories] = useState([])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  }

  async function getCategories() {
    let response = await getAllCategories()
    setCategories(response.data.data)
    console.log(response.data.data)
  }

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <>
    <div className="row g-0 mb-5 mt-5">
    <Slider {...settings}>
      {categories.map((category) => {
        return (
          <div className="row g-0 mb-5 mt-5">
            <div className="col-md-9">
              <img src={category.image} height={200} className="w-100" alt={ category.name } />
            </div>
          </div>
        )
      })}
    </Slider>
    </div>

    </>
  )
}

export default CategorySlider
