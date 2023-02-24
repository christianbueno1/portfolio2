import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Terminal from './Terminal'
import HeroImageFloating from './HeroImageFloating'

const Home = () => {
  return (
    // <div name="home" className='h-screen w-full'>
    <div name="home" className=' mx-4 pt-20'>

      <div className=' max-w-screen-lg mx-auto'>
        {/* <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'> */}
        <div className='md:flex mb-4 items-center justify-between'>
          <div className='md:w-1/2 -z-10'>
            <Terminal />
          </div>

          <div className=' mt-12 -z-10'>
            <HeroImageFloating/>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-4xl sm:text-7xl font-bold'>I'm a Full Stack Web Developer</h2>
          <div className='pt-4'>
            <ul>
              <li>Django, Flask Developer.</li>
              <li>Python Developer.</li>
              <li>Fronted UI Developer.</li>
              <li>Linux server administrator.</li>
              <li>Containerization Developer.</li>
            </ul>
          </div>
          <p className='py-4 max-w-2xl'>
          I have 4 years in the IT area.
          My language programming are Python, Java, JavaScript, Bash scripting language.
          The database used is MariaDB.
          The Linux server distributions used are Ubuntu, Fedora, Centos, Rocky Linux 9, AlmaLinux 9.
          I have knowledge in Shell Scripting.
          I have ability in containers tools like docker, podman.
          </p>
          <div>
            <button className='group px-6 py-3 my-2  bg-gradient-to-r from-amber-400 to-amber-200 rounded-lg' >
              <a href='/resume.pdf' download target='_blank' className='flex items-center' rel='noreferrer'>
                Resume/Hoja de vida
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight size='25' className='ml-1'></HiArrowNarrowRight>
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home