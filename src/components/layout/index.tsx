import Head from 'next/head';
import {
  FC,
  PropsWithChildren,
} from 'react';

import Footer from '../footer';
import Header from '../head';
import { ChildProps } from './types';

const Layout: FC<
  PropsWithChildren<ChildProps>
> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kodland | POP IT!</title>
      </Head>
      <Header />

      <>{children}</>

      <Footer />
    </>
  );
};

export default Layout;
