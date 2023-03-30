import React from 'react';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import cover from '../public/images/books_cover.jpg';

export default function Book({ data }) {
  return (
    <div className={styles.book}>
      <div className={styles.book_cover}>
        <Image src={cover} alt='cover' />
      </div>
      <div className={styles.info}>
        <span>{data.title}</span>
        <span>{data.author}</span>
        <span>{data.genre}</span>
      </div>
    </div>
  );
}
