import { Route, Routes } from 'react-router-dom'
//
import About from '@/pages/about/about.tsx'
import CardsPage from '@/pages/cards/cards.tsx'
import Contacts from '@/pages/contacts/contacts.tsx'
import Default from '@/pages/default/default.tsx'
import './index.css'
import Home from './pages/home/home.tsx'
import Send from './pages/send/send.tsx'

function App() {
	return (
		<Routes>
			<Route path='*' element={<Default />} />
			<Route path='/' element={<Home />} />
			<Route path='cards' element={<CardsPage />} />
			<Route path='contacts' element={<Contacts />} />
			<Route path='about' element={<About />} />
			<Route path='send' element={<Send />} />
		</Routes>
	)
}

export default App
