


import InputComponent from "../components/InputComponent";
import SearchComponent from "../components/SearchComponent";
import UserFormComponent from "../components/UserFormComponent";
import {useData} from "../context/DataContext";

export default function SearchHome() {
  const {data, user} = useData();
  if (!user) return <UserFormComponent />
  if (!data) return <InputComponent />
  return <SearchComponent />
}