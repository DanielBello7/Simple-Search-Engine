


import {useState} from "react";
import SearchBox from "./SearchBox";
import ResultsComponent from "./ResultsComponent";

export default function SearchComponent() {
  
  const [search, setSearch] = useState<string>("");

  const [results, setResults] = useState<any[]>([]);

  if (results.length <= 0) return <SearchBox setResults={setResults}/>
  return <ResultsComponent results={results} 
                           clearSearch={() => setResults([])}/>
}