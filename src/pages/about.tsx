import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { GetStaticProps } from "next";
import { fetchAboutPage } from "../../utils/fetchAboutPages";
import { AboutPage, Skill } from "../../typings";
import { fetchSkills } from "../../utils/fetchSkills";
import { groq } from "next-sanity";
import { sanityClient, urlFor } from "../../sanity";

type Props = {
  aboutPage: AboutPage;
  skills: Skill[];
};

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.innerText = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = ({ aboutPage, skills }: Props) => {
  return (
    <>
      <Head>
        <title>Munazar Ali About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light  ">
        <section className="w-full h-full inline-block z-0 bg-light p-32 pt-16 lg:p-16 md:p-12 sm:p-8  dark:bg-dark">
          <AnimatedText
            text="Coding Across Continents!"
            className="mb-16 !text-[4rem] lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <article className=" grid w-full grid-cols-9 gap-4 xl:gap-8 lg:gap-4 sm:gap-8">
            <div className="col-span-5  flex flex-col items-start justify-center md:order-2  md:col-span-9 lg:col-span-9 xs:text-left">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {aboutPage.title}
              </h2>
              <p className="font-medium">{aboutPage.firstParagraph}</p>
              <p className="font-medium my-4"> {aboutPage.secondParagraph}</p>
              <p className="font-medium">{aboutPage.thirdParagraph}</p>
            </div>
            <div className="col-span-4   flex justify-center items-center md:order-1 lg:hidden md:flex md:col-span-9 ">
              <section
                className="h-max w-[80%] relative rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:h-full xl:w-full lg:h-[85%] lg:w-[85%] xs:h-max xs:w-full
                        md:h-[95%] md:w-[75%]  dark:bg-dark  dark:border-light"
              >
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light " />
                <Image
                  priority={true}
                  src={urlFor(aboutPage.profileimge).url()}
                  width={1179}
                  height={1570}
                  alt="Munazar Ali"
                  className="w-full h-full rounded-2xl  "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </section>
            </div>
            {/* <section className='col-span-2 flex flex-col items-end justify-between  '>
                            <article className='flex flex-col items-end justify-center ' >
                                <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={50}/>+</span>
                                <h2 className='text-xl font-medium cpitalize text-dark/75'>satisfied clients</h2>
                            </article>
                            <article className='flex flex-col items-end justify-center '>
                            <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={40}/>+</span>
                                <h2 className='text-xl font-medium cpitalize text-dark/75' >projects completed</h2>
                            </article>
                            <article className='flex flex-col items-end justify-center '>
                            <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={4}/>+</span>
                                <h2 className='text-xl font-medium cpitalize text-dark/75'>yeas of experience</h2>
                            </article>
                        </section> */}
          </article>
          <Skills skills={skills} />
        </section>
      </main>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const query = groq`*[_type == 'skill']`;

  const aboutQuery = groq`*[_type == 'aboutpage'][0]`;
  const aboutPage: AboutPage = await sanityClient.fetch(aboutQuery);
  const skills: Skill[] = await sanityClient.fetch(query);

  return {
    props: { aboutPage, skills },
    revalidate: 10,
  };
};
