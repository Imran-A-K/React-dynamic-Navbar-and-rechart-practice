import { list } from 'postcss'
import React from 'react'
import Feature from './Feature'

const PriceCard = ({price}) => {
  return (
    <div className='bg-indigo-400 rounded-md p-4 flex flex-col space-'>
        <h2 className='text-center' >
            <span className='text-slate-500 text-5xl font-extrabold'>
            {price.price}
                </span>
                <span className='text-2xl text-white font-bold'>
                    /month
                </span>
            </h2>
        <h5 className='text-2xl text-center my-6 font-bold'>
        {price.name}
        </h5>
        <p className='underline font-bold text-white'>Features: </p>
        {
            price.features.map((feature,index) => <Feature key={index} feature={feature} />)
        }
        <button className='w-full mt-auto bg-green-500 py- rounded-md hover:bg-green-700 text-white py-2'>Buy Now</button>
    </div>
  )
}

export default PriceCard