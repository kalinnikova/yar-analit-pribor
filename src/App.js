import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/header';
import Footer from './components/footer';
import SendEmail from './components/sendEmail';
import './index.css';

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
            <SendEmail/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
