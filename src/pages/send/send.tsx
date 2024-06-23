// import ParticlesComponent from '@/utils/background.js'
// import { makeStyles } from '@material-ui/core/styles'
// import axios from 'axios'
// import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react'
// import '../../index.css'
// import './send.css'

import ParticlesComponent from '@/utils/background'
// interface FormState {
// 	name: string
// 	message: string
// }

// const useStyles = makeStyles({
// 	root: {
// 		margin: '20px auto',
// 		maxWidth: 600,
// 		padding: 20,
// 		textAlign: 'center',
// 	},
// 	button: {
// 		marginTop: 20,
// 		display: 'block',
// 		margin: 'auto',
// 		textAlign: 'center',
// 	},
// })

// const Send: React.FC = () => {
// 	const classes = useStyles()

// 	const [formData, setFormData] = useState<FormState>({ name: '', message: '' })
// 	const [errors, setErrors] = useState<{ name?: string; message?: string }>({})
// 	const [success, setSuccess] = useState(false)

// 	useEffect(() => {
// 		// No need to use socket.io for simple form submission
// 	}, [])

// 	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// 		e.preventDefault()

// 		// Validate form data
// 		const newErrors: { name?: string; message?: string } = {}
// 		if (!formData.name) newErrors.name = 'Name is required'
// 		if (!formData.message) newErrors.message = 'Message is required'

// 		if (Object.keys(newErrors).length > 0) {
// 			setErrors(newErrors)
// 			return
// 		}

// 		// Send message to server
// 		try {
// 			const response = await axios.post(
// 				'http://localhost:7070/messages',
// 				formData
// 			)

// 			if (!response.data.success) {
// 				throw new Error('Failed to send message')
// 			}

// 			// Clear form data
// 			setSuccess(true)
// 			setFormData({ name: '', message: '' })
// 		} catch (error) {
// 			console.error('Error sending message:', error)
// 		}
// 	}

// 	const handleInputChange = (
// 		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// 	) => {
// 		const { name, value } = e.target
// 		setFormData({
// 			...formData,
// 			[name]: value,
// 		})
// 		setErrors({
// 			...errors,
// 			[name]: '',
// 		})
// 	}

// 	const handleCloseSnackbar = () => {
// 		setSuccess(false)
// 	}

// 	// Memoize ParticlesComponent
// 	const memoizedParticlesComponent = useMemo(() => {
// 		return <ParticlesComponent id='background' />
// 	}, [])

// 	return (
// 		<>
// 			<div className='content'>
// 				{memoizedParticlesComponent}
// 				<Card className={classes.root}>
// 					<form onSubmit={handleSubmit}>
// 						<TextField
// 							fullWidth
// 							label='Name'
// 							name='name'
// 							value={formData.name}
// 							onChange={handleInputChange}
// 							required
// 							margin='normal'
// 							error={!!errors.name}
// 							helperText={errors.name}
// 						/>
// 						<TextField
// 							fullWidth
// 							multiline
// 							minRows={6}
// 							maxRows={10}
// 							label='Your message'
// 							name='message'
// 							value={formData.message}
// 							onChange={handleInputChange}
// 							required
// 							margin='normal'
// 							error={!!errors.message}
// 							helperText={errors.message}
// 						/>
// 						<Button
// 							type='submit'
// 							variant='contained'
// 							color='primary'
// 							className={classes.button}
// 						>
// 							Send
// 						</Button>
// 					</form>
// 				</Card>
// 			</div>
// 			<div className='button-container'>
// 				<Link to='/'>
// 					<button className='goback'>GO BACK!</button>
// 				</Link>
// 			</div>
// 			<Snackbar
// 				open={success}
// 				autoHideDuration={6000}
// 				onClose={handleCloseSnackbar}
// 			>
// 				<Alert onClose={handleCloseSnackbar} severity='success'>
// 					Your message has been sent!
// 				</Alert>
// 			</Snackbar>
// 		</>
// 	)
// }

// export default Send

const Send: React.FC = () => {
	return (
		<>
			<div className='content'>
				<ParticlesComponent id='background' />
				<h1 className='heading'>WIP - (Work In Progress)</h1>
			</div>
		</>
	)
}

export default Send
