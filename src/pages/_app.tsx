import AOS from 'aos';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import Layout from '../components/layout';
import '../styles/globals.css';

export default function App({
  Component,
  pageProps,
}: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 500,
      easing: 'ease-in-out',
      delay: 250,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
