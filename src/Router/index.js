import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignIn from "../SignIn";
import Register from '../Register';
import SuccessRegister from '../SuccessRegister';
import Profile from '../Profile';
import MangaListContainer from '../components/Manga/MangaListContainer';
import FavorisListContainer from '../components/Favorite/FavorisListContainer';
import Home from '../Home';


const Router = () => (
    <>
        <Route path="/login" exact component={SignIn} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/mangas" exact component={MangaListContainer} />
        <Route path="/favoris" exact component={FavorisListContainer} />
        <Route path="/" exact component={Home} />


        <Route path="/logout" render={() => (
            <Redirect to="/"  component={Home}/>
        )} />
        <Route path="/register" exact component={Register} />
        <Route path="/successRegister" exact component={SuccessRegister} />
    </>
);

export default Router;