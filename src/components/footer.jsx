import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Place from '@material-ui/icons/Place';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
    footer: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 6),
        backgroundColor: '#04505f',
        color: 'white',
    },
    icon: {
        paddingRight: 15,
    },
    phone: {
        fontSize: 16,
    },
    button: {
        boxShadow: 'none',
        fontSize: 16,
        height: '40px',
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        color: '#27253d',
        backgroundColor: '#eef0f2',
        borderColor: '#eef0f2',
        '&:hover': {
            backgroundColor: '#B4B6B8',
            borderColor: '#B4B6B8',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#B4B6B8',
            borderColor: '#B4B6B8',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
}));

export default function Footer() {
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={12} md={3}>
                        <span className={classes.icon}>
                            <Place />
                        </span>
                        г. Ярославль, ул. Свердлова, д. 26
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <span className={classes.icon}>
                            <Email />
                        </span>
                        apribor@mail.ru
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <span className={classes.icon}>
                            <Phone />
                        </span>
                        <span className={classes.phone}>
                            8 (4852) 32-86-64
                        </span>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        ООО "ЯрАналитПрибор" - установка и обслуживание тепловых счетчиков в Ярославле
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
};
