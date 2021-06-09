import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useState } from 'react';
import useStyles from './styles.js'
import {useRef,useEffect} from 'react'

const Nav = () => {
    
    
    const refNav= useRef('');
    const [menuClosed ,setMenuClosed] = useState(true);
    const classes  =  useStyles({menuClosed : menuClosed});

    useEffect(()=>{
        
    },[menuClosed])

    const changeNavStatus  = () => {
        setMenuClosed(!menuClosed);
    }



    return (
    <>
        
      <AppBar position="fixed" id="nav" className={classes.root} ref = {refNav} >
        
        <ul  className={classes.menu}>
            <li>About Me</li>
            <li>Experience & Education</li>
            <li>Skills & Knowledge</li>
            <li>Portfolio</li>
            <li>Design Process</li>
            <li>Testimonials</li>
            <li>Contact</li>
            
            <button className={classes.changeNav} onClick={changeNavStatus}>Menu</button>
        </ul>    
      </AppBar>
      </>
    
    );
};

export default Nav;