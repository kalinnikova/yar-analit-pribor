import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import vzlet from '../assets/vzlet5.png';
import sro1 from '../assets/sro1.jpg';
import sro2 from '../assets/sro2.jpg';
import gazovik from '../assets/gazovik.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: 30,
        fontFamily: 'Circe, Arial, sans-serif',
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[300],
    },
    paragraph: {
        paddingTop: theme.spacing(3),
        fontSize: 18,
    },
    image: {
        width: '100%',
        paddingTop: theme.spacing(3),
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={5} className={classes.mainGrid}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" gutterBottom>
                        О компании
                    </Typography>
                    <Divider />
                    <Typography className={classes.paragraph} paragraph>
                        Открытое акционерное общество «ЯрАналитПрибор» –   проектно-монтажная и сервисная фирма, обеспечивающая комплексное решение задач коммерческого учета энергоносителей и энергосбережения в целом, в промышленности, энергетике и ЖКХ.
                        25-летний опыт работы, высокотехнологичная производственная база, знания ведущих специалистов отрасли и накопленный опыт технических решений обеспечивают системный подход к реализации проекта любой сложности и открывают нашим заказчикам новые возможности, позволяющие получать максимальный эффект и существенную экономию энергоресурсов.
                    </Typography>
                    <Divider />
                    <Typography className={classes.paragraph} paragraph>
                        ЗАО НПФ «ЯрАналитПрибор» является в Ярославской области представителем заводов-изготовителей приборов учета тепловой энергии: АО НПФ «Логика», АО «Взлет», ГПК «ЭМИС», ООО «Теплотрон». Также мы давно и тесно сотрудничаем с другими ведущими предприятиями данной отрасли – ООО «Термотроник», ГК «Теплоком», ООО «ТБН Энергосервис» и другими.
                        Наша фирма осуществляет свою деятельность на основании Свидетельства от СРО «Межрегиональный Альянс Энергооператоров» № СРО-МАЭ-03-109-10-18.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={0} className={classes.sidebarAboutBox}>
                        <Typography>
                            Телефон
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            8 (4852)32-86-64
                        </Typography>
                    </Paper>
                    <img
                        src={vzlet}
                        alt="Расходомер-счетчик электромагнитный ВЗЛЕТ ЭМ (ПРОФИ-ххх М)"
                        className={classes.image}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <img
                        src={sro1}
                        alt="СРО"
                        className={classes.image}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <img
                        src={sro2}
                        alt="СРО"
                        className={classes.image}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <img
                        src={gazovik}
                        alt="СРО"
                        className={classes.image}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
