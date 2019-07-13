import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignIn from "../SignIn";
import Register from '../Register';
import SuccessRegister from '../SuccessRegister';
import Profile from '../Profile';

const Router = () => (
    <>
        <Route path="/login" exact component={SignIn} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/logout" render={() => (
            <Redirect to="/" />
        )} />
        <Route path="/register" exact component={Register} />
        <Route path="/successRegister" exact component={SuccessRegister} />
    </>
);

export default Router;