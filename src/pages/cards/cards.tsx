import * as React from 'react'
import { Link } from 'react-router-dom'
//
import CSharp from '@/components/cards/CSharp.tsx'
import CPlusPlus from '@/components/cards/Cpp'
import KotlinTechStackCard from '@/components/cards/KotlinCard'
import PostgresCard from '@/components/cards/PostgresCard'
import GitCard from '@/components/cards/gitCard'
import '@/index.css'
import ParticlesComponent from '@/utils/background'
import './cards.css'

const CardsPage: React.FC = () => {
	return (
		<div>
			<h1 className='heading'>My knowledge</h1>
			<div className='cards-container'>
				<ParticlesComponent id='background' />
				<KotlinTechStackCard />
				<CSharp />
				<CPlusPlus />
				<GitCard />
				<PostgresCard />
			</div>
			<Link to='/'>
				<button className='goback'>GO BACK!</button>
			</Link>
		</div>
	)
}

export default CardsPage
