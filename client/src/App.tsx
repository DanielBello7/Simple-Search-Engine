


import {Route, Routes} from "react-router-dom";
import {useData} from "./context/DataContext";
import SearchHome from "./routes/SearchHome.routes";
import Default from "./routes/Default.routes";
import Analytics from './routes/Analytics.routes';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AlertModal from "./components/AlertModal";

export default function App() {
  const {searchActive, isDarkMode} = useData();

  return (
  <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} w-100 flex flex-col h-screen max-h-full overflow-hidden ${searchActive ? "bg-gray-50" : "bg-gray-100"}`} id="backBox">
  <Header />
  <div className="w-full flex flex-col h-5/6">
  <Routes>
  <Route path="/" element={<SearchHome />}/>
  <Route path="/analytics" element={<Analytics />}/>
  <Route path="*" element={<Default />}/>
  </Routes>
  </div>
  <Footer />
  <AlertModal />
  </div>
  );
}