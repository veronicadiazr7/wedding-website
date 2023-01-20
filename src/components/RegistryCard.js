import React from 'react'

export const RegistryCard = () => {
  return (
    <div class="relative font-medium md:h-screen flex items-center content-center">
    <div class="mr-auto ml-auto w-full px-6 py-8">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store"/>
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-700 font-semibold">Article</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Improve your customer experience</a>
            <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mi at tortor commodo commodo. Duis tincidunt dignissim tincidunt.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
