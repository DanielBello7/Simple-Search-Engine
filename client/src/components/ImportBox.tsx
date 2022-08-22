


import {useState} from "react";
import {useData} from "../context/DataContext";
import FileImportComponent from "./FileImportComponent";
import ButtonComponent from "./ButtonComponent";

type ImportBoxProps = {
  setShowing: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ImportBox({setShowing}: ImportBoxProps) {
  const {ShowAlert, setHasData, axios, setData, isDarkMode} = useData();

  const [isLoading, setLoading] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  const GetFileData = (file: File): any => new Promise((resolve, reject) => {
    try {

      const temp = new FileReader();
    
      temp.readAsText(file);
      
      temp.onloadend = () => {
        try {
          const a = JSON.parse(temp.result as string);
          resolve(a);
        } catch (error) { reject(error) }
      };
    }
    catch (error) { reject(error) }
  });

  const HandleSubmit = async () => {
    if (!file) return ShowAlert('Select a JSON file', false);

    if (file.type !== 'application/json') return ShowAlert('Incorrect file type', false);

    setLoading(true);

    try {
      const result = await GetFileData(file);

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

    } 
    catch (error: any) {
      
      setLoading(false);

      return ShowAlert("Error uploading data. Check the data", false);
    }
  }

  return (
  <div className={`${isDarkMode ? "border-slate-700" : ""} shadow sm:rounded-md sm:overflow-hidden border-2`}>
  <div className={`${isDarkMode ? "text-white bg-slate-700" : "bg-white"} px-4 py-5 space-y-6 sm:p-6`}>
  <FileImportComponent fileTypeText="JSON file up to 10MB" 
    title="Upload file"
    setFile={setFile}
    file={file}
    />
  </div>
  <div className={`${isDarkMode ? "bg-slate-700" : "bg-grey-50"} px-4 py-3 text-right sm:px-6`}>
  <ButtonComponent click={HandleSubmit} 
    color="blue" 
    isLoading={isLoading} 
    title="Upload"
    />
  </div>
  </div>
  );
}