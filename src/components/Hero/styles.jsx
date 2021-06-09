import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({

    hero : {
        backgroundColor: '#4d4d4d',
        height: '100vh',
        minHeight: '320px',
        position: 'relative',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '80px',
    },

    heroTriangles : {
        position: "absolute",
         zIndex: "2",
         left: "0", 
         bottom: "0", 
         width: "33%"
    },

    primaryTriangle:{
        fill: '#8983a7',
    },

    grayTriangle :{
        fill: '#000',
        opacity: '.5',
    }



});


export default useStyles;