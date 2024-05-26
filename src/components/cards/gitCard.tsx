import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        position: 'relative',
        maxWidth: 300,
        height: 300,
        width: 300,
        backgroundColor: '#F7F7F7',
        border: '2px solid #AAAAAA',
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
        width: '100px',
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

const GitCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    Git
                </Typography>
                <img src="/svgs/git.svg" alt="Git Logo" className={classes.logo} />
            </CardContent>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.stack}>
                I am proficient in using Git.
            </Typography>
        </Card>
    );
}

export default GitCard