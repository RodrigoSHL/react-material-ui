import { AppBar, Toolbar,Tabs, Tab, Button } from '@material-ui/core'
import React, {useState} from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg'
import {
  Link
} from "react-router-dom";

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  const useStyles = makeStyles(theme => ({
      toolbarMargin: {
          ...theme.mixins.toolbar,
          marginBottom: "3em"
      },
      logo: {
          height: "7em"
      },
      tabContainer: {
        marginLeft: "auto"
      },
      tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
      },
      button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
      },
      logoContainer: {
        padding: 0
      }
  }));

const Header = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (e, value) => {
      setValue(value)
    }

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar position='fixed' color='primary'>
                <Toolbar disableGutters>
                  <Button component={Link} to="/" className={classes.logoContainer}>
                   <img src={logo} alt="company logo" className={classes.logo}/>
                  </Button>

                    <Tabs 
                      value={value}
                      onChange={handleChange}
                      className={classes.tabContainer}
                    >
                      <Tab className={classes.tab} label="Home" component={Link} to="/" />
                      <Tab className={classes.tab} label="Services" component={Link} to="/services" />
                      <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
                      <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
                      <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" />
                    </Tabs>
                    <Button className={classes.button} variant='contained' color='secondary'>
                        Free Estimated
                    </Button>
                </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    
    
  )
}

export default Header