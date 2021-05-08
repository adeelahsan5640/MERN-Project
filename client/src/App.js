import React from 'react';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { UppAd } from './components/UppAd';
import Footer from './components/Footer';

const App = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <UppAd />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;