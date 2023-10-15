import React from 'react'
import styles from './MainSlider.module.css'
import Slider from 'react-slick'

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <>
      <div className="row g-0 mb-5 mt-5">
        <div className="col-md-9">
          <Slider {...settings}>
            <img src="./assets/images/slider-image-1.jpeg" height={400} className="w-100" alt="" />
            <img src="./assets/images/slider-image-2.jpeg" height={400} className="w-100" alt="" />
            <img src="./assets/images/slider-image-3.jpeg" height={400} className="w-100" alt="" />
          </Slider>
        </div>
        <div className="col-md-3">
          <img src="./assets/images/slider-image-2.jpeg" height={200} className="w-100" alt="" />
          <img src="./assets/images/slider-image-3.jpeg" height={200} className="w-100" alt="" />
        </div>
      </div>
    </>
  )
}

export default MainSlider
