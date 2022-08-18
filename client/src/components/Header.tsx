


import {FaBook} from 'react-icons/fa';
import OptionsComponent from "./OptionsComponent";

export default function Header() {
  return (
  <header className="container mx-auto w-100 flex justify-between py-4 px-2 md:px-2 lg:px-2">
  <div className='flex items-center flex-row'>
  <h1 className="text-4xl font-bold mr-2">finder</h1>
  <FaBook size={30} />
  </div>
  
  <OptionsComponent />
  </header>
  );
}