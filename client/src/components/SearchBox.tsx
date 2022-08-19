


import React, {useState} from 'react';
import {BiSearch} from 'react-icons/bi';
import {FaTimes} from 'react-icons/fa';
import {useData} from '../context/DataContext';
import ResultBox from './ResultBox';

type SearchBoxProps = {
  setResult: React.Dispatch<React.SetStateAction<any[]>>
}

export default function SearchBox({setResult}: SearchBoxProps) {
  const {setSearchActive, searchActive} = useData();

  const [search, setSearch] = useState<string>("");

  const [recent, setRecent] = useState(['James Balogun', 'Joseph Desmond']);

  const [isLoading, setLoading] = useState(false);

  const [current, setCurrent] = useState<any[]>([
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
    'Goke Bello',
  ]);

  const HandleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchItem = search.trim();
    if (!searchItem) return;
    setLoading(true);
    recent.length <=3 && setRecent(prevState => [...prevState, searchItem]);
  }

  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.currentTarget.value;
    if (!val.trim()) {
      setSearch("");
      return setLoading(false);
    }

    setLoading(true);
    setSearch(val);
  }

  return (
  <div className="w-full flex h-full relative flex-col items-center justify-center px-3">
    <div className='w-full absolute top-0 h-full -z-1' onClick={() => setSearchActive(false)}/>
    <form className={`${!searchActive ? "bg-gray-100" : "bg-white"} w-full md:w-4/5 lg:w-2/5 flex flex-row items-center p-3 rounded-lg mt-10 shadow z-10`} 
          onSubmit={HandleSearch}>
    <BiSearch size={30} color="grey" className="mr-3" />
    <input type="text" className="w-full bg-transparent text-xl focus:outline-none" 
      placeholder="Quick Access"
      autoComplete='off'
      autoCorrect='off'
      id="search"
      value={search}
      onChange={HandleChange}
      onFocus={() => setSearchActive(true)}
      autoCapitalize='off'
      />
    {search.trim() && <FaTimes size={20} color="gray" onClick={() => setSearch("")} className="cursor-pointer" />}
    </form>

    {
      searchActive && 
      <ResultBox searchActive={searchActive} 
                 isLoading={isLoading} 
                 searchItem={search} 
                 recent={recent}
                 results={current}
                 setRecent={setRecent}
                 setResult={setResult}
                 />
    }
  </div>
  );
}