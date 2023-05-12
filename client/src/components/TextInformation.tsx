type TextInformationProps = {
  title: string,
  body?: string
}

export default function TextInformation({ title, body }: TextInformationProps) {
  return (
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
        {body && <p className="mt-1 text-sm text-gray-600">{body}</p>}
      </div>
    </div>
  );
}