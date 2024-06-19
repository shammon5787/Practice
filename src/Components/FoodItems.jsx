import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'
import { useSelector } from 'react-redux'

const FoodItems = () => {
  const [foodData, setfoodData] = useState(FoodData)
  
  const category = useSelector((state) => state.category.category)

  return (
    <div className='flex flex-wrap gap-4 justify-center items-center lg:justify-between'>
      {
        foodData.filter((food) => {
          if (category === "All") {
            return food
          } else {
            return category === food.category
          }
        }).map((food) => (
          <FoodCard key={food.id} id={food.d} name={food.name} price={food.price} rating={food.ratting} image={food.image} desc={food.desc} />
        ))
      }
    </div>
  )
}

export default FoodItems