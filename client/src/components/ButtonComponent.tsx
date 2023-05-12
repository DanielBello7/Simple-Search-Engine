import Loader from './Loader';

type ButtonComponentProps = {
  click: Function,
  title: string,
  color: string,
  isLoading: boolean
}

export default function ButtonComponent({ click, title, isLoading }: ButtonComponentProps) {
  return (
    <button type="submit"
      onClick={() => click()}
      disabled={isLoading && true}
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      {
        isLoading
          ? <Loader color='white' size={20} />
          : title
      }
    </button>
  )
}