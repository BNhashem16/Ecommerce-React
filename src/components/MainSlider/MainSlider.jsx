import React from 'react'
import styles from './MainSlider.module.css'
import slider1 from 'assets/images/slider-image-1.jpeg'
import slider2 from 'assets/images/slider-image-2.jpeg'
import slider3 from 'assets/images/slider-image-3.jpeg'

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-9">
            <div className="slider">
              <div className="slider__item">
                <img src={slider1} alt="" />
              </div>
              <div className="slider__item">
                <img src={slider2} alt="" />
              </div>
              <div className="slider__item">
                <img src={slider3} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  )
}

export default MainSlider
