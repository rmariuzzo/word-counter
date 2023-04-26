import '@/styles/globals.css'
import { Open_Sans } from 'next/font/google'
import type { AppProps } from 'next/app'

const opensSans = Open_Sans({subsets:['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={opensSans.className}><Component {...pageProps} /></main>
}
