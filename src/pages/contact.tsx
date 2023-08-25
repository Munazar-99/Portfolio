import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React, { useRef } from "react";
import { ContactSvg } from "../components/Icons";
import AnimatedText from "@/components/AnimatedText";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formData = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.current &&
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
          formData.current,
          `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            console.log(result);
            formData.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
  };
  return (
    <>
      <Head>
        <title>Munazar Ali Contact Page</title>
        <meta name="description" content="contact" />
      </Head>
      <TransitionEffect />

      <main className="flex w-full h-screen  flex-wrap p-24 pt-16 md:p-2 md:pt-6   md:justify-center md:items-center lg:p-10 xl:p-12  ">
        <section className=" flex h-[550px] w-1/2 dark:bg-dark bg-light md:hidden lg:h-[400px] lg:mt-8  xl:h-[450px]">
          <ContactSvg styling="h-full w-full " />
        </section>

        <section className="flex flex-col w-1/2 z-0  p-8 pt-3 max-h-full md:w-full md:p-0 md:px-3 md:pt-[3px] md:items-center lg:p-4 lg:pt-0 xl:p-4">
          <AnimatedText
            text="Get In Touch!"
            className="mb-16 !text-[4rem] xl:!text-[3.3rem] lg:!text-[2.7rem]  md:!text-4xl md:mb-8 lg:mb-10 xl:mb-4"
          />
          <form
            ref={formData}
            onSubmit={sendEmail}
            className="w-full max-h-full bg-light flex flex-wrap  gap-2 content-start  gap-y-6 md:gap-y-6 dark:bg-dark md:max-w-[430px]  "
          >
            <input
              name="first-Name"
              required
              type="text"
              placeholder="First Name"
              className="w-[48%]  border-2 border-solid h-[3rem] border-black rounded-2xl  bg-dark/10 md:w-full dark:bg-light/10 md:h-[2.5rem] p-5 dark:text-light dark:border-light"
            />
            <input
              name="last-Name"
              required
              type="text"
              placeholder="Last Name"
              className="w-[48%] border-2 border-solid h-[3rem] border-black rounded-2xl  bg-dark/10 md:w-full dark:bg-light/10 md:h-[2.5rem] p-5 dark:text-light  dark:border-light"
            />
            <input
              name="email-Address"
              required
              type="email"
              placeholder="Email Address"
              className="w-[48%] border-2 border-solid h-[3rem] border-black rounded-2xl  bg-dark/10 md:w-full dark:bg-light/10 md:h-[2.5rem] p-5 dark:text-light dark:border-light "
            />
            <input
              name="phone-Number"
              type="number"
              placeholder="Phone No."
              className="w-[48%] border-2 border-solid h-[3rem] border-black rounded-2xl  bg-dark/10 md:w-full dark:bg-light/10 md:h-[2.5rem] p-5 dark:text-light  dark:border-light"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Message"
              className="border-2 border-black border-solid w-full resize-none dark:bg-light/10 p-3 bg-dark/10 rounded-2xl dark:border-light md:p-4"
            />
            <button
              value={"send"}
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent
                 hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-2 md:text-base   "
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Contact;
