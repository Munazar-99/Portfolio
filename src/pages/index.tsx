import Image from "next/image";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { GetStaticProps } from "next";
import { HomePage } from "../../typings";
import { sanityClient, urlFor } from "../../sanity";
import { useTypewriter } from "react-simple-typewriter";
import { groq } from "next-sanity";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type Props = {
  homepage: HomePage;
};

export default function Home({ homepage }: Props) {
  const [text, helper] = useTypewriter({
    words: ["Software", "Front-End", "Back-End", "Full-Stack", "Mobile"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <Head>
        <title>Software Developer Portfolio - Munazar Ali </title>
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-auto dark:text-light ">
        <section className="w-full h-full inline-block z-0 bg-light p-24 pt-0 md:pt-16 sm:pt-8 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 lg:mb-32 lg:mt-10 sm:mb-10">
          <section className="flex items-center justify-between w-full lg:flex-col">
            <article className="w-1/2 md:w-full ">
              <Image
                width={500}
                height={500}
                priority={true}
                src={urlFor(homepage.heroImage).url()}
                alt="munazar"
                className="  w-[95%]  h-auto lg:hidden md:inline-block md:w-full "
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </article>
            <article className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
              <h1>
                <AnimatedText
                  className="!text-[3.80rem] !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
                  text={homepage.title}
                />
              </h1>
              <p className="my-4 text-base font-medium  md:text-sm sm:text-xs min-h-[128px] xs:text-left">
                {homepage.introduction.replace("software", `${text}`)}
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/MunazarAli_FullStackDeveloper.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent 
                 hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base  "
                >
                  Resume <ArrowTopRightOnSquareIcon className={"w-6 ml-1"} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  href="mailto:munazar.ali.001@gmail.com"
                >
                  Contact
                </Link>
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const query = groq`*[_type == 'homepage'][0]{
    ...,
    socials[]->
}`;
  const homepage: HomePage = await sanityClient.fetch(query);
  return {
    props: { homepage },
    revalidate: 10,
  };
};
