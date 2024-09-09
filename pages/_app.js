import '../dist/output.css'
import Head from 'next/head'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
