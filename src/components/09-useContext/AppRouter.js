import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
// import { _404Component } from './_404Component';

export const AppRouter = () => {
    return (
        <Router>

            <div>

                <NavBar />

                <div className="container">
                    <Switch>

                        <Route exact path="/" component={ HomeScreen } />
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />

                        {/* Navegacion en caso de una url invalida */}
                        {/* <Route exact component={ _404Component } /> */}

                        <Redirect to="./" />

                    </Switch>
                </div>


            </div>

        </Router>
    );
}
