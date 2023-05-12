import { Tab } from '@headlessui/react';
import { useState } from 'react';
import CodeBox from './CodeBox';
import ImportBox from './ImportBox';

type TabComponentProps = {
  setShowing: React.Dispatch<React.SetStateAction<boolean>>
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function TabComponent({ setShowing }: TabComponentProps) {
  const [categories] = useState(["Input", "Upload"]);

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
          {
            categories.map((category, idx) => {
              return (
                <Tab.Panel key={idx} className={`h-72 my-6`}>
                  {
                    category === "Input"
                      ? <CodeBox setShowing={setShowing} />
                      : <ImportBox setShowing={setShowing} />
                  }
                </Tab.Panel>
              );
            })
          }
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}