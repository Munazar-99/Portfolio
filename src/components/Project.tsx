import Link from 'next/link';
import React from 'react'
import { GithubIcon } from './Icons';
import Image from "next/image";


const Project = ({
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
      <div className="w-full min-h-full h-max flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light max-h-full  p-6 relative shadow-2xl dark:bg-dark dark:border-light xs:p-4  ">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark/50 dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:roubded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg  "
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
  
        <div className="w-full flex flex-col items-start justify-between  mt-4 ">
          <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base lg-text-lg md-text-base   ">
            {" "}
            Featured Project{" "}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2 "
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold  lg:text-2xl   ">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light ">{summary}</p>
          <div className="mt-2 flex items-center justify-between w-full ">
            <Link
              href={link}
              target="_blank"
              className="  text-lg font-semibold hover:underline dark:bg-dark dark:text-light md:text-base  "
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    );
  };
  

export default Project