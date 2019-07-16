import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



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
  footer: {
    padding: 'auto',
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

export default function Profile(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} >
        <Typography variant="h2" component="h1" gutterBottom>
          PROFILE
        </Typography>
      </Container>
    </div>
  );
}