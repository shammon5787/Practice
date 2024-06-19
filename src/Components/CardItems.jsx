import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, remove } from '../Store/CardSlice';

const CardItems = ({id, name, image, price, qty}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-100 rounded-md p-1 mt-2 flex gap-6'>
            <MdDelete onClick={()=>dispatch(remove({id, name, image, price, qty}))} className='absolute right-3 cursor-pointer ' />
            <img className='rounded-full w-12  h-12' src={image} alt="" />
            <div className='flex'>
                <span className='leading-5'>
                    <h2>{name}</h2>
                    <h2>$ : {price}</h2>
                </span>
                <span className='flex items-center justify-center gap-2 mt-6 fixed right-4'>
                    <FaMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty + 1} className='cursor-pointer border rounded-full ' />
                    <h1>{qty}</h1>
                    <FaPlus onClick={()=>dispatch(incrementItem({id}))} className='cursor-pointer border rounded-full ' />
                </span>
            </div>
        </div>
    )
}

export default CardItems