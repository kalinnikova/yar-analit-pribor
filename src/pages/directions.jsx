import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import seti1 from '../assets/seti1.png';
import seti2 from '../assets/seti2.png';
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: 30,
        fontFamily: 'Circe, Arial, sans-serif',
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    image: {
        width: '100%',
        minHeight: 409,
    },
    paper: {
        paddingTop: 25,
        paddingLeft: 30,
        paddingRight: 30,
    },
}));

export default function Directions() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                            Услуги
                        </Typography>
                        <Divider />
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="1. Установка тепловых счетчиков;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="2. Установка приборов автоматики и автоматического погодного регулирования систем отопления;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="3.	Монтаж и реконструкция тепловых узлов;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="4. Проектирование и монтаж наружных и внутренних сетей и систем инженерно-технического обеспечения;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary=" 5. Обслуживание тепловых узлов, приборов учета и автоматики, ремонт и калибровка приборов;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="6.	Проведение метрологической периодической поверки измерительных приборов;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="7.	Проектирование и установка приборов учета ливневых и канализационных стоков в напорных и безнапорных трубопроводах;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="8.	Проектирование и установка приборов учета и паровых системах потребления;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="9.	Учет природного и технических газов;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="10. Экспертиза проектной и сметной документации."
                                />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src={seti1}
                        alt="Установка теплосчетчиков Ярославль"
                        title="Установка теплосчетчиков Ярославль"
                        className={classes.image}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        src={seti2}
                        alt="Проектирование узлов учета тепловой энергии"
                        title="Проектирование узлов учета тепловой энергии"
                        className={classes.image}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography paragraph>
                            Для осуществления этих задач специалисты нашей фирмы производят следующие виды работ:
                        </Typography>
                        <Divider />
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="- первичное обследование объекта для составления коммерческого предложения;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="- разработка и согласование проектно-сметной документации;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="- поставка необходимого оборудования;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="- гарантийное и постгарантийное сервисное обслуживание, в том числе ремонт приборов;"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="- организация очередной и внеочередной поверки измерительных приборов."
                                />
                            </ListItem>
                        </List>
                    </Paper>

                </Grid>
            </Grid>
        </Container>
    );
}
