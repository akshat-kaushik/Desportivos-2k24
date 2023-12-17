import React, { useEffect, useState } from 'react';

function Countdown() {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const deadline = "January, 26 , 2024";

  const formatNumber = (number) => (number < 10 ? "0" + number : number);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDay(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHour(formatNumber(Math.floor((time / (1000 * 60 * 60)) % 24)));
    setMin(formatNumber(Math.floor((time / (1000 * 60)) % 60)));
    setSec(formatNumber(Math.floor((time / 1000) % 60)));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTime(deadline);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    
      <div className="bg-black h-screen overflow-x-hidden overflow-y-hidden">
        <div className=" top-20 h-screen w-screen relative ">
          <h1 className='text-white text-xl pl-20 sm:text-3xl'>SEE YOU THERE IN</h1>
        <div className="text-white text-xl top-0 absolute pl-3 sm:text-5xl">
          <div className="flex ">
            <div className="my-20  p-2">
              <div className="font-bold ml-8 z-10">{formatNumber(day)}</div>
              <div className='text-red-400 z-10'>Days</div>
            </div>
            <div className="my-20  p-2">
              <div className="font-bold ml-10">{hour}</div>
              <div className='text-red-400'>Hours</div>
            </div>
            <div className="my-20  p-2">
              <div className="font-bold ml-3">{min}</div>
              <div className='text-red-400'>Min</div>
            </div>
            <div className="my-20  p-2">
              <div className="font-bold ml-3">{sec}</div>
              <div className='text-red-400' >Sec</div>
            </div>
          </div>
        </div>

        <img className='absolute -right-8 top-28 sm:-right-20' src="rockHero.png" alt="" />
       
        
        <img className='absolute hidden sm:-bottom-28 sm:block w-full' src="bottomRock.png" alt="" />
       
      </div>
    </div>
    
    
  );
}

export default Countdown;
