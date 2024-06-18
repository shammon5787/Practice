import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'

const FoodItems = () => {
    const [foodData, setfoodData] = useState(FoodData)
  return (
    <div className='flex flex-wrap gap-4 justify-center items-center lg:justify-between'>
        {
            foodData.map((food)=>(
                <FoodCard key={food.id} id = {food.d} name = {food.name} price = {food.price} rating = {food.ratting} image = {food.image} desc = {food.desc} />
            ))
        }
    </div>
  )
}

export default FoodItems