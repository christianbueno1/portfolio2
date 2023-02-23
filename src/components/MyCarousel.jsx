import { Carousel } from 'flowbite-react'
import React from 'react'

const MyCarousel = () => {

  const time = 1000;
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
  return (
    <div>
      {/* <div className="aspect-[3/4] w-80 sm:h-64 xl:h-80 2xl:h-96"> */}
      <div className="aspect-[3/4] w-80" 
        onDrag={e => {
          // e.preventDefault();
          console.log('onTouchStart', e.target);
          // e.preventDefault();
          return false
          
        }}
      
      >
        {/* <Carousel
          leftControl=" "
          rightControl=" "
          indicators={false}
          
        > */}
        <div>
          <img
            src="hero-images/chris-1.jpg"
            alt="..."
          />
          <img
            src="hero-images/chris-2.jpg"
            alt="..."
          />
          <img
            src="hero-images/chris-3.jpg"
            alt="..."
          />
          <img
            src="hero-images/chris-4.jpg"
            alt="..."
          />
          <img
            src="hero-images/chris-5.jpg"
            alt="..."
          />
          <img
            src="hero-images/chris-6.jpg"
            alt="..."
          />
        </div>
        {/* </Carousel> */}
      </div>
    </div>
  )
}

export default MyCarousel