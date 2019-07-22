import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Map, Marker } from 'yandex-map-react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import contacts from '../assets/contacts.png';

const mapState = {
    controls: ['default']
};

const styles = () => ({
    map: {
        paddingTop: 40,
        paddingBottom: 55,
        fontFamily: 'Circe, Arial, sans-serif',
    },
    info: {
        paddingLeft: 10,
        marginLeft: 20,
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 477,
        height: 207,
        marginTop: 23,
        marginRight: 14,
    },
    card: {
        display: 'flex',
    },
    cardTitle: {
        paddingBottom: 16,
    },
});

class Contacts extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Container className={classes.map}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                                <CardContent>
                                    <Typography className={classes.cardTitle} component="h2" variant="h5">
                                        Телефоны:
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        <div>+7(4852) 32-90-42</div>
                                        +7(910) 663-74-50 - Калинников Григорий Сергеевич, директор
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        +7(4852) 32-90-42 - Смирнов Валерий Александрович, заместитель директора
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        +7(4852) 32-86-64 - Горюнов Александр Николаевич, ведущий инженер-проектировщик
                                    </Typography>
                                </CardContent>
                            </div>
                            <CardMedia
                                className={classes.cardMedia}
                                image={contacts}
                                title="Image title"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.cardTitle} component="h2" variant="h5">
                            Адрес:
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            г. Ярославль, ул. Свердлова, д. 26
                        </Typography>
                        <Map onAPIAvailable={function () { console.log('API loaded'); }} width={'100%'} state={mapState} center={[57.629965, 39.876718]} zoom={17}>
                            <Marker lat={57.629965} lon={39.876718} />
                        </Map>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default withStyles(styles)(Contacts);
