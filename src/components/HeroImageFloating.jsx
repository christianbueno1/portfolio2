import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import MyCarousel from './MyCarousel';
import {rotate, moveX, moveY, randomX, randomAngle} from '/src/myModules/floatingCan';

const HeroImageFloating = () => {
  const heroImgs = useRef([null,null,null]);

  useEffect( () => {
    // console.log('heroImgs.current', heroImgs.current);
  
    heroImgs.current.forEach(heroImg => {
  
      gsap.set(heroImg, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
      });
    
      moveX(heroImg, 1);
      moveY(heroImg, -1);
      rotate(heroImg, 1);
  
      // console.log('heroImg', heroImg);
    });


  }, []);

  return (
    <div>
      <div className='px-4 w-full '>
        <div className='max-w-screen-sm'>
          <div className='grid content-center justify-center'>
            <div className='rounded-xl bg-amber-400 -rotate-12 row-start-1 row-end-2 col-start-1 col-end-2 w-80 aspect-[3/4] m-auto z-0' ref={e => heroImgs.current[1] = e}></div>
            <div className='rounded-xl bg-sky-800 rotate-12 row-start-1 row-end-2 col-start-1 col-end-2 w-80 aspect-[3/4] m-auto z-0' ref={e => heroImgs.current[2] = e}></div>
            <div className=' rounded-xl row-start-1 row-end-2 col-start-1 col-end2 w-80 aspect-[3/4] m-auto z-0' ref={e => heroImgs.current[0] = e}>
              <MyCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImageFloating