


import ButtonComponent from "./ButtonComponent";

type TextBoxProps = {
  placeholder?: string
}

export default function TextBoxComponent({placeholder}: TextBoxProps) {
  return (
  <div className="flex flex-col flex-1 shadow sm:rounded-md sm:overflow-hidden">
  <div className="flex flex-1">
  <textarea id="about"
    name="about"
    style={{resize: "none"}}
    className="focus:ring-blue-0 focus:border-blue-0 mt-1 block w-full sm:text-sm p-3"
    placeholder={placeholder && placeholder}
    defaultValue={''}
  />
  </div>
  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
  <ButtonComponent click={() => alert('yes')} color="blue" isLoading={false} title="Upload"/>
  </div>
  </div>
  );
}