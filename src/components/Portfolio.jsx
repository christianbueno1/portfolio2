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
      title: 'Restaurant Theme, Blocksy, Wordpress',
      info: 'The perfect starter pack for your elegant saloon is here. Meet Restaurant! The site has been created to give you a jump start in designing your next project.', 
      link: 'https://demo.creativethemes.com/blocksy/restaurant/',
      price: '$70 Theme only',
    },
    {
      id: 4,
      imgSrc: './post/avalon-anarieldesign.png',
      title: 'Avalon Woocommerce Theme, ArielDesign, Wordpress',
      info: 'Avalon is a modern WordPress theme with full site editing capabilities. It is a perfect tool for building professional-looking clothing and fashion stores using WooCommerce.',
      link: 'https://demo.anarieldesign.com/avalon/',
      price: '$80 Theme only',
    },
    {
      id: 5,
      imgSrc: './post/olorien-woocommerce-wordpress.png',
      title: 'Olorien Woocommerce Theme, ArielDesign, Wordpress',
      info: 'Olorien is a modern block-based WooCommerce theme with sophisticated looks ideal for selling cosmetics and beauty products. It is a perfect match for selling cosmetics, beauty salons, and more',
      link: 'https://demo.anarieldesign.com/olorien/',
      price: '$60 Theme only',
    },
    {
      id: 6,
      imgSrc: './post/gadgets-woocommerce-wordpress.png',
      title: 'Gadgets WooCommerce, Blocksy, Wordpress',
      info: 'High tech meets high everything. Gadgets is the perfect showcase for your technology e-commerce site. WooCommerce comes pre-installed, so it is super easy to get started. The design is as futuristic as it gets, so setting up your own e-shop and turning heads around is extremely easy.',
      link: 'https://demo.creativethemes.com/blocksy/gadgets/',
      price: '$70 Theme only',
    },
    {
      id: 7,
      imgSrc: './post/tasty-blog-blocksy-wordpress.png',
      title: 'Tasty Blog Personal, Blocksy, Wordpress',
      info: 'Yummy! Tasty! Fluffy! These are the emotions that our delicious Tasty starter pack should light up when you first see it. It is a great template to set up a beautiful recipe blog for your peers. The pastel colour scheme and mouth watering images instantly make you try to eat the page you’re on. It’s that good!',
      link: 'https://demo.creativethemes.com/blocksy/tasty/',
      price: '$70 Theme only',
    },
    {
      id: 8,
      imgSrc: './post/news-press-blocksy-wordpress.png',
      title: 'News Press Blog, Blocksy, Wordpress',
      info: 'The original, the unbeatable, the cleanest Blog design you might want. Blocksy News is the answer here!.This starter site is super simple and showcases what WordPress has been initially created for — blogging! The homepage is an index of your posts, with beautiful big images and a little excerpt, inviting the visitor to discover more.',
      link: 'https://demo.creativethemes.com/blocksy/blog/',
      price: '$70 Theme only',
    },
    {
      id: 9,
      imgSrc: './post/zsh-ohmyzsh-p10k-post-hashnode.png',
      title: 'Como crear un script que instala zsh, oh-my-zsh y powrlevel10k en Linux, Ubuntu, Fedora',
      info: 'También vamos a identificar si estamos en una distribución Ubuntu o Fedora para usar el administrador de paquetes adecuado.',
      link: 'https://christianbueno.hashnode.dev/como-crear-un-script-que-instala-zsh-oh-my-zsh-y-powrlevel10k-en-linux-ubuntu-fedora',
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
