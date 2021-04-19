import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FeatherIcon from 'feather-icons-react';
import './../../App.css'
import { AppBar, Drawer, Grid, Toolbar, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

// custom styles for landing navbar
const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down('sm')]: {
        display: "none"
      },
      [theme.breakpoints.up('md')]: {
        display: "block",
        overflow: "hidden"
      }
    },
    drawer: {
      [theme.breakpoints.down('sm')]: {
        display: "block",
        overflow: "hidden",
      },
      [theme.breakpoints.up('md')]: {
        display: "none",
      }
    },
    button: {
      '&:hover': {
        transform: "translate(0, -5px)",
        transitionDuration: "800ms"
     },
    },
    hover: {}
}));

// navbar comoponent for landing page 
const LandingNavBar = () => {
    const classes = useStyles();
    const theme = useTheme(); 

    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState(open);
    };

    const ButtonSet = ({color}) => {
      return (
        <div>
          <NavLink exact to="/"><Button className={classes.button} style={{color: color, fontSize: "18px", margin: "10px"}}>Team</Button></NavLink>
          <NavLink exact to="/"><Button className={classes.button} style={{color: color, fontSize: "18px", margin: "10px"}}>Support</Button></NavLink>
          <NavLink exact to="/"><Button className={classes.button} style={{color: color, fontSize: "18px", margin: "10px"}}>Login</Button></NavLink>
        </div>
      );
    }

    const iconSet = [
      <FeatherIcon icon='home' />,
      <FeatherIcon icon='users' />,
      <FeatherIcon icon='help-circle' />,
      <FeatherIcon icon='log-in' />
    ];

    return (
      <div>
        <div className={classes.drawer} style={{position: 'static'}}>
          <Button style={{color: theme.palette.primary.contrastText, paddingTop: 15, paddingBottom: 15}} onClick={toggleDrawer(true)}><FeatherIcon icon="menu"></FeatherIcon></Button>
          <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
          <List style={{width: "65vw"}}>
            {['Home', 'Team', 'Support', 'Login'].map((text, index) => (
              <NavLink exact to='/'>
                <ListItem button key={text} onClick={toggleDrawer(false)}>
                  <ListItemIcon>
                    {iconSet[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} style={{color: theme.palette.primary.main}}/>
                </ListItem>
              </NavLink>
            ))}
          </List>    
          </Drawer>
        </div>
      <div>
        <div className={classes.root}>
          <AppBar position="fixed" color="transparent" elevation={0}>
            <Grid item sm={12} xs={12} className="container">
              <Toolbar style={{paddingLeft: "25px", paddingRight: "25px", paddingTop: "15px"}}>
                <Button>
                  <div className='logo-button'></div>
                </Button>
                <div style={{flexGrow:1}}></div>
                <ButtonSet color={theme.palette.primary.contrastText}/>
              </Toolbar>  
            </Grid>
          </AppBar>
        </div>
      </div>
      </div>
    );
}

export default LandingNavBar;