import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>
                    DATA ANALYTICS DASHBORD
                </p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Manage Data Analytics Centrally
                </h1>
                <p className='text-justify'>
                A Data Analytics Dashboard provides a centralized platform to manage and analyze data efficiently. 
                By integrating multiple data sources, it enables organizations to track key performance indicators (KPIs), 
                visualize trends, and gain valuable insights in real time. This centralized approach enhances data accessibility, 
                allowing users to monitor business operations, identify patterns, and make data-driven decisions. 
                With interactive charts, reports, and customizable features, the dashboard simplifies complex data analysis, 
                improves workflow efficiency, and supports strategic planning. Whether used for financial analysis, 
                customer behavior tracking, or operational performance monitoring, 
                a well-designed Data Analytics Dashboard ensures seamless data management and enhanced business intelligence.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 transition-all duration-300 ease-in-out hover:bg-[#00df9a] hover:text-black hover:scale-105 hover:shadow-lg'>
                     Get Started
                </button>

            </div>
        </div>
    </div>
  )
}

export default Analytics