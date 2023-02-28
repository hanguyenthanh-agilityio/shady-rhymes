import { Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import { NAV_ITEMS } from '../constants/common';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Navbar navItem={NAV_ITEMS} />
    </>
  );
};

export default Home;
