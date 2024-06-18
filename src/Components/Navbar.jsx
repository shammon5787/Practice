import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
            <div>
                <h1 className='text-slate-700 font-bold text-2xl' > {new Date().toUTCString().slice(0, 16)} </h1>
                <h1 className='text-slate-700 font-bold text-2xl' >THE PIZZA FOOD CENTER</h1>
            </div>
            <input className='px-4 py-1 rounded-md outline-none text-2xl w-[300px]' type="search" name="search" id="" placeholder='search here' />
        </div>
    )
}

export default Navbar