import { Grid, Paper, List, ListItemText } from '@material-ui/core';
import React from 'react';
import {styles} from './styles'
import { Button } from '../ButtonCustom/Button';


export const InformacionFinazas = () => {
    const classes = styles();
    return(
        <>
        <Grid container >
            <Grid item xs={12} className={classes.valor}>
                1.000.000
            </Grid>
        </Grid>
        <hr color='#960740' size ='3' width ='67%'/>
        <Paper className={classes.paper}>
            <Grid container >
                <Grid item xs={6}>
                    <List>
                        <ListItemText className={classes.numeros}>
                            <text className={classes.numeros}>0</text>     
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Inversionistas</text>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <ListItemText className={classes.numeros}>
                            <text className={classes.numeros}>0</text>     
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Valoración</text>
                        </ListItemText>
                    </List>    
                </Grid>
            </Grid>
        </Paper>
        <Paper className={classes.paper}>
            <Grid container >
                <Grid item xs={6}>
                    <List>
                        <ListItemText className={classes.numeros}>
                            <text className={classes.numeros}>0</text>     
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Inversión minima</text>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <ListItemText className={classes.numeros}>
                           <text className={classes.numeros}>0</text>    
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Días faltantes</text>
                        </ListItemText>
                    </List>    
                </Grid>
            </Grid>
        </Paper>
        <Paper className={classes.paper}>
            <Grid container >
                <Grid item xs={6}>
                    <List>
                        <ListItemText >
                            <text className={classes.numeros}>02/02/2020</text>    
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Fecha inicio</text>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <ListItemText className={classes.numeros}>
                            <text className={classes.numeros}>28/02/2020</text>
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Fecha Final</text>
                        </ListItemText>
                    </List>
                </Grid>
            </Grid>
        </Paper>

        <Grid item xs={12} className={classes.valor}>
            <Button green onClick={() => console.log("HOLA")} >
                Invertir ahora
            </Button>
        </Grid>
                        
                
        </>
    );
};