import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import Head from 'next/head';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import{ Analytics } from '@vercel/analytics/react';


const montserrat = Montserrat({
  subsets: ['latin'],
})


export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.className} bg-light w-full min-h-screen dark:bg-dark`} >
      <Navbar/>
      <AnimatePresence mode='wait'>
      <Component key={router.asPath}  {...pageProps} />
      </AnimatePresence>
      <Footer/>
      <Analytics />
    </main>
    </>
  );
}
