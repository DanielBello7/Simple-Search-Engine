


type TextBoxProps = {
  label?: string,
  description: string,
  placeholder: string
}

function TextBoxComponent({label, description, placeholder}: TextBoxProps) {
  return (
  <div>
  { label && <label htmlFor="about" className="block text-sm font-medium text-gray-700">{label}</label> }
  <div className="mt-1">
    <textarea id="about"
      name="about"
      rows={3}
      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
      placeholder={placeholder}
      defaultValue={''}
    />
  </div>
  <p className="mt-2 text-sm text-gray-500">{description}</p>
  </div>
  );
}