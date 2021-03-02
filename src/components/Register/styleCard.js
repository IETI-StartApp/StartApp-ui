import { makeStyles } from '@material-ui/core/styles';

export const styleCard = makeStyles((theme) => ({
    paper: {
        width: "100%",
        height: "100%",
        overflowY: "auto"
    },
    root: {
        overflowY: "auto"
    },
    formContainer: {
        position: "relative",
        '@media (min-width:780px)': {
            width: '28.125rem'
        },
        height: "auto",
        padding: "3rem"
    },
    Magin: {
        marginTop: "12px"
    },
    root2: {
        flexGrow: 1,
    },
    papero: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 400
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        alignItems: "center"
    }

}));
