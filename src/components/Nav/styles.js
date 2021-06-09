import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    
    root: {

        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: props => props.menuClosed  ? '0' : '100%',
        width : props => props.menuClosed ? '0' : '100%',
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 100,
        "-webkit-transition": 'all 0.3s ease',
        "-moz-transition": 'all 0.3s ease',
        transition: 'all 0.3s ease',
        display: '-webkit-flex',
        display: 'flex',
        '-webkit-align-items': 'center',
        alignItems: 'center',
        '-webkit-justify-content': 'center',
        justifyContent: 'center',

    },

    menu: {
        listStyleType: "none",
        margin: "0",
        padding: "0",
        fontFamily: "'Oswald', sans-serif", "fontWeight": "300",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontSize: "2em",
        WebkitTransition: "opacity 0.3s ease",
        MozTransition: "opacity 0.3s ease",
        transition: "opacity 0.3s ease",
        "& li" :{
            textAlign: "center",
            margin: ".7em 0",
        
        }


    },

    changeNav: {
        position: "absolute",
        top: "64px",
        right: "80px",
        textIndent: "-9999px",
        borderWidth: "0",
        height: "40px",
        width: "40px",
        padding: "0",
        outline: "none",
        cursor: "pointer",
        WebkitTransition: "all 0.3s ease",
        MozTransition: "all 0.3s ease",
        transition: "all 0.3s ease",
        backgroundColor: "transparent",
        overflow: "hidden",
        transform:  props => props.menuClosed ? 'unset ' : 'rotate(360deg)',
        
        "&::before": {
            boxShadow:  props => props.menuClosed ? "10px 16px 0 #cccccc" :'0 -17px 0 transparent',
            position: "absolute",
            display: "block",
            content: "''",
            top: "0",
            right: "0",
            width: "100%",
            height: "2px",
            backgroundColor: "#cccccc",
            WebkitTransition: "all 0.3s ease",
            MozTransition: "all 0.3s ease",
            transition: "all 0.3s ease",
            transform:  props => props.menuClosed ? 'unset ' : 'translate3d(0, 19px,0) rotate(45deg)',
            

        },
        "&::after" :{
            transform: props => props.menuClosed ? 'translate3d(0, 32px, 0)' : ' translate3d(0, 19px,0) rotate(-45deg)',// "translate3d(0, 32px, 0)",
            width:  props => props.menuClosed ? '75%' : '100%',//"75%",,
            position: "absolute",
            display: "block",
            content: "''",
            top: "0",
            right: "0",
            height: "2px",
            backgroundColor: "#cccccc",
            WebkitTransition: "all 0.3s ease",
            MozTransition: "all 0.3s ease",
            transition: "all 0.3s ease"
        }

        


        
    }


});


export default useStyles;