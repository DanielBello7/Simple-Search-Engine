


import React from 'react';
import Loader from './Loader';
import {BiSearch, BiTrash, BiFile} from 'react-icons/bi';
import {Transition} from '@headlessui/react';
import {FaTimes} from 'react-icons/fa';

type ResultBoxProps = {
  searchActive: boolean,
  isLoading: boolean,
  searchItem: string,
  recent: any[],
  results: any[],
  setResult: React.Dispatch<React.SetStateAction<any | null>>,
  setRecent: React.Dispatch<React.SetStateAction<any[]>>
}

export default function ResultBox(props: ResultBoxProps) {
  const {searchActive, isLoading, searchItem, recent, results, setRecent, setResult} = props;

  const RemoveRecentItem = (id: number) => {
    const filtered = recent.filter((item: any, index: number) => index !== id);
    return setRecent(filtered);
  }
  
  const recentOutput = recent.map((item, index) => (
    <div className='w-full flex flex-row items-center justify-between hover:bg-slate-50 transition 0.3s p-2 rounded-lg cursor-pointer' 
    key={index}
    >
    <div className='flex flex-row items-center w-full' onClick={() => alert(index)}>
    <BiFile color='blue' size={18}/>
    <span className="ml-3 text-gray-400 font-bold">{item}</span>
    </div>
    <FaTimes color='black' size={18} onClick={() => RemoveRecentItem(index)}/>
    </div>
  ));

  const resultOutput = results.map((item, index) => (
    <div className='w-full flex flex-row items-center hover:bg-slate-50 transition 0.3s p-2 rounded-lg cursor-pointer' 
    key={index}
    onClick={() => setResult(item)}
    >
    <BiFile color='blue' size={18}/>
    <span className="ml-3 text-gray-400 font-bold">{item}</span>
    </div>
  ));

  return (
  <Transition show={searchActive} 
    className="border max-h-full bg-white w-full md:w-4/5 lg:w-2/5 flex flex-col items-center py-3 px-3 rounded-lg mb-10 mt-2 shadow overflow-scroll z-10" 
    as="div"
    enter="transition duration-100 ease-out"
    enterFrom="transform scale-95 opacity-0"
    enterTo="transform scale-100 opacity-100"
    leave="transition duration-75 ease-out"
    leaveFrom="transform scale-100 opacity-100"
    leaveTo="transform scale-95 opacity-0"
  >
    {
      searchActive && !searchItem.trim() && recent.length > 0 &&
      <React.Fragment>
      <p className='w-full px-2 text-sm text-gray-300'>Recent Search</p>
      {recentOutput}
      <div className='w-full flex flex-row items-center hover:bg-slate-50 transition 0.3s p-2 rounded-lg cursor-pointer' 
      onClick={() => setRecent([])}>
      <BiTrash color='red' size={18}/>
      <span className="ml-3 text-gray-400 font-bold">Clear recently searched</span>
      </div>
      <div className='w-full border border-t border-b-0 mt-3 mb-5' />
      </React.Fragment>
    }

    {
      searchItem.trim() && !isLoading && results.length <= 0 && <p className='w-full px-2 text-sm text-gray-300 text-center'>No results</p>
    }

    {
      searchItem.trim() && results.length > 0 && isLoading &&
      <React.Fragment>
      <p className='w-full px-2 text-sm text-gray-300 text-start'>Results</p>
      {resultOutput}
      </React.Fragment>
    }

    {
      !isLoading && !searchItem.trim() &&
      <div className='w-full flex flex-col justify-center items-center py-10'>
      <BiSearch size={80} color="grey"/>
      <p className='text-center w-2/3 text-xl text-gray-400'>Quickly Search for items and information within the data provided</p>
      </div>
    }


    {
      searchActive && isLoading && searchItem.trim() &&
      <React.Fragment>
      <div className='w-full border border-t border-b-0 mt-5' />
      <div className='w-full flex flex-row items-center mt-3 p-2'>
      <Loader color='text-blue-200' size={20}/>
      <span className="ml-3 text-gray-400 font-bold">Currently searching for {searchItem}...</span>
      </div>
      </React.Fragment>
    }
  </Transition>
  );
}