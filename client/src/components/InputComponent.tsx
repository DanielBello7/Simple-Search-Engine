


import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import TabComponent from './TabComponent';

export default function InputComponent() {
  const [isShowing, setShowing] = useState(false);

  useEffect(() => {
    const changeState = setTimeout(() => setShowing(true), 500);
    return () => clearTimeout(changeState);
  }, []);

  return (
  <Transition as="div" show={isShowing} appear={true}
    enter="transition-opacity duration-1000"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-150"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className="w-100 flex h-full items-center justify-center"
    >
  <div className='w-full md:w-3/5 lg:w-2/5 px-2 sm:px-5'>
  <h1 className='font-bold text-2xl mb-8'>Upload Data</h1>
  <TabComponent setShowing={setShowing}/>
  </div>
  </Transition>
  );
}