


import {useState} from "react";
import {useData} from "../context/DataContext";
import FileImportComponent from "./FileImportComponent";
import ButtonComponent from "./ButtonComponent";

type ImportBoxProps = {
  setShowing: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ImportBox({setShowing}: ImportBoxProps) {
  const {ShowAlert, setData} = useData();

  const [isLoading, setLoading] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  const HandleSubmit = () => {
    if (!file) return;

    setLoading(true);

    const result = [{}];

    try {

      setTimeout(() => {
        setLoading(false);
        setShowing(false);
        console.log(result);
      }, 2000);

      setTimeout(() => {
        setData(result);
      }, 3000);

    } catch (error) {
      setLoading(false);
      return ShowAlert("Error uploading data", false);
    }
  }

  return (
  <div className="shadow sm:rounded-md sm:overflow-hidden border-2">
  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
  <FileImportComponent fileTypeText="JSON file up to 10MB" 
    title="Upload file"
    setFile={setFile}
    file={file}
    />
  </div>
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