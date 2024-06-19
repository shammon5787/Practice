import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import CardItems from './CardItems';
import { BsCartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Card = () => {


    const selectitem = useSelector((state) => state.cart.cart)

    const [activeCard, setactiveCard] = useState(true)
    const totalqty = selectitem.reduce((totalqty, item)=>totalqty + item.qty, 0)
    const totalprice = selectitem.reduce((totalprice, item)=>totalprice + item.qty * item.price, 0)

    return (
        <>
            <div className={`bg-white fixed top-0 right-0 w-full lg:w-[320px] h-full p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-700 z-50`}>
                <div className='flex items-center justify-between'>
                    <span>Your Orders</span>
                    <AiOutlineClose onClick={() => setactiveCard(!activeCard)} className='cursor-pointer font-bold text-xl border rounded-full bg-slate-300 animate-spin hover:animate-none' />
                </div>

                {
                    selectitem.length > 0?  selectitem.map((food) => {
                      return ( 
                      <CardItems
                            key={food.id} id={food.id} name={food.name} image={food.image} price={food.price} qty={food.qty} />
                        );
                    } ) : <h2>No Item Found</h2> }

                <div className='absolute bottom-0'>
                    <div>
                        <h1>Total Items: {totalqty} </h1>
                        <h1>The Total Price:{totalprice} </h1>
                    </div>
                    <hr className='h-5 lg:w-[300px]' />
                    <div>
                        <button className='font-semibold text-xl w-[90vw] lg:w-[22vw] bg-blue-700 px-2 text-white rounded-md hover:bg-slate-700 hover:text-yellow-700 mb-5' onClick={() => dispatch(add({ id, name, image, desc, price, qty: 1 }))}>Check Out</button>
                    </div>
                </div>
            </div>
            <BsCartFill onClick={() => setactiveCard(!activeCard)} className={`fixed right-10 bottom-6 text-3xl cursor-pointer ${selectitem.length > 0 ? "animate-bounce" : "animate-none"}`} />
        </>
    )
}

export default Card