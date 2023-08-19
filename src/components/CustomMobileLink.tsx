import { useRouter } from 'next/router';
import React from 'react'

const CustomMobileLink = ({
    href,
    title,
    className = "",
    setOpen
  }: {
    href: string;
    title: string;
    className: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  }) => {
    const router = useRouter();
    const handleClick = () => {
      setOpen(false);
      router.push(href);
    };
    return (
      <button
        onClick={handleClick}
        className={`${className} relative group text-light dark:text-dark my-2`}
      >
        {title}
        <span
          className={`h-[1px] inline-block  bg-light  absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${
            router.asPath === href ? "w-full" : "w-0"
          } dark:bg-dark`}
        >
          &nbsp;
        </span>
      </button>
    );
  };
export default CustomMobileLink