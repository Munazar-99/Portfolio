import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import Head from 'next/head';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
})


export default function MyApp({ Component, pageProps }: AppProps) {
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
      <main className={`${montserrat.className} bg-light w-full min-h-screen`} >
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </main>
    </>
  );
}
