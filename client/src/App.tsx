


import SearchHome from "./routes/SearchHome.routes";
import SearchResult from "./routes/SearchResult.routes";
import Default from "./routes/Default.routes";
import Analytics from './routes/Analytics.routes';
import {Route, Routes} from "react-router-dom";

export default function App() {
  return (
  <Routes>
  <Route path="/" element={<SearchHome />}/>
  <Route path="/analytics" element={<Analytics />}/>
  <Route path="/:resultID" element={<SearchResult />}/>
  <Route path="*" element={<Default />}/>
  </Routes>
  );
}