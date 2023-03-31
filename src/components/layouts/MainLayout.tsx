import Head from 'next/head';
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';
import { FC, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Marcos</title>
        <meta name='description' content='Home Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
