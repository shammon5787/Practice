import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const Card = () => {
    return (
        <div className='bg-white fixed top-0 right-0 w-full lg:w-[320px] h-full p-3'>
            <div className='flex items-center justify-between'>
                <span>Your Orders</span>
                <AiOutlineClose className='cursor-pointer font-bold text-xl border rounded-full bg-slate-300 animate-spin hover:animate-none' />
            </div>


            <div className='absolute bottom-0'>
                <div>
                    <h1>Total Items: </h1>
                    <h1>The Total Price: </h1>
                </div>
                <hr className='h-5 lg:w-[300px]'/>
                <div>
                    <button className='font-semibold text-xl bg-blue-700 px-2 text-white rounded-md hover:bg-slate-700 hover:text-yellow-700 mb-5' onClick={() => dispatch(add({ id, name, image, desc, price, qty: 1 }))}>Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default Card