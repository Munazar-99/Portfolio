import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectpage from '../../public/Images/agency-website-cover-image.jpg'
import TransitionEffect from '@/components/TransitionEffect'
import { Project } from '../../typings'
import { GetStaticProps } from 'next'
import { fetchProjects } from '../../utils/fetchProjects'


type Props = {
    projects: Project[];
  }

const FeaturedProject = ({ type, title, summary, image, link, github }: { type: string, title: string, summary: string, image: StaticImageData, link: string, github: string }) => {
    return (
        <div className='w-full flex items-center justify-between ronded-br-2xl relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl  xs:p-4 '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark/50 dark:bg-light/80 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

            <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '
            >
                <Image src={image} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2 '>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm  '>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summary}</p>
                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link href={link} target='_blank' className='w-10'><GithubIcon /></Link>
                    <Link href={github} target='_blank' className='m1-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base '>Visit Project</Link>
                </div>
            </div>
        </div>
    )
}

const Project = ({ type, title, summary, image, link, github }: { type: string, title: string, summary: string, image: StaticImageData, link: string, github: string }) => {
    return (
        <div className='w-full flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light  p-6 relative shadow-2xl dark:bg-dark dark:border-light xs:p-4  '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark/50 dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:roubded-[1.5rem]' />
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg  '
            >
                <Image src={image} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4 '>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base lg-text-lg md-text-base   '>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2 '>
                    <h2 className='my-2 w-full text-left text-3xl font-bold  lg:text-2xl   '>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light '>{summary}</p>
                <div className='mt-2 flex items-center justify-between w-full '>
                    <Link href={link} target='_blank' className='  text-lg font-semibold hover:underline dark:bg-dark dark:text-light md:text-base  '>Visit</Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon /></Link>
                </div>
            </div>
        </div>
    )
}

function projects({projects}:Props) {
    console.log(projects)
    return (
        <>
            <Head>
                <title>Munazar Ali About Page</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light '>
                <section className='w-full h-full inline-block z-0 bg-light p-24 pt-12 md:pt-16 md:p-12 sm:p-8 dark:bg-dark'>
                    <AnimatedText text='My Recent Work' className='mb-16 !text-[4rem] lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-6xl' />
                    <section className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>
                        <article className='col-span-12'>
                            <FeaturedProject title={projects[0].title} summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency ' link='/' type='Featured Projects' github='/' image={projectpage} />
                        </article>
                        <article className='col-span-6 sm:col-span-12'>
                            <Project title='Crypto Screener Application' summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency ' link='/' type='Featured Projects' github='/' image={projectpage} />
                        </article>
                        <article className='col-span-6 sm:col-span-12'>
                        <Project title='Crypto Screener Application' summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency ' link='/' type='Featured Projects' github='/' image={projectpage} />
                        </article>
                    </section>
                </section>
            </main>
        </>
    )
}

export const getStaticProps:GetStaticProps<Props> = async() => {
    const projects = await fetchProjects();
    return {
      props:{projects},
      revalidate:10
    }
  }
export default projects