import React from 'react'
import { Link } from 'react-router-dom'
import FetchProducts from './searchelements/FetchProducts'

const PricingCard = () => {
  return (
    <div className="min-h-screen flex justify-center items-center mt-20 mb-20">
        <div className="">
            <div className="text-center font-semibold">
                <h1 className="text-5xl">
                    <span className="text-red-500 tracking-wide">Flexible </span>
                    <span className='text-black'>Plans</span>
                </h1>
                <p className="pt-6 text-xl text-blackfont-normal w-full px-8 md:w-full">
                    Choose a plan that works best for you and<br/> your needs.
                </p>
            </div>
            <div className="pt-24 flex flex-row gap-32">
                <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl scale-95">
                    <h1 className="text-black font-semibold text-2xl">Regular</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">₹</span>
                        <span className="text-gray-400 font-semibold">3500 </span>
                        <span className="text-gray-400 font-medium">/ month</span>
                    </p>
                    <hr className="mt-4 border-1" />
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                            Varied <span className="text-black">food </span>option
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                            Best <span className="text-black">Rated </span>Menu & Restaurant <span className='text-black px-8'>Listings</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                            Delivery person Details for <span className="text-black px-8">secure on-time delivery</span>
                            </span>
                        </p>

                     
                            <p className="w-full py-4 bg-red-600 mt-8 rounded-xl text-white">
                                <Link to = '/fetch-products'>
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                                </Link>
                                <span className="pl-2 material-icons align-middle text-sm">
                                    east
                                </span>
                            </p>
                        
                    </div>
                </div>
                <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-100">
                    <h1 className="text-white font-semibold text-2xl">Premium</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">₹ </span>
                        <span className="text-3xl text-white font-semibold">4500</span>
                        <span className="text-gray-400 font-medium">/ month</span>
                    </p>
                    <hr className="mt-4 border-1 border-gray-600" />
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                All features in <span className="text-white">Regular</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                            <span className="text-white">Customized </span> (Food) Thalis 
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                                <span className="text-white">Ad-Free </span>Experience
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="material-icons align-middle">
                                done
                            </span>
                            <span className="pl-2">
                            Exclusive <span className="text-white">Discounts, Gift </span><span className='text-white px-8'>Cards & Vouchers</span>
                            </span>
                        </p>

                      
                            <p className="w-full py-4 bg-red-600 mt-8 rounded-xl text-white">
                                <span className="font-medium">
                                    Choose Plan
                                </span>
                                <span className="pl-2 material-icons align-middle text-sm">
                                    east
                                </span>
                            </p>
                     
                    </div>
                    <div className="absolute top-4 right-4">
                        <p className="bg-red-700 text-white font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default PricingCard