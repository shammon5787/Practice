import React from 'react'
import img from '../Food/1.avif'
import { FaStar } from "react-icons/fa6";


const FoodCard = ({id, name, price, rating, image,desc}) => {
    return (
        <div className='mt-11 bg-slate-200 w-[250px] rounded-md p-2'>
            <div className='flex items-center justify-center'>
                <img className='w-[90px] h-[80px] rounded-full cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold' >{name}</h1>
                <span className='font-semibold' >$: {price}</span>
            </div>
            <p className='text-xl'>{desc}.</p>

            <div className='flex items-center justify-between'>
                <span className='flex items-center justify-center gap-2'> <FaStar className='text-yellow-500' />
                    <h2 className='font-semibold text-sm'>{rating}</h2>
                </span>
                <button className='font-semibold text-xl bg-blue-700 px-2 text-white rounded-md hover:bg-slate-700 hover:text-yellow-700'>Add To Card</button>
            </div>
        </div>
    )
}

export default FoodCard