import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { Tproject } from "../../typings";
import { GetStaticProps } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { groq } from "next-sanity";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";

type Props = {
  projects: Tproject[];
};


function Projects({ projects }: Props) {
  return (
    <>
      <Head>
        <title>Munazar Ali About Page</title>
        <meta name="description" content="any description" />
        <meta
          name="keywords"
          content="software developer, web development, mobile app development, software engineering, tech industry, job search"
        />
        <meta name="author" content="Munazar Ali Abdulle" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light  ">
        <section className="w-full h-full inline-block z-0 bg-light p-24 pt-12 md:pt-16 md:p-12 sm:p-8 dark:bg-dark">
          <AnimatedText
            text="My Recent Work"
            className="mb-16 !text-[4rem] lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-6xl"
          />
          <section className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            {projects.map((project, i) => {
              return i % 3 == 0 ? (
                <article key={project._id} className="col-span-12">
                  <FeaturedProject
                    title={project.title}
                    summary={project.summary}
                    link={project.linktobuild}
                    github={project.linktogithub}
                    image={urlFor(project.image).url()}
                  />
                </article>
              ) : (
                <article
                  key={project._id}
                  className="col-span-6 sm:col-span-12"
                >
                  <Project
                    title={project.title}
                    summary={project.summary}
                    link={project.linktobuild}
                    github={project.linktogithub}
                    image={urlFor(project.image).url()}
                  />
                </article>
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const query = groq`*[_type == 'projects'] | order(_createdAt desc){
        ...,
        technologies[]->
    }`;
  const projects: Tproject[] = await sanityClient.fetch(query);
  return {
    props: { projects },
    revalidate: 10,
  };
};
export default Projects;
