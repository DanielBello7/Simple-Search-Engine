


import {useState} from 'react';
import {Tab} from '@headlessui/react';
import {useData} from '../context/DataContext';
import FileImportComponent from './FileImportComponent';
import ButtonComponent from './ButtonComponent';
import TextBoxComponent from './TextBoxComponent';

type TabComponentProps = {
  setShowing: React.Dispatch<React.SetStateAction<boolean>>
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function TabComponent({ setShowing }: TabComponentProps) {
  const {ShowAlert, setData} = useData();

  const [categories] = useState(["Input", "Upload"]);

  const [mainData, setMainData] = useState<any>(null);

  const [isLoading, setLoading] = useState(false);

  const HandleFileSelect = () => {}

  const HandleUpload = () => {

    setLoading(true);

    try {
      console.log(mainData);

      setTimeout(() => {
        setShowing(false);
        setLoading(false);
      }, 2000);

      return setTimeout(() => {
        setData(mainData);
      }, 3000);

    } catch (error) {
      return ShowAlert("Error setting data", false);
    }
  }

  return (
  <div className="w-full px-2 sm:px-0">
  <Tab.Group>
    <Tab.List className="flex space-x-1 rounded-xl bg-blue-500 p-1">
      {categories.map((category) => (
        <Tab key={category} className={({ selected }) =>
            classNames(
              'w-full rounded-lg py-2 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
            )
      }>{category}</Tab>))}
    </Tab.List>

    <Tab.Panels className="mt-2">
    {categories.map((category, idx) => {
      if (category === "Input") {
        return (
        <Tab.Panel key={idx} className="h-72 my-6 flex flex-col">
        <TextBoxComponent placeholder='Type something...' setMainData={setMainData}/>
        </Tab.Panel>
        );
      }
      if (category === "Upload") {
        return (
        <Tab.Panel key={idx} className="h-72 my-6">
        <div className="shadow sm:rounded-md sm:overflow-hidden border-2">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
        <FileImportComponent fileTypeText="JSON file up to 10MB" title="Upload file"/>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <ButtonComponent click={HandleFileSelect} color="blue" isLoading={isLoading} title="Upload"/>
        </div>
        </div>
        </Tab.Panel>
        );
      }
    })}
    </Tab.Panels>
  </Tab.Group>
  </div>
  );
}