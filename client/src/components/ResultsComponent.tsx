import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { FaTimesCircle } from 'react-icons/fa';
import { useData } from '../context/DataContext';

type ResultsComponentProps = {
  results: any[],
  clearSearch: Function
}

export default function ResultsComponent({ results, clearSearch }: ResultsComponentProps) {
  const [show, setShow] = useState(false);
  const { setSearchActive } = useData();
  const res = JSON.stringify(results, null, 4)

  const GoBack = () => {
    setShow(false);
    return setTimeout(() => clearSearch(), 500);
  }

  useEffect(() => {
    setSearchActive(false);
    const timeoutID = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <Transition show={show}
      className="z-10 w-full flex h-full relative flex-col items-center justify-center px-3 py-10"
      as="div"
      id='result-box'
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <div className='w-full md:w-4/5 lg:w-3/5 border h-full bg-gray-100 p-3 rounded-2xl shadow overflow-scroll'>
        <pre className='w-full h-full'>{res}</pre>
      </div>

      <div className='w-full md:w-4/5 lg:w-3/5 flex flex-row mt-5 justify-end'>
        <button onClick={GoBack} className="flex flex-row items-center shadow-md px-4 py-2 rounded bg-red-500 hover:bg-red-700 text-white">
          <FaTimesCircle size={20} color="white" />
          <span className='ml-2'>Close</span>
        </button>
      </div>
    </Transition>
  );
}