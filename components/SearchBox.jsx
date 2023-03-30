import React from 'react';
import styles from '@/styles/layout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@/contexts/Store';

export default function SearchBox() {
  const { setSearchVal, search } = Store();

  return (
    <div className={styles.searchBox}>
      <input
        type='text'
        name=''
        id=''
        placeholder='Search...'
        onChange={e => setSearchVal(e.target.value)}
      />
      <button onClick={() => search()}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: '#18191b' }}
        />
      </button>
    </div>
  );
}
