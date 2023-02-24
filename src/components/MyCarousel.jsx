import React, { useEffect, useRef, useState } from 'react'

const MyCarousel = () => {

  const timer = 3000;
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
      heroimg.current.src = images[i].src;
      if( i < images.length - 1 ) {
        i++;
      } else {
        i = 0;
      }
    }, timer);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div>
      <div className="aspect-[3/4] w-80" >
        <div>
          <img className=' object-cover' ref={heroimg} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default MyCarousel