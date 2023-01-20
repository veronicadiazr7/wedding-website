import { useState,useRef, useEffect } from "react"
import React from 'react'

export const Countdown = () => {
  const [timerDays, setTimerDays]= useState('00');
  const [timerHours, setTimerHours]= useState('00');
  const [timerMinutes, setTimerMinutes]= useState('00'); 
  const [timerSeconds, setTimerSeconds]= useState('00');
  let interval = useRef();
  const startTimer= ()=>{
    const countdownDate= new Date('May 13, 2023 16:00:00').getTime();
    interval.current = setInterval(()=>{
      const now = new Date().getTime();
      const distance = countdownDate - now; 
     
      const days = Math.floor(distance / (1000*60*60*24))
      const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      const seconds = Math.floor((distance % (1000*60)) / 1000);
      if (distance < 0){
        // stop timer
        clearInterval(interval.current); 
      }else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  }
  useEffect(()=>{
    startTimer();
    return ()=>{
      clearInterval(interval.current); 
    }
  }, [])
  return (
    <section className="p-4 w-fit m-auto border-gray-900 border-2 border-fit bg-white opacity-60 grid grid-flow-col gap-5 text-center auto-cols-max slate-200 text-lg">
      <div className="flex flex-col"> <p>{timerDays}  </p>
        <p> <small> Days</small></p>
      </div>
      <span>:</span>
      <div className="flex flex-col"> <p>{timerHours} </p>
        <p> <small> Hours</small></p>
      </div> <span>:</span>
      <div className="flex flex-col"> <p>{timerMinutes}</p>
        <p> <small> Minutes</small></p>
      </div>  
      <span>:</span>
      <div className="flex flex-col"> <p className="countdown">{timerSeconds}</p>
        <p> <small> Seconds</small></p>
      </div>
    </section>
  )
}


//https://www.youtube.com/watch?v=ZVOGPvo08zM
//https://daisyui.com/components/countdown/ 