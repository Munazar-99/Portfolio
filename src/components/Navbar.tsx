import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion'
import {GithubIcon, LinkedInIcon} from './Icons'
import Logo from './Logo'






const Navbar = () => {
    const CustomLink = ({href, title, className=''}: {href:string, title:string, className:string}) => {
        const router = useRouter()
        return (
          <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
          </Link>
        )
      }
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4'/>
        <CustomLink href='/about' title='About' className='mx-4'/>
        <CustomLink href='/Projects' title='Projects' className='mx-4'/>
        <CustomLink href='/articles' title='Articles' className='ml-4' />
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a whileTap={{scale:0.9}} whileHover={{y:-3}} href='https://github.com/Munazar-99' target={'_blank'} className='w-[1.85rem] mx-4 h-[1.85rem]'><GithubIcon/></motion.a>
        <motion.a whileTap={{scale:0.9}} whileHover={{y:-3}} href='https://www.linkedin.com/in/munazar-abdulle-9140b9259/' target={'_blank'} className='w-[1.85rem] mx-4 h-[1.85rem]'><LinkedInIcon/></motion.a>
      </nav>
      <section className='absolute left-[50%] top-2 translate-x-[-50%] '>
      <Logo />
      </section>
    </header>
  )
}

export default Navbar