


import React, {useState, useEffect} from 'react';
import Axios, {AxiosError} from 'axios';
import {BiSearch} from 'react-icons/bi';
import {FaTimes} from 'react-icons/fa';
import {useData} from '../context/DataContext';
import {Transition} from '@headlessui/react';
import ResultBox from './ResultBox';

type SearchBoxProps = {
  setResult: React.Dispatch<React.SetStateAction<any[]>>
}

export default function SearchBox({setResult}: SearchBoxProps) {

  const [isShown, setIsShown] = useState(false);

  const {setSearchActive, searchActive, axios, ShowAlert, data} = useData();

  const [search, setSearch] = useState<string>("");

  const [recent, setRecent] = useState<any[]>([]);

  const [isLoading, setLoading] = useState(false);

  const [current, setCurrent] = useState<any[]>([]);

  const HandleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchItem = search.trim();
    if (!searchItem) return;
    setLoading(true);
    recent.length <=3 && setRecent(prevState => [...prevState, searchItem]);
  }

  useEffect(() => {
    const controller = new AbortController();

    const timeoutID = setTimeout(() => controller.abort('timeout'), 12000);

    setLoading(true);

    setCurrent([]);

    if (!search.trim()) return setLoading(false);
    
    const searchTimeout = setTimeout(() => {

      // axios.get(`/search/${search}`, {signal: controller.signal})
      axios.post('/search', {data: data, search: search}, {signal: controller.signal})
      .then((res) => {
        const results = res.data.data;

        setCurrent(results);

        return setLoading(false);
      })
      .catch((error) => {
        const err = error as AxiosError;

        if (controller.signal.reason === 'timeout') {
          ShowAlert('Request Timeout', false);
          return setLoading(false);
        }
        
        if (Axios.isCancel(error)) return;

        setLoading(false);

        return ShowAlert(err.message, false);
      });

    }, 500);
    
    return () => {
      controller.abort();

      clearTimeout(timeoutID);

      clearTimeout(searchTimeout);
    }
  }, [search]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsShown(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Transition className="w-full flex h-full relative flex-col items-center justify-center px-3" show={isShown}
    enter="transform transition-opacity duration-500"
    enterFrom="opacity-0 scale-50"
    enterTo="opacity-100 scale-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className='w-full absolute top-0 h-full -z-1' onClick={() => setSearchActive(false)}/>
    <form className={`${!searchActive ? "bg-gray-100 -mt-10 mb-10" : "bg-white"} w-full md:w-4/5 lg:w-2/5 flex flex-row items-center p-3 rounded-lg shadow z-10`} 
          onSubmit={HandleSearch}
          id="search-form">
    <BiSearch size={30} color="grey" className="mr-3" />
    <input type="text" className="w-full bg-transparent text-xl focus:outline-none" 
      placeholder="Quick Access"
      autoComplete='off'
      autoCorrect='off'
      id="search"
      value={search}
      onChange={(e) => setSearch(e.currentTarget.value)}
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
  </Transition>
  );
}