// app.jsx
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "@/pages/home/home.jsx";
import NotFound from "@/pages/default/notfound.jsx";
import CardsPage from "@/pages/cards/cards.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="cards" element={<CardsPage />} />
                <Route path="/" element={<Home />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
