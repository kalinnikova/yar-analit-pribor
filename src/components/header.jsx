import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Place from '@material-ui/icons/Place';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '../pages/home';
import Directions from '../pages/directions';
import Objects from '../pages/objects';
import Contacts from '../pages/contacts';
import { Container } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SendEmail from './sendEmail';
import logo from '../assets/logo.png';

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: '#3bb4c1',
        minHeight: 145,
        paddingTop: 50,
        paddingBottom: 40,
        fontFamily: 'Circe, Arial, sans-serif',
    },
    icon: {
        color: '#27253d',
        paddingRight: 15,
    },
    button: {
        boxShadow: 'none',
        fontSize: 16,
        height: 50,
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
    title: {
        paddingTop: 40,
        paddingLeft: 22,
        fontWeight: '600',
    },
    tabs: {
        boxShadow: 'none',
        backgroundColor: 'inherit',
        paddingTop: 41,
    },
    tab: {
        '&:hover': {
            backgroundColor: '#3B9FAC',
            textDecoration: 'none',
        },
    },
    phone: {
        fontWeight: '600',
        fontSize: 17,
    },
    input: {
        marginBottom: 10,
    },
    dialogTitle: {
        paddingTop: 27,
        paddingBottom: 0,
    },
    image: {
        width: '100%',
    },
}));

const routesToTabs = Object.freeze({
    '/': 0,
    '/directions': 1,
    '/objects': 2,
    '/contacts': 3,
});

function Header({ location }) {
    const classes = useStyles();
    const [ value, setValue ] = React.useState(routesToTabs[location.pathname] || 0);
    const [ open, setOpen ] = React.useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    function handleChangeTabs(event, newValue) {
        setValue(newValue);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <React.Fragment>
            <AppBar className={classes.header} position="static">
                <Container>
                    <Grid container>
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
                        <Grid item xs={12} md={4}>
                            <span className={classes.icon}>
                                <Phone />
                            </span>
                            <span className={classes.phone}>
                                8 (4852) 32-86-64
                            </span>
                            <span> - телефон для связи</span>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                className={classes.button}
                                onClick={handleClickOpen}
                            >
                                Заказать звонок
                            </Button>
                            <SendEmail
                                open={open}
                                handleClose={handleClose}
                                fullScreen={fullScreen}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <img
                                src={logo}
                                alt="Установка и обслуживание тепловых счетчиков в Ярославле"
                                title="Установка и обслуживание тепловых счетчиков в Ярославле"
                                className={classes.image}
                            />
                        </Grid>
                        <Grid className={classes.title} item xs={12} md={4}>
                            <h2>
                                ООО "ЯрАналитПрибор"
                            </h2>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <AppBar className={classes.tabs} position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={handleChangeTabs}
                                    indicatorColor="primary"
                                >
                                    <Tab className={classes.tab} label="О компании" component={Link} to="/" />
                                    <Tab className={classes.tab} label="Услуги" component={Link} to="/directions" />
                                    <Tab className={classes.tab} label="Наши клиенты" component={Link} to="/objects" />
                                    <Tab className={classes.tab} label="Контакты" component={Link} to="/contacts" />
                                </Tabs>
                            </AppBar>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
            <Route exact path="/" component={Home} />
            <Route path="/directions" component={Directions} />
            <Route path="/objects" component={Objects} />
            <Route path="/contacts" component={Contacts} />
        </React.Fragment>
    )
}

export default withRouter(Header);
