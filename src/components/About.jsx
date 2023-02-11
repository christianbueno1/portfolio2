import React from 'react'

const About = () => {
  return (
    <div name='about' className='mx-4 mt-4 '>
        <div className=' max-w-screen-lg mx-auto flex flex-col justify-center'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-800'>About</p>
            </div>
            <p className='text-xl mt-10'>
              <strong>I'm a Web Developer</strong>, my favorite tools are python and the django Framework, in the fronted like to use React, Bootstrap, tailwindCSS, in the backend python, java, JavaScript.
              The Server Administrator is very good part for me, like to use GNU/Linux distribution likes Ubuntu, Fedora, Centos, Rocky Linux, AlmaLinux. With Web server as Apache Http or Nginx. The servers are supported with cloud services as Linode.
              Containers is another good part, have created wordpress container environments using docker, podman.
            </p>
            <br />
            <p className='text-xl mt-5'>
              <strong>As a WordPress specialist</strong>, I offer a wide range of website design services, including the creation of blogs, personal and landing pages, business websites, portfolios, and eCommerce sites. My goal is to help businesses establish a strong online presence by delivering high-quality, customized WordPress websites that meet their unique needs. Whether you're a small business owner, freelancer, or entrepreneur, I have the expertise to create a website that effectively showcases your brand and drives results. From concept to launch, I manage every aspect of the design process, ensuring that your website is delivered on time and within budget. Get in touch with me today to take your online presence to the next level with a custom WordPress website.
            </p>
        </div>
    </div>
  )
}

export default About