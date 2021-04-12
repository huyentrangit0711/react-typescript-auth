import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import HomePage from "../Home";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn/SignInPage";
import * as ROUTES from '../../constants/routes'
import withAuthentication from '../Session/withAuthentication'
class App extends React.Component<any, any> {

    render() {
        return (
            <Router>
                <div>
                    <h1>Hello App</h1>
                    <Navigation/>
                    <Route exact path={ROUTES.LANDING} component={LandingPage}></Route>
                    <Route path={ROUTES.SIGNIN} component={SignInPage} exact></Route>
                    <Route exact path={ROUTES.SIGNUP} component={SignUpPage}></Route>
                    <Route exact path={ROUTES.HOME} component={HomePage}></Route>
                </div>
            </Router>
        );
    }
}

export default withAuthentication(App);
