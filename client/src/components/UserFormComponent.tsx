


import {useState, useEffect, useRef} from 'react';
import {Transition} from '@headlessui/react';
import {useData} from '../context/DataContext';
import TextInformation from './TextInformation';
import TextInputBox2 from './TextInputBox2';
import ButtonComponent from './ButtonComponent';


export default function UserFormComponent() {
  const firstnameRef = useRef<HTMLInputElement>(null);
  
  const lastnameRef = useRef<HTMLInputElement>(null);

  const emailRef = useRef<HTMLInputElement>(null);

  const {ShowAlert, setUser} = useData();

  const [isShowing, setShowing] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setLoading(true);

    const data = {
      firstname: firstnameRef.current?.value as string,
      lastname: lastnameRef.current?.value as string,
      email: emailRef.current?.value as string
    }
    
    try {
      setTimeout(() => {
        setShowing(false);
        setLoading(false);
      }, 2000);
      
      return setTimeout(() => {
        setUser(data);
      }, 3000);
    }
    catch (error) {
    return ShowAlert("Error handling data. PLease try again", false);
    }
  }
  
  useEffect(() => {
    const open = setTimeout(() => setShowing(true), 500);
    return () => clearTimeout(open);
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
      
  <div className='w-100 md:w-3/5 lg:w-1/2 px-2'>
  <div className="md:grid md:grid-cols-3 md:gap-6">


    <TextInformation title="Personal Information" body="Use a permanent address where you can receive mail."/>
    
    <div className="mt-5 md:mt-0 md:col-span-2">
    <form className="shadow overflow-hidden sm:rounded-md" onSubmit={HandleSubmit}>
    <div className="px-4 py-5 bg-white sm:p-6">
    <TextInputBox2 title="First name" 
      length="3" 
      disabled={isLoading} 
      value={firstnameRef} 
      id="first-name" 
      type='text'/>
    
    <TextInputBox2 title="Last name" 
      length="3" 
      disabled={isLoading} 
      id="last-name"
      type='text'
      value={lastnameRef}/>
    
    <TextInputBox2 title="Email" 
      length="6" 
      disabled={isLoading} 
      id="email"
      type='email'
      value={emailRef}/>
    </div>

    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
    <ButtonComponent click={HandleSubmit} title="Continue" color='blue' isLoading={isLoading}/>
    </div>
    </form>
    </div>


  </div>
  </div>
  </Transition>
  );
}