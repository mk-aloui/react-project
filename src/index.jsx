import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { Router, Route, Redirect, BrowserRouter, Link } from "react-router-dom"
import Maincontent from './MainContent';
import history from './history'

ReactDOM.render(< React.StrictMode >
    < Router history={history}>

        <App />





    </Router> </React.StrictMode >,
    document.getElementById('root')
);