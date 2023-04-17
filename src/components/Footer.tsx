import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <section className='py-8 flex items-center justify-center lg:py-6'>
                <span>{new Date().getFullYear()} &copy; Munazar Ali</span>
            </section>
        </footer>
    )
}

export default Footer