import React from 'react'
import {Card} from 'flowbite-react'
import './Portfolio.css'

const Portfolio = () => {
  const cards = [
    {
      id: 1,
      imgSrc: './post/wordpress-podman-post.png',
      title: 'How to create a WordPress containerization environment with podman(a docker alternative) in fedora 36/37 Workstation GNU/Linux ',
      info: 'Hello to everyone, today we are going to learn how to create a WordPress containerization environment with podman a docker alternative. We need podman, the WordPress image, and a database image MySQL or MariaDB. First we are going to download the images, using the following command.',
      link: 'https://dev.to/christianbueno1/how-to-create-a-wordpress-containerization-environment-with-podman-in-fedora-36-workstation-gnulinux-2o6k'
    },
     {
      id: 2,
      imgSrc: './post/kmv-libvirt-windows11.jpg',
      title: ' Install windows 11 virtual machine on KVM, libvirt, qemu, virt-manager in Linux, fedora 36/37, RPM based distribution ',
      info: 'The following tutorial will tech you how to create a virtual machine on Linux, first we are going to install the virtual machine tools.',
      link: 'https://dev.to/christianbueno1/install-windows-11-virtual-machine-on-kvm-libvirt-qemu-virt-manager-in-linux-fedora-3637-rpm-based-distribution-1nkd'
    },
    {
      id: 3,
      imgSrc: './post/blocksy-restaurant.png',
      title: 'Restaurant Theme - Blocksy - Wordpress',
      info: 'The perfect starter pack for your elegant saloon is here. Meet Restaurant! The site has been created to give you a jump start in designing your next project.',
      link: 'https://demo.creativethemes.com/blocksy/restaurant/'
    },
    {
      id: 4,
      imgSrc: './post/avalon-anarieldesign.png',
      title: 'Avalon Theme - ArielDesign - Wordpress',
      info: 'Avalon is a modern WordPress theme with full site editing capabilities. It is a perfect tool for building professional-looking clothing and fashion stores using WooCommerce.',
      link: 'https://demo.anarieldesign.com/avalon/',
      price: '$80 Theme only',
    },
  ]
  return (
    <div name='post & wordpress' className=' mx-4 pt-20' >
      <div className=' max-w-screen-lg mx-auto'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold border-b-4 border-cyan-800 inline'>Post & Wordpress Themes</h2>

        </div>
        <div className='grid_cards md:grid'>
          {cards.map(({id, imgSrc, title, info, link, price}) => (
            <a key={id} target='_blank' href={link}>
              <div key={id} className=" relative max-w-sm mx-auto mt-8">
                <Card key={id} imgSrc={imgSrc}>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-3">
                    {title}
                  </h5>
		  {price && (<small className='absolute bottom-0 right-0 bg-amber-400 p-1 rounded-md'>{price}</small>)}
                  <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-5">
                    {info}
                  </p>
                </Card>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Portfolio
