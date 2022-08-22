


import React from "react";
import { useData } from "../context/DataContext";
import SVG from "./SVG";

type FileImportProps = {
  title: string,
  fileTypeText: string,
  setFile: React.Dispatch<React.SetStateAction<File | null>>,
  file: File | null
}

export default function FileImportComponent({title, fileTypeText, file, setFile}: FileImportProps) {

  const {isDarkMode} = useData();

  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files
    if (!file) return;
    return setFile(file[0]);
  }
  
  const HandleClear = () => {
    return setFile(null);
  }

  return (
  <div className={`${isDarkMode ? "text-white" : "text-dark"}`}>
  <label className={`${isDarkMode ? "text-white" : "text-grey-500"} block text-sm font-medium`}>{title}</label>
  <div className="mt-1 flex justify-center px-6 pt-8 pb-6 border-2 border-gray-300 border-dashed rounded-md">

  <div className="space-y-1 text-center">
  <SVG />
  {
    file 
    ?
    <React.Fragment>
    <p className={`${isDarkMode ? "text-white" : "text-grey-500"} text-xs text-gray-500`}>
    {file.name}
    </p> 
    <p className={`${isDarkMode ? "text-white" : "bg-grey-500"} text-xs cursor-pointer border p-2`} 
    onClick={HandleClear}>Clear</p> 
    </React.Fragment>
    :
    <React.Fragment>
      <div className="flex text-sm text-gray-600">
      <label htmlFor="file-upload"
      className={`relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 ${isDarkMode ? "bg-slate-700" : "bg-white"}`}>
      <span>Upload a file</span>
      <input id="file-upload" 
        name="file-upload" 
        type="file" 
        className="sr-only" 
        accept=".json" 
        onChange={HandleChange}
        />
      </label>

      <p className={`pl-1 ${isDarkMode ? "text-white" : "text-grey-500"}`}>or drag and drop</p>
      </div>
      <p className={`${isDarkMode ? "text-white" : "text-grey-500"} text-xs`}>{fileTypeText}</p>
    </React.Fragment>
  }
  </div>

  </div>
  </div>
  );
}