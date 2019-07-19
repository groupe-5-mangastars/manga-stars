import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MangaListContainer from '../components/Manga/MangaListContainer';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
  },
  main: {
    marginTop: 50,
    marginBottom: 'auto',
  },
  title: {
    textAlign: 'center',
  },
  footer: {
    padding: 'auto',
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  }
}));

export default function Home(props) {
  const classes = useStyles();
    

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} >
      <Grid container justify="center" alignItems="center">
      </Grid>
        <Typography variant="h2" component="h1" gutterBottom className={classes.title} >
          Welcome 
        </Typography>
        <MangaListContainer></MangaListContainer>
      </Container>
    </div>
  );
}
