import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup';
import cx from 'classnames'
import styles from './cards.module.css'




const Cards = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
    handleBigValues = (val) => {
        if(val < 1000){
            return [val,""];
        }
        else if(val >= 1000 && val < 1000000){
            return [val/1000, "K"];
        }
        else{
            return [val/1000000, "M"];
        }
    
    }
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className= {styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs = {12} md = {3} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant = "h5">
                        <CountUp start = {0} end = {handleBigValues(confirmed)[0]} duration = {1.5} delay = {0.5} suffix = {handleBigValues(confirmed)[1]} seperator = "," /> 
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
                        <CountUp start = {0} end = {recovered.value >= 1000 ? recovered.value/1000 : recovered.value} duration = {1.5} delay = {0.5} suffix = {"K"}seperator = "," /> 
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
                        <CountUp start = {0} end = {deaths.value >= 1000 ? deaths.value/1000 : deaths.value} duration = {1.5} delay = {0.5} suffix = {"K"}seperator = "," /> 
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