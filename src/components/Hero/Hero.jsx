import React from 'react';
import useStyles from './styles.jsx'
import Grid from '@material-ui/core/Grid';


const Hero = () => {

    const classes = useStyles();
    return (
        
        <Grid container  className={classes.hero}>
                herosd;lfkmsdl;kfm
                <svg className={classes.heroTriangles} viewBox="0 0 263.07 394.61" preserveAspectRatio="xMinYMax meet">
                    <polygon className = {classes.primaryTriangle} points="0 394.61 0 0 263.07 263.07 131.53 394.61 0 394.61"></polygon>
                    <polygon className = {classes.grayTriangle} points="0 394.61 0 263.07 131.53 394.61 0 394.61"></polygon>
                    <polygon className = {classes.grayTriangle} points="131.53 394.61 197.3 328.84 263.07 394.61 131.53 394.61"></polygon>
                </svg>
                <h1 style={{zIndex : '3'}}>Mona Khajuei Jahromi</h1>
                <Grid item className={classes.title} style={{zIndex : '3'}}>
                    java Developer
                    </Grid>    

                    <Grid item className={classes.btm} style={{zIndex : '3'}}>
                    Gmail
                    </Grid>      

        </Grid>
    );
};

export default Hero;