import React from 'react'
import styles from './Home.module.css'
import FeaturedProduct from 'components/FeaturedProduct/FeaturedProduct'
import MainSlider from 'components/MainSlider/MainSlider'
import CategorySlider from 'components/CategorySlider/CategorySlider'

const Home = () => {
  return (
    <>
    <div className='container'>
      <MainSlider />
      <CategorySlider />
      <FeaturedProduct />
    </div>
    </>
  )
}

export default Home
