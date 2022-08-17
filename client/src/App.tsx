


import SearchHome from "./routes/SearchHome.routes";
import SearchResult from "./routes/SearchResult.routes";
import Default from "./routes/Default.routes";
import Analytics from './routes/Analytics.routes';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AlertModal from "./components/AlertModal";

export default function App() {
  return (
  <div className="w-100 h-screen border-4">
  <Header />
  <Routes>
  <Route path="/" element={<SearchHome />}/>
  <Route path="/analytics" element={<Analytics />}/>
  <Route path="/:resultID" element={<SearchResult />}/>
  <Route path="*" element={<Default />}/>
  </Routes>
  <Footer />
  <AlertModal />
  </div>
  );
}