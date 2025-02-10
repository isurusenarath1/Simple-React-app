import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149.99/month</p>
                <div className='text-center font-medium text-gray-500'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Spendup to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 transition-all duration-300 ease-in-out hover:bg-black hover:text-[#00df9a] hover:border hover:border-[#00df9a] hover:scale-105 hover:shadow-lg'>
                    Start Trial
                </button>
            </div>

            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4  rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Doubble User</h2>
                <p className='text-center text-4xl font-bold'>$349.99/month</p>
                <div className='text-center font-medium text-gray-500'>
                    <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Granted User</p>
                    <p className='py-2 border-b mx-8'>Spendup to 5 GB</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 transition-all duration-300 ease-in-out hover:bg-[#00df9a] hover:text-black hover:scale-105 hover:shadow-2xl'>
                    Start Trial
                </button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='text-center text-4xl font-bold'>$549.99/month</p>
                <div className='text-center font-medium text-gray-500'>
                    <p className='py-2 border-b mx-8 mt-8'>1500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Granted User</p>
                    <p className='py-2 border-b mx-8'>Spendup to 10 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 transition-all duration-300 ease-in-out hover:bg-black hover:text-[#00df9a] hover:border hover:border-[#00df9a] hover:scale-105 hover:shadow-lg'>
                    Start Trial
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cards