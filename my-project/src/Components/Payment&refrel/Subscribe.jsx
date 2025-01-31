import React from 'react'
import { Link } from 'react-router-dom'
const Subscribe = () => {
  return (
    <div><div class="font-[sans-serif] p-12 xl:p-[20vh] ">
    <div class="container mx-auto">
      <div class="text-center">
        <h2 class="text-gray-800 text-2xl font-bold mb-3">Choose a Subscription</h2>
        <p class="text-sm text-gray-500">Change your plan according to your needs</p>
      </div>
  
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-6 max-sm:max-w-xs max-sm:mx-auto">
     
        <div class="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.04]">
          <div class="h-32 bg-gray-700 text-center p-4">
            <h3 class="text-[22px] text-white mb-1">Starter</h3>
            <p class="text-xs text-white">1 Month</p>
          </div>
          <div class="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-gray-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
            <h3 class="text-2xl">700</h3>
          </div>
          <div class="px-6 py-4 mt-4">
            <ul class="space-y-4">
              <li class="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                </svg>
                50 Page Unlock
              </li>
          
            </ul>
            <Link to={`/login`}>
           <button type="button" class="w-full mt-8 px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 rounded-full">
              Get Started
            </button>
           </Link>
          </div>
        </div>
  
    
        <div class="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.04] relative">
          <span class="px-2 py-1 text-[10px] font-semibold text-white bg-orange-400 rounded-lg ml-3 absolute -left-4 top-0">
            Most popular
          </span>
          <div class="h-32 bg-blue-600 text-center p-4">
            <h3 class="text-[22px] text-white mb-1">Professional</h3>
            <p class="text-xs text-white">2 Months</p>
          </div>
          <div class="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-blue-600 text-white border-[3px] flex flex-col items-center justify-center border-white">
            <p class="text-[10px] font-bold">Save 29%</p>
            <h3 class="text-2xl">$70</h3>
          </div>
          <div class="px-6 py-4 mt-4">
            <ul class="space-y-4">
              <li class="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                </svg>
                100 Page Unlock
              </li>
             
            </ul>
            <Link to={`/login`}>
           <button type="button" class="w-full mt-8 px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 rounded-full">
              Get Started
            </button>
           </Link>
          </div>
        </div>
  
     
        <div class="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.04]">
          <div class="h-32 bg-gray-800 text-center p-4">
            <h3 class="text-[22px] text-white mb-1">Premium</h3>
            <p class="text-xs text-white">3 Months</p>
          </div>
          <div class="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-gray-800 text-white border-[3px] flex flex-col items-center justify-center border-white">
            <h3 class="text-2xl">$90</h3>
          </div>
          <div class="px-6 py-4 mt-4">
            <ul class="space-y-4">
              <li class="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" class="mr-3 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                </svg>
                Unlimited Page Unlock
              </li>
        
            </ul>
           <Link to={`/login`}>
           <button type="button" class="w-full mt-8 px-5 py-2.5 text-sm text-white bg-gray-800 hover:bg-gray-900 rounded-full">
              Get Started
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Subscribe