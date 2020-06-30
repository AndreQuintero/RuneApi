import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from '../components/header'

export default {
    title: 'Header',
    component: Header,
};

export const header = () => (
    <Router>
        <Header />
    </Router>
)