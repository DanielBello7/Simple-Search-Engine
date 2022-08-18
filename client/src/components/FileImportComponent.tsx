


import SVG from "./SVG";
import React, { useState } from 'react';

type FileImportProps = {
  title: string,
  fileTypeText: string
}

export default function FileImportComponent({ title, fileTypeText }: FileImportProps) {
  const [file, setFile] = useState<File | null>(null);

  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files
    if (!file) return;
    return setFile(file[0]);
  }
  
  const HandleClear = () => {
    return setFile(null);
  }

  return (
  <div className="">
  <label className="block text-sm font-medium text-gray-700">{title}</label>
  <div className="mt-1 flex justify-center px-6 pt-8 pb-6 border-2 border-gray-300 border-dashed rounded-md">
    <div className="space-y-1 text-center">
    <SVG />
    {
      file 
      ?
      <React.Fragment>
      <p className="text-xs text-gray-500">
      {file.name}
      </p> 
      <p className="text-xs text-gray-500 cursor-pointer border p-2" 
      onClick={HandleClear}>Clear</p> 
      </React.Fragment>
      :
      <React.Fragment>
        <div className="flex text-sm text-gray-600">
        <label htmlFor="file-upload"
        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
        <span>Upload a file</span>
        <input id="file-upload" 
          name="file-upload" 
          type="file" 
          className="sr-only" 
          accept="JSON" 
          onChange={HandleChange}
          />
        </label>

        <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">{fileTypeText}</p>
      </React.Fragment>
    }
    </div>
  </div>
  </div>
  )
}