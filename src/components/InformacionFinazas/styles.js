import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
    paper: {
        margin: 'auto',
        //display:'Grid',
        '@media (min-width:50px)': { 
          width: '60%'
        },
        '@media (min-width:480px)': { 
          width: '60%'
        },
        '@media (min-width:600px)': { 
          width: '61%'
        },
        '@media (min-width:801px)': { 
          width: '63%'
        },
        '@media (min-width:1025px)': { 
          width: '65%'
        },
        padding: theme.spacing(2),
       
      },
    valor:{
        fontFamily: 'Roboto',
        fontStyle: 'Roboto',
        fontWeight: 'Roboto',
        textAlign: 'center',
        fontSize: '3vw',
    },
    numeros:{
        fontFamily: 'Roboto',
        fontStyle: 'Roboto',
        fontWeight: 'Roboto',
        fontSize: '2vw',
    },
    descripcion:{
        fontFamily: 'Roboto',
        fontStyle: 'Roboto',
        fontWeight: 'Roboto',
        fontSize: '1vw',
    },
}));