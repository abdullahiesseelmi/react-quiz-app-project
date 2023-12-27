import React from 'react'
import banner from '../assets/images/banner.png';

const Home = () => {


    return (
        <section className='lg:w-9/12 md:w-[90%] mx-auto mt-12 px-4 
          flex flex-col md:flex-row-reverse justify-between items-center'>

            <div className='md:w-1/2 w-full'>
                <img src={banner} alt="banner" className='w-full' />
            </div>

            <div className='md:w-1/2 w-full space-y-8'>
                <h2 className='lg:text-4xl text-3xl font-medium text-[#333] md:w-4/6
                lg:leading-normal leading-normal mb-3'>
                    Learn new
                    <span className='text-green-600'> concepts
                    </span> for each question
                </h2>
                <p className='py-2 mb-6 text-gray-500 pl-2 border-l-4 border-indigo-700 text-base'>
                    We help you prepare for exam and quizzes
                </p>

                <div className='font-medium text-lg flex flex-col sm:flex-row gap-5'>
                    <button className='hover:bg-green-600 text-white bg-yellow-800 px-5 py-2 
                     rounded-full transition-all duration-300'>
                        Start Quiz
                    </button>

                    <button className='inline-flex hover:bg-green-600 text-white bg-yellow-800 px-5 py-2 
                     rounded-full transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        Know More
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Home