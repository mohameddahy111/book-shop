import bookList from '@/utiles/data';
import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState('');
  const [sortValue, setSortValue] = useState('title');
  const [filterList, setFilterList] = useState([]);
  const [sortList, setSortList] = useState([]);
  const [noRes, setNoRes] = useState(false);

  const search = () => {
    const resule = bookList.filter(
      x =>
        x.title === searchVal || x.author === searchVal || x.genre === searchVal
    );
    console.log(resule);
    if (resule.length > 0) {
      setFilterList(resule);
    } else {
      setNoRes(true);
    }
  };
  useEffect(() => {
    if (searchVal === '') {
      setNoRes(false);
    }
  }, [searchVal]);

  return (
    <DataContext.Provider
      value={{
        searchVal,
        setSearchVal,
        filterList,
        setFilterList,
        search,
        noRes,
        setNoRes,
        sortValue,
        setSortValue,
        sortList,
        setSortList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const Store = () => {
  return useContext(DataContext);
};
