import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FaCog, FaMoon, FaSun, FaInfoCircle, FaTrashAlt, FaUserCircle } from 'react-icons/fa';
import { useData } from '../context/DataContext';


export default function OptionsComponent() {
  const { isDarkMode, setUser, setData, setDarkMode, ShowAlert, setHasData, setRecent } = useData();

  const ClearSession = () => {
    setData(null);
    setHasData(false);
    setRecent([]);
    return setUser(null);
  }

  const ClearData = () => {
    setData(null);
    setRecent([]);
    return setHasData(false)
  }

  return (
    <div className="w-56 text-right z-30">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="px-4 py-2 focus:outline-none">
            <FaCog size={20} fill="white" stroke='black' strokeWidth={40} />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {
                  ({ active, disabled }) => (
                    <button disabled={disabled}
                      onClick={() => setDarkMode(isDarkMode ? false : true)}
                      className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {isDarkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
                      <span className='ml-2 font-bold'>{isDarkMode ? "Light mode" : "Dark mode"}</span>
                    </button>
                  )
                }
              </Menu.Item>

              <Menu.Item>
                {
                  ({ active, disabled }) => (
                    <button disabled={disabled}
                      onClick={ClearSession}
                      className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaUserCircle size={15} />
                      <span className='ml-2 font-bold'>Clear session</span>
                    </button>
                  )
                }
              </Menu.Item>

              <Menu.Item>
                {
                  ({ active, disabled }) => (
                    <button disabled={disabled}
                      onClick={() => ShowAlert("Finder. Visit our website for more details", true)}
                      className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaInfoCircle size={15} />
                      <span className='ml-2 font-bold'>About finder</span>
                    </button>
                  )
                }
              </Menu.Item>
              <hr />
              <Menu.Item>
                {
                  ({ active, disabled }) => (
                    <button disabled={disabled}
                      onClick={ClearData}
                      className={`${active ? 'bg-red-500 text-white' : 'text-red-500'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <FaTrashAlt size={15} />
                      <span className='ml-2 font-bold'>Clear data</span>
                    </button>
                  )
                }
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}