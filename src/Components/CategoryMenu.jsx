import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch, useSelector } from 'react-redux'
import { addcategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {

  const [categories, setcategories] = useState([])

  const ListUniqueCategories = () => {
    const uniqueCategories = [... new Set(FoodData.map((food) => food.category))]

    setcategories(uniqueCategories)
  }

  useEffect(() => {
    ListUniqueCategories();
  }, [])


  const dispatch = useDispatch()
  const selecetedCategory = useSelector((state) => state.category.category)
  return (
    <div className='mt-24'>
      <h1 className='text-slate-700 font-semibold text-2xl'>Order Your Favorite Food</h1>
      <div className='gap-4 flex overflow-x-scroll lg:overflow-hidden'>
        <button onClick={() => dispatch(addcategory("All"))} className='font-semibold text-xl bg-blue-700 px-2 text-white rounded-md hover:bg-slate-700 hover:text-yellow-700'>All</button>
        {
          categories.map((category, index) => (
            <button onClick={() => dispatch(addcategory(category))} key={index} className='font-semibold text-xl bg-blue-700 px-2 text-white rounded-md hover:bg-slate-700 hover:text-yellow-700'>{category}</button>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryMenu