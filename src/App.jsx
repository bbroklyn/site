import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
//
import './index.css';
import Home from "@/pages/home/home.jsx";
import NotFound from "@/pages/default/notfound.jsx";
import CardsPage from "@/pages/cards/cards.jsx";
import About from "@/pages/about/about.jsx";
import Contacts from "@/pages/contacts/contacts.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="cards" element={<CardsPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
