import React, { Component } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

class SendEmail extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            phone: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                fullScreen={this.props.fullScreen}
                aria-labelledby="responsive-dialog-title"
            >
                <form method="POST" action="https://formspree.io/yaranalitpribor@yandex.ru">
                    <DialogTitle glitterBottom id="responsive-dialog-title">
                        Оставьте заявку
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Мы перезвоним Вам в ближайшее время
                        </DialogContentText>
                        <OutlinedInput
                            placeholder="Ваше имя"
                            fullWidth
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                        />
                        <OutlinedInput
                            placeholder="Ваш телефон"
                            type="text"
                            name="phone"
                            onChange={this.handleChange}
                            className="phone-input"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" color="primary">
                            Отправить заявку
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }
}

export default SendEmail;