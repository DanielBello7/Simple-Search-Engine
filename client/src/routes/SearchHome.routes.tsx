


import InputComponent from "../components/InputComponent";
import SearchComponent from "../components/SearchComponent";
import UserFormComponent from "../components/UserFormComponent";
import {useData} from "../context/DataContext";

export default function SearchHome() {
  const {hasData, user} = useData();
  if (!user) return <UserFormComponent />
  if (!hasData) return <InputComponent />
  return <SearchComponent />
}