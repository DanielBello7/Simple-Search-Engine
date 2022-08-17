


import SearchHome from "./routes/SearchHome";
import SearchResult from "./routes/SearchResult";
import Default from "./routes/Default";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
  <Routes>
  <Route path="/" element={<SearchHome />}/>
  <Route path="/:resultID" element={<SearchResult />}/>
  <Route path="*" element={<Default />}/>
  </Routes>
  );
}