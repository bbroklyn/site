import ParticlesComponent from '@/utils/background.js'
import { Card, CardContent, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
	root: {
		width: 150,
		height: 150,
		margin: 10,
		borderRadius: '50%',
		background:
			'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%), linear-gradient(to bottom, #2a3244 0%,#1a202d 100%)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
	},
	icon: {
		fontSize: 60,
		color: '#FFFFFF',
	},
})

const Contacts = () => {
	const classes = useStyles()

	return (
		<div className='content'>
			<ParticlesComponent id='background' />
			<div className='about'>
				<Grid container justifyContent='center' spacing={2}>
					<Grid item>
						<Card className={classes.root}>
							<CardContent>
								<a
									href='https://github.com/bbroklyn'
									target='_blank'
									rel='noopener noreferrer'
									className='social-link'
								>
									<FaGithub className={classes.icon} />
								</a>
							</CardContent>
						</Card>
					</Grid>
					<Grid item>
						<Card className={classes.root}>
							<CardContent>
								<a
									href='https://discord.com/users/1215604636938145813'
									target='_blank'
									rel='noopener noreferrer'
									className='social-link'
								>
									<FaDiscord className={classes.icon} />
								</a>
							</CardContent>
						</Card>
					</Grid>
					<Grid item>
						<Card className={classes.root}>
							<CardContent>
								<a
									href='https://t.me/vladkonovalow'
									target='_blank'
									rel='noopener noreferrer'
									className='social-link'
								>
									<FaTelegram className={classes.icon} />
								</a>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<div className='button-container'>
					<Link to='/'>
						<button className='goback'>GO BACK!</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contacts
