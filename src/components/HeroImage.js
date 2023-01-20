import React, { Component } from 'react'
import { Countdown } from './Countdown'

export default class HeroImage extends Component {
  render() {
    return (
      <div>
        <div
      className="w-full h-96 bg-[url('https://www.rockymountainbride.com/wp-content/uploads/2020/07/Light-Snow-Basin-Engagement-Utah-Rocky-Mountain-Bride-19-800x534.jpg')] bg-cover bg-center flex justify-center items-center opacity-96">
      <div className="flex flex-col justify-center items-center">
          <h1 className=" text-center text-6xl text-white font-bold drop-shadow-lg font-serif">Veronica y Juan
          </h1>
          <h2 className='text-lg font-mono'> 12 de Mayo, 2023 | 4:00 PM
</h2>        <Countdown/>
          <p className="mt-5 text-center italic  text-2xl text-black font-serif">"Por tanto, lo que Dios ha unido, que no lo separe nadie” - San Marcos 10:9</p>
          <button class="text-center font-bold font-display text-sm uppercase tracking-widest items-center justify-center px-5 py-3 leading-4 rounded-md text-drwblue-400 border-2 border-drwblue-300 hover:text-drwblue-600 hover:border-drwblue-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">Nuestra Historia</button>
      </div>
</div>
 </div>
    )
  }
}
// https://www.kindacode.com/snippet/how-to-create-a-hero-image-with-tailwind-css/
// https://www.rockymountainbride.com/blog/soft-and-light-snow-basin-engagement-session/ 