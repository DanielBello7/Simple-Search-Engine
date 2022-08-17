


import InputComponent from "../components/InputComponent";
import SearchComponent from "../components/SearchComponent";
import {useData} from "../context/DataContext";

export default function SearchHome() {
  const {data} = useData();
  if (!data) return <InputComponent />
  return <SearchComponent />
}