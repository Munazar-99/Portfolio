import Link from 'next/link';
import React from 'react'
import { GithubIcon } from './Icons';
import Image from "next/image";


const FeaturedProject = ({
    title,
    summary,
    image,
    link,
    github,
  }: {
    title: string;
    summary: string;
    image: string;
    link: string;
    github: string;
  }) => {
    return (
      <div className="w-full flex items-center justify-between ronded-br-2xl relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl  xs:p-4 ">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark/50 dark:bg-light/80 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
  
        <Link
          href={github}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full "
        >
          <Image
            src={image}
            alt={title}
            width={1280}
            height={720}
            priority={true}
            className="w-full h-auto"
          />
        </Link>
  
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
            Featured Projects
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2 "
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm  ">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">
            {summary}
          </p>
          <div className="mt-2 flex items-center justify-between w-full">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="m1-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base "
            >
              Visit Project
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default FeaturedProject