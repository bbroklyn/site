import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
  },
});

export default function KotlinTechStackCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          Kotlin
        </Typography>
        <img src="src/assets/kotlinLogo.png" alt="Kotlin Logo" className={classes.logo} />
        <Typography variant="body2" color="textSecondary" component="p" className={classes.stack}>
          Serialization, Telegram Bot, Room, Xodus.
        </Typography>
      </CardContent>
    </Card>
  );
}
