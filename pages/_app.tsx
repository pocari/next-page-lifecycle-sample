import '../styles/globals.css'
import type { AppPropsWithLayout } from 'next/app'
import { Component } from 'react'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
