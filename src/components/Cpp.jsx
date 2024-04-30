import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 300,
    width: 300,
    border: '2px solid #AAAAAA',
    backgroundColor: '#F7F7F7',
    borderRadius: '15px', 
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.55)', 
    marginBottom: '20px', 
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: '#333333', 
    textAlign: 'center',
  },
  logo: {
    width: '80px',
    display: 'block', 
    margin: '0 auto', 
  },
  stack: {
    marginTop: 'auto', 
    textAlign: 'center',
    marginBottom: '50px',
    marginLeft: '10px',
    marginRight: '10px',
  },
});

export default function CPlusPlus() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          C++
        </Typography>
        <img src="/img/cpp.png" alt="C++ Logo" className={classes.logo} />
      </CardContent>
      <Typography variant="body2" color="textSecondary" component="p" className={classes.stack}>
      Working with arrays and pointers, data structures, functions, file handling, exception handling, object-oriented programming (OOP), templates, and database connectivity.
            </Typography>
    </Card>
  );
}
