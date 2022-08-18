


import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

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
    >
  <h1 className='text-4xl' onClick={() => setShowing(false)}>input component</h1>
  </Transition>
  );
}