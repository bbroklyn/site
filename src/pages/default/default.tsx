import * as React from 'react'
import { Link } from 'react-router-dom'
//
import '@/index.css'
import ParticlesComponent from '@/utils/background'
import './default.css'

const Default: React.FC = () => {
	return (
		<div className='notfound-container'>
			<ParticlesComponent id='background' />
			<div className='notfound-text'>
				<p className='notfound-text'>Page not found!</p>
				<Link to='/'>
					<button className='goback'>GO BACK!</button>
				</Link>
			</div>
		</div>
	)
}

export default Default
