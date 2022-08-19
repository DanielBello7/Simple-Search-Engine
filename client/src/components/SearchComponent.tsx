


import {useState} from "react";
import SearchBox from "./SearchBox";
import ResultsComponent from "./ResultsComponent";

export default function SearchComponent() {

  const [result, setResult] = useState<any | null>(null);

  if (!result) return <SearchBox setResult={setResult} />

  return <ResultsComponent results={result} 
                           clearSearch={() => setResult(null)}
                           />
}