import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg '>
            <section className='py-8 flex items-center justify-around'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            </section>
        </footer>
    )
}

export default Footer