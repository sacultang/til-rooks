/* eslint-disable react/no-unknown-property */
import type { AppProps } from 'next/app'
import '@/scss/index.scss'
import { raleway, firecode, notosans, inter } from './_font'
import '../styles/globals.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --raleway: ${raleway.style.fontFamily};
          --fira-code: ${firecode.style.fontFamily};
          --notosans: ${notosans.style.fontFamily};
          --inter: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
