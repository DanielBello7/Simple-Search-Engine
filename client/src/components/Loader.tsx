


import { FaSpinner } from 'react-icons/fa';

type LaoderProps = {
  color: string,
  size: number
}

export default function Loader({color, size}: LaoderProps) {
  return <FaSpinner size={size} color={color} className="animate-spin"/>
}