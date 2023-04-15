import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import SvgComponent from './Icons'



const Logo = () => {
    const MotionLink = motion(Link)

  return (
    <article className='flex items-center just-center mt-2'>
    <MotionLink href='/'
    whileHover={{
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition: {duration: 1, repeat: Infinity}
    }}
    className='w-16 h-16 bg-dark fill-light text-light flex justify-center items-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
    >
        <SvgComponent/>
    </MotionLink>
</article>
  )
}

export default Logo