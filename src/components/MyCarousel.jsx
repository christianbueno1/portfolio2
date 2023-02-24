import React, { useEffect, useRef, useState } from 'react'

const MyCarousel = () => {

  const timer = 5000;
  const heroimg = useRef();
  let i = 0;
  const images = [
    {
      src: "hero-images/chris-1.jpg"
    },
    {
      src: "hero-images/chris-2.jpg"
    },
    {
      src: "hero-images/chris-3.jpg"
    },
    {
      src: "hero-images/chris-4.jpg"
    },
    {
      src: "hero-images/chris-5.jpg"
    },
    {
      src: "hero-images/chris-6.jpg"
    }
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      heroimg.current.src = images[i]['src'];
      // console.log('heroImg2', i, images.length, timer, heroimg.current, images[i].src);
      if( i < images.length - 1 ) {
        i++;
        console.log('true', i);
      } else {
        i = 0;
        console.log('false', i);
      }
    }, timer);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div>
      {/* <div className="aspect-[3/4] w-80 sm:h-64 xl:h-80 2xl:h-96"> */}
      <div className="aspect-[3/4] w-80" >
        {/* <Carousel
          leftControl=" "
          rightControl=" "
          indicators={false}
          
        > */}
        <div>
          <img 
            ref={heroimg}
            alt="hero"
          />
        </div>
        {/* </Carousel> */}
      </div>
    </div>
  )
}

export default MyCarousel