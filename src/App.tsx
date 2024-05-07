import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
//
import './index.css';
import Home from "./pages/home/home.tsx";
import Default from "@/pages/default/default.tsx";
import CardsPage from "@/pages/cards/cards.tsx";
import Contacts from "@/pages/contacts/contacts.tsx";
import About from "@/pages/about/about.tsx";


function App() {
  return (
      <Routes>
        <Route path='*' element={ <Default/> }/>
        <Route path="/" element={<Home />} />
        <Route path="cards" element={<CardsPage />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<About />} />
      </Routes>
  );
}

export default App;
