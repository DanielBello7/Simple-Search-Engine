


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
  const {ShowAlert, setHasData, axios, setData} = useData();

  const [value, setValue] = useState<string>("");

  const [isLoading, setLoading] = useState(false);

  const HandleSubmit = async () => {
    if (!value.trim()) return ShowAlert('Enter JSON data', false);

    setLoading(true);

    try {
      const result = JSON.parse(value);

      const sendResult = await axios.get("/data/ready");

      const res = await sendResult.data.success;

      if (!res) return ShowAlert("Error uploading data", false);

      setShowing(false);
      
      setLoading(false);

      return setTimeout(() => {

        if (typeof(result) !== "object") {
          setShowing(true);
          return ShowAlert("Data type not understood", false);
        }
        
        setHasData(true);

        if (Array.isArray(result)) return setData(result);

        return setData([result]);

      }, 1000);

    } catch (error: any) {

      ShowAlert("Error uploading data. Check the data", false);

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