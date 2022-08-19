


import {Route, Routes} from "react-router-dom";
import SearchHome from "./routes/SearchHome.routes";
import SearchResult from "./routes/SearchResult.routes";
import Default from "./routes/Default.routes";
import Analytics from './routes/Analytics.routes';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AlertModal from "./components/AlertModal";
import { useData } from "./context/DataContext";

export default function App() {
  const {searchActive} = useData();

  return (
  <div className={`w-100 flex flex-col h-screen max-h-full overflow-hidden ${searchActive ? "bg-gray-100" : "bg-white"}`}>
  <Header />
  <div className="w-full flex flex-col h-5/6">
  <Routes>
  <Route path="/" element={<SearchHome />}/>
  <Route path="/analytics" element={<Analytics />}/>
  <Route path="/:resultID" element={<SearchResult />}/>
  <Route path="*" element={<Default />}/>
  </Routes>
  </div>
  <Footer />
  <AlertModal />
  </div>
  );
}