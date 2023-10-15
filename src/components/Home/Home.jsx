import React from 'react'
import styles from './Home.module.css'
import FeaturedProduct from 'components/FeaturedProduct/FeaturedProduct'
import MainSlider from 'components/MainSlider/MainSlider'

const Home = () => {
  return (
    <>
    <div>
      <MainSlider />
      <FeaturedProduct />
    </div>
    </>
  )
}

export default Home
