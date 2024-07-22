import React from 'react'
import { FaGithub, FaLinkedin as FaLLinkedIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill} from 'react-icons/bs';
import resume_christian_bueno_english from '/resume-christian-bueno-english.pdf'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLLinkedIn size={30}></FaLLinkedIn>
                </>
            ),
            href: 'https://www.linkedin.com/in/christianbueno1/',
            style: 'rounded-tr-lg'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30}></FaGithub>
                </>
            ),
            href: 'https://github.com/christianbueno1',
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}></HiOutlineMail>
                </>
            ),
            href: 'mailto:christianbueno@christianbueno.work',
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                </>
            ),
            href: {resume_christian_bueno_english},
            style: 'rounded-br-lg',
            download: true
        },
    ]
  return (
    <div className='hidden lg:flex flex-col fixed top-1/3 left-0'>
        <ul>
            {links.map( ({id, child, href, style, download}) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-amber-400 -ml-24 hover:-ml-2 hover:rounded-lg duration-300 ${style}`}>
                    <a href={href} className='flex justify-between items-center w-full' download={download} target='_blank' rel='noreferrer'>
                        {child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks