import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mt-24'>
        <h1 className='text-slate-700 font-semibold text-2xl'>Order Your Favorite Food</h1>
        <div className='gap-4 flex overflow-x-scroll lg:overflow-hidden'>
            <button className='font-semibold text-xl bg-blue-700 px-2 text-white rounded-md hover:bg-slate-700 hover:text-yellow-700'>All</button>
            <button className='font-semibold text-xl bg-blue-700 px-2 text-white rounded-md hover:bg-slate-700 hover:text-yellow-700'>Dinner</button>
            <button className='font-semibold text-xl bg-blue-700 px-2 text-white rounded-md hover:bg-slate-700 hover:text-yellow-700'>Breakfast</button>
            <button className='font-semibold text-xl bg-blue-700 px-2 text-white rounded-md hover:bg-slate-700 hover:text-yellow-700'>Lunch</button>
        </div>
    </div>
  )
}

export default CategoryMenu