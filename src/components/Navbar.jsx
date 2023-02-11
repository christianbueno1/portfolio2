import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll';

const NavBar = () => {

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    
  ]
  const [nav, setNav] = useState(false);
  
  const changeBgColor = (e) => {
    console.log('click');
    console.log(e.target.closest('ul').children);
    [...e.target.closest('ul').children].forEach( child => {
      child.classList.remove('hoverMenu');
      console.log(child);
    });
    e.target.closest('li').classList.add('hoverMenu');
    console.log(e.target.closest('li'));
  }

  function handledGoLink(e, param) {
    console.log(e.target, param);
    setNav(!nav) ;
  }
  
  return (
    <div name='navbar' className="flex justify-between items-center w-full h-20 fixed top-0 px-4 shadow-md bg-white z-10">
      <div>
        <h1 className='text-4xl font-shrikhand '>Christian Bueno</h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map( ({id, link}) => (
          <li key={id}   className='cursor-pointer capitalize font-medium text-amber-400 hover:scale-105 duration-200 hover:text-teal-600'>
            <Link key={id} to={link} smooth={true} duration={500}  onClick={(e) => changeBgColor(e)}>
              <div key={id} onClick={() => console.log('child link')} className='px-4'>
                {link}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 md:hidden relative z-20'>
        {nav ? <FaTimes size='30'></FaTimes> : <FaBars size='30'></FaBars>}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center absolute top-0 left-0 w-full h-screen items-center bg-gradient-to-b from-cyan-200 to-cyan-50 md:hidden '>
            {links.map( ({id, link}) => (
              <li  key={id} className='w-screen cursor-pointer capitalize py-6 text-4xl text-center '>
                <Link key={id} to={link} onClick={(e) => handledGoLink(e, 'mobile2')} smooth={true} duration={500} >
                  <div key={id} onClick={e => console.log('mobile link', e.target)}>
                    {link}
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar