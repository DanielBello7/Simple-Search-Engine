


import {useState} from 'react';
import {json} from '@codemirror/lang-json';
import {useData} from '../context/DataContext';
import {githubLight} from '@uiw/codemirror-theme-github';
import ButtonComponent from './ButtonComponent';
import CodeMirror from '@uiw/react-codemirror';

type CodeBoxProps = {
  setShowing: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CodeBox({setShowing}: CodeBoxProps) {
  const {ShowAlert, setData} = useData();

  const [value, setValue] = useState<string>("");

  const [isLoading, setLoading] = useState(false);

  const HandleSubmit = () => {
    if (!value.trim()) return;

    setLoading(true);

    try {
      const result = JSON.parse(value);
      
      setTimeout(() => {
        setShowing(false);
        setLoading(false);
        console.log(result);
      }, 2000);

      setTimeout(() => {
        setData(result);
      }, 3000);

    } catch (error) {
      ShowAlert("Error", false);
      return setLoading(false);
    }
  }

  return (
  <div className="w-100 flex flex-col h-full shadow sm:rounded-md sm:overflow-hidden border-2">
  <CodeMirror
    value={value}
    height="100%"
    id="codebox"
    className='flex-1 h-4/5'
    autoCapitalize='off'
    theme={{extension: githubLight}}
    extensions={[json()]}
    onChange={(e) => setValue(e)}
    />
  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
  <ButtonComponent click={HandleSubmit} 
    color="blue" 
    isLoading={isLoading} 
    title="Upload"
    />
  </div>
  </div>
  );
}