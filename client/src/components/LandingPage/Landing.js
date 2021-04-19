import { React } from 'react';
import './../../App.css';
import { Grid, Typography, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// custom styles for landing page
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: "1rem",
      marginTop: "10rem"
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: "15rem",
      marginTop: "13rem"
    }
  },
  comingSoon: {
    color: theme.palette.secondary.contrastText,
    fontWeight:"bold",
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      padding: 12,
      width: "35%",
      fontSize: "1rem"
    },
    [theme.breakpoints.up('md')]: {
      padding: 15,
      width: "13%",
      fontSize: "1.8rem"
    },
    animation: "$pulsate 1000ms infinite"
  },
  fontTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize:"4rem",
    },
    [theme.breakpoints.up('md')]: {
      fontSize:"5rem",
      marginTop: "8%"
    },
    animation: "$dropUp 2000ms",
  },
  fontSubTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize:"2rem"
    },
    [theme.breakpoints.up('md')]: {
      fontSize:"3rem"
    },
    animation: "$fade 2000ms",
  },
  paraFont: {
    [theme.breakpoints.down('sm')]: {
      fontSize:"1rem"
    },
    [theme.breakpoints.up('md')]: {
      fontSize:"1.5rem"
    },
    animation: "$fade 2000ms",
  },
  "@keyframes dropUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0%)"
    }
  },
  "@keyframes pulsate": {
    "0%": {
      opacity: 0,
      transform: "scale(1.1)"
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)"
    }
  },
  "@keyframes fade": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    }
  },
})); 

// base component for landing page
const LandingPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
          <Grid
            container
            spacing={0}
            align="left"
            justify="center"
            direction="column"
          >
            <Grid item className={classes.root} style={{color:"white"}}>
                <Typography className={classes.comingSoon}>
                  COMING SOON
                </Typography>
                <Typography className={classes.fontTitle} style={{fontWeight: "bold"}}>
                  VeSocial
                </Typography>
                <Typography className={classes.fontSubTitle} variant="h4">
                  <span style={{color: theme.palette.secondary.main, fontWeight:"bold"}}>Meetups</span> made easy.
                </Typography>
                <Typography className={classes.paraFont} variant="h6" style={{marginTop: "2rem"}}>
                  We, at VeSocial, aim to bridge the gap 
                </Typography>
                <Typography className={classes.paraFont} variant="h6">
                 between your interests, your relaxation time,  
                </Typography>
                <Typography className={classes.paraFont} variant="h6">
                 and the people you want to talk to. Meet now!
                </Typography>
            </Grid>
          </Grid>
    );
}

export default LandingPage;