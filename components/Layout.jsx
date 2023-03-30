import React from 'react';
import styles from '@/styles/layout.module.scss';
import Image from 'next/image';
import logo from '../public/images/books_logo.png';
import { Store } from '@/contexts/Store';
import SearchBox from './SearchBox';


export default function Layout({ children }) {
  const {searchVal, setSearchVal } = Store();


  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={logo} alt='logo' />
          <span>books</span>
        </div>
        <SearchBox/>
      </div>
      <main>{children}</main>
    </>
  );
}
