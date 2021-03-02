import React from 'react';
import { Grid } from '@material-ui/core'
import { BackDesign } from "../../components/Register/styles";
import { Card } from "../../components/Register/Card"
import { styleCard } from "../../components/Register/styleCard"


export const UserSelect = () => {
    const classes = styleCard();
    return (
        <div>
            <Grid container direction="row" justify="flex-end" alignItems="stretch" className={classes.root}>
                <Grid item xs={6}>
                    <img className={classes.paper} alt="" src="https://media.discordapp.net/attachments/781412743537491969/814353548065374228/background.png?width=530&height=662"/>
                </Grid>
                <Grid item xs={6} justify="flex-end">
                    <Grid item xs={10} alignItems="center">
                        <Grid>
                            ¿Ya tienes una cuenta?
                            <BackDesign href='#' className={classes.Magin}> Clic acá</BackDesign>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.Magin} direction="row-reverse" justify="space-around">

                        <div className={classes.formContainer}>
                            <Grid item xs={12}>
                                <div>
                                    <h1>Unase a nosotros!</h1>
                                </div>
                                <div>
                                    <p>Para comenzar este viaje, díganos qué tipo de cuenta desea abrir</p>
                                </div>
                                <br/>
                                <Card userImage="https://media.discordapp.net/attachments/781412743537491969/814340479393988709/emprendedor_1.png"
                                    userType="Emprendedor"
                                    userDescription="Cuenta personal para gestionar su proyecto y obtener inversiones."
                                    arrowImage="https://media.discordapp.net/attachments/781412743537491969/814340827269955594/flecha-correcta_1.png" />

                                <br/>
                                <Card userImage="https://media.discordapp.net/attachments/781412743537491969/814339858901893160/investing_2.png"
                                    userType="Inversionista"
                                    userDescription="Cuenta personal para invertir en proyectos TI."
                                    arrowImage="https://media.discordapp.net/attachments/781412743537491969/814340827269955594/flecha-correcta_1.png" />
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
