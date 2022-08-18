


import {useRef, useState} from "react";
import {useData} from "../context/DataContext";
import ButtonComponent from "./ButtonComponent";

type TextBoxProps = {
  placeholder?: string,
  setMainData: React.Dispatch<any>
}

export default function TextBoxComponent({placeholder, setMainData}: TextBoxProps) {
  const [isLoading, setLoading] = useState(false);

  const {ShowAlert} = useData();
  
  const valueRef = useRef<HTMLTextAreaElement>(null);

  const HandleSubmit = () => {
    const result = valueRef.current?.value as string;
    if (!result.trim()) return ShowAlert("Please enter a valid JSON data", false);

    setLoading(true);

    try {

      const response = JSON.parse(result);

      setMainData(response);

      return setLoading(false);

    } catch(error) {
      return ShowAlert("Error occured. Try again later", false);
    }
  }

  return (
  <div className="flex flex-col flex-1 shadow sm:rounded-md sm:overflow-hidden border-2">
  <div className="flex flex-1">
  <textarea id="textbox"
    name="textbox"
    ref={valueRef}
    style={{resize: "none"}}
    className="focus:ring-blue-0 focus:border-blue-0 block w-full sm:text-sm p-3"
    placeholder={placeholder && placeholder}
  />
  </div>
  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
  <ButtonComponent 
    click={HandleSubmit} 
    color="blue" 
    isLoading={isLoading} 
    title="Upload"
    />
  </div>
  </div>
  );
}