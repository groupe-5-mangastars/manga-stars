import React from "react";
import FavoriteItem from "./FavoriteItem";

const divStyle = {
    marginTop: 35,
    fontSize: '1.2em',
    textAlign: 'center'
};

const
    FavoriteList = ({favorites}) =>
        <>
            <div style={divStyle}>
                <p>Welcome to the favorite page.</p>
                <p>Here, let me load a few mangas for you...</p>
            </div>
            <ul>
                {favorites.map((favorite, index) =>
                    <FavoriteItem key={index} mangas={favorite}></FavoriteItem>
                )}
            </ul>
        </>

export default FavoriteList;
