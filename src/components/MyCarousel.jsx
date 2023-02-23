import { Carousel } from 'flowbite-react'
import React from 'react'

const MyCarousel = () => {
  return (
    <div>
      {/* <div className="aspect-[3/4] w-80 sm:h-64 xl:h-80 2xl:h-96"> */}
      <div className="aspect-[3/4] w-80">
        <Carousel
          leftControl=" "
          rightControl=" "
          indicators={false}
        >
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
        </Carousel>
      </div>
    </div>
  )
}

export default MyCarousel