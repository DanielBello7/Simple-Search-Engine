type TextInputBox2Props = {
  title: string,
  length: string,
  disabled: boolean,
  value: React.RefObject<HTMLInputElement>,
  id: string,
  type: "text" | "email" | "password"
}

export default function TextInputBox2({ title, length, disabled, value, type, id }: TextInputBox2Props) {
  return (
    <div className={`col-span-${length} sm:col-span-${length}`}>
      <label htmlFor={id}
        className="block text-sm font-medium text-gray-700">
        {title}
      </label>

      <input type={type}
        name={id}
        id={id}
        ref={value}
        autoComplete="off"
        required
        disabled={disabled}
        className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm p-1.5 mb-5 rounded-md"
      />
    </div>
  )
}