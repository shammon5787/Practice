import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItems from '../Components/FoodItems'
import Card from '../Components/Card'

const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryMenu />
        <FoodItems />
        <Card />
    </div>
  )
}

export default Home