import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'

const useStyles = makeStyles({
	root: {
		maxWidth: 300,
		height: 300,
		width: 300,
		backgroundColor: '#F7F7F7',
		border: '2px solid #AAAAAA',
		borderRadius: '15px',
		boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.55)',
		marginBottom: '20px',
	},
	title: {
		color: '#333333',
		textAlign: 'center',
	},
	logo: {
		width: '150px',
		display: 'block',
		margin: '0 auto',
	},
	stack: {
		textAlign: 'center',
		marginTop: '10px',
		marginLeft: '10px',
		marginRight: '10px',
	},
})

const KotlinTechStackCard: React.FC = () => {
	const classes = useStyles()

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					gutterBottom
					variant='h5'
					component='h2'
					className={classes.title}
				>
					Kotlin
				</Typography>
				<img
					src='/img/kotlinLogo.png'
					alt='Kotlin Logo'
					className={classes.logo}
				/>
				<Typography
					variant='body2'
					color='textSecondary'
					component='p'
					className={classes.stack}
				>
					I use Kotlin on a regular basis. I have experience in backend, web and
					in mobile development. I have my own portfolio of projects.{' '}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default KotlinTechStackCard
