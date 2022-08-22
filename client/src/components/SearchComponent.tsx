


import SearchBox from "./SearchBox";
import ResultsComponent from "./ResultsComponent";
import useLocalStorage from "../hooks/useLocalStorage";

export default function SearchComponent() {

  const [result, setResult] = useLocalStorage<any | null>('result', null);

  if (!result) return <SearchBox setResult={setResult} />

  return <ResultsComponent results={result} 
                           clearSearch={() => setResult(null)}
                           />
}