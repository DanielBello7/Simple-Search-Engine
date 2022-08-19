


import React, {useState} from 'react';
import {BiSearch} from 'react-icons/bi'
import {useData} from '../context/DataContext';
import Loader from './Loader';

type SearchBoxProps = {
  setResults: React.Dispatch<React.SetStateAction<any[]>>,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  search: string
}

// function SearchContainer() {
//   return null;
// }

export default function SearchBox({setResults, search, setSearch}: SearchBoxProps) {
  const {setSearchActive, searchActive} = useData();

  const [isLoading, setLoading] = useState(false);

  const HandleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
  }

  return (
  <div className="w-100 h-full flex items-center justify-center px-3">
    
    <form className={`${!searchActive ? "bg-gray-100" : "bg-white"} w-full md:w-4/5 lg:w-2/4 flex flex-row items-center p-3 rounded-lg mb-10 -mt-10`} 
          onSubmit={HandleSearch}>
    <BiSearch size={30} color="grey" className="mr-3" />
    <input type="text" className="w-full bg-transparent text-xl focus:outline-none" 
      placeholder="Quick Access"
      autoComplete='off'
      autoCorrect='off'
      id="search"
      onFocus={() => setSearchActive(true)}
      autoCapitalize='off'
      />
    {isLoading&& <Loader color='black' size={24}/>}
    </form>

  </div>
  );
}