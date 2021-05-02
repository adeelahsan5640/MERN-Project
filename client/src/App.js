import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}/>                    
                    <Route path="/auth" exact component={Auth}/>
                    </Switch>
                <Home />
            </Container>
        </BrowserRouter>
    );


export default App;
