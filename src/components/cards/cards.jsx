import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup';
import cx from 'classnames'
import styles from './cards.module.css'

function handleBigValues(val) {
    if(val < 1000){
        return [val,""];
    }
    if (val >= 1000 && val < 1000000){
        return [val/1000, "K"];
    }
    if(val > 1000000){
        return [val/1000000, "M"];
    }
}





const Cards = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
    
    if(!confirmed){
        return 'Loading...';
    }
    const confirmed_scaled = handleBigValues(confirmed.value);
    const recovered_scaled = handleBigValues(recovered.value);
    const death_scaled = handleBigValues(deaths.value);
    console.log(confirmed_scaled[1]);
    return (
        <div className= {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant = "h5">
                        <CountUp start = {0} end = {confirmed_scaled[0]} decimals = {2}  duration = {1.5} delay = {0.5} suffix = {confirmed_scaled[1]} seperator = "," /> 
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                           {new Date(lastUpdate).toDateString()} 
                        </Typography>
                        <Typography variant="body2">
                            Number of <b>Active cases</b> of Covid-19
                        </Typography>
                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant = "h5">
                        <CountUp start = {0} end = {recovered_scaled[0]} decimals = {2} duration = {1.5} delay = {0.5} suffix = {recovered_scaled[1]} seperator = "," /> 
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                           {new Date(lastUpdate).toDateString()} 
                        </Typography>
                        <Typography variant="body2">
                            Number of <b>Recovery cases</b> of Covid-19
                        </Typography>
                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant = "h5">
                        <CountUp start = {0} end = {death_scaled[0]} decimals = {2} duration = {1.5} delay = {0.5} suffix = {death_scaled[1]} seperator = "," /> 
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                           {new Date(lastUpdate).toDateString()} 
                        </Typography>
                        <Typography variant="body2">
                            Number of <b>Deaths cases</b> of Covid-19
                        </Typography>
                        
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards