import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core';
import YAMZ from '../assets/YAMZ.png';
import YASHZ from '../assets/YASHZ.png';
import YART from '../assets/YART.png';
import tgk2 from '../assets/tgk2.png';
import nkz from '../assets/nkz.jpg';
import zhb from '../assets/zhb.png';
import rzhd from '../assets/rzhd.png';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: 30,
        fontFamily: 'Circe, Arial, sans-serif',
    },
    paper: {
        padding: 30,
    },
    paragraph: {
        paddingTop: theme.spacing(3),
        fontSize: 18,
    },
    paddingImage: {
        width: '100%',
        paddingTop: 30,
    },
    image: {
        width: '100%',
    },
}));

export default function Objects() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                            Наши объекты
                        </Typography>
                        <Divider />
                        <Typography className={classes.paragraph} paragraph>
                            За 25 лет работы нами установлены приборы учета разных энергоносителей -  пара, воды, технического и природного газов и практически любых жидкостей – сточных вод, нефти и нефтепродуктов.
                            Это многие предприятия Ярославской области, в том числе и крупные - «Ярославский шинный завод», ПАО «Автодизель» («Ярославский моторный завод»), АО «Ярославль-Резинотехника», ТЭЦ–1, ТЭЦ-2, ТЭЦ-3 АО «ТГК-2», АО «Корд», ООО «Переславская энергетическая компания», объекты ОАО «РЖД», АО «Норский керамический завод», АО «Железобетон», другие промышленные предприятия города и области, котельные, объекты ЖКХ, образования, здравоохранения, культуры и спорта.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item md={2}></Grid>
                <Grid item xs={12} md={8}>
                    <Paper className={classes.paper}>
                        <CarouselProvider
                            naturalSlideWidth={25}
                            naturalSlideHeight={23}
                            totalSlides={7}
                            visibleSlides={5}
                            isPlaying
                        >
                            <Slider>
                                <Slide index={0}>
                                    <img
                                        src={YAMZ}
                                        className={classes.image}
                                        alt="ЯМЗ"
                                    />
                                </Slide>
                                <Slide index={1}>
                                    <img
                                        src={YASHZ}
                                        className={classes.image}
                                        alt="ЯШЗ"
                                    />
                                </Slide>
                                <Slide index={2}>
                                    <img
                                        src={YART}
                                        className={classes.paddingImage}
                                        alt="ЯРТ"
                                    />
                                </Slide>
                                <Slide index={3}>
                                    <img
                                        src={tgk2}
                                        className={classes.paddingImage}
                                        alt="ТГК2"
                                    />
                                </Slide>
                                <Slide index={4}>
                                    <img
                                        src={nkz}
                                        className={classes.paddingImage}
                                        alt="НКЗ"
                                    />
                                </Slide>
                                <Slide index={5}>
                                    <img
                                        src={zhb}
                                        className={classes.image}
                                        alt="ЖБ"
                                    />
                                </Slide>
                                <Slide index={5}>
                                    <img
                                        src={rzhd}
                                        className={classes.paddingImage}
                                        alt="РЖД"
                                    />
                                </Slide>
                            </Slider>
                        </CarouselProvider>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
