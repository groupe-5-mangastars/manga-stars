import React from "react";
import MangaItem from "./MangaItem";

const divStyle = {
    marginTop: 35, 
    fontSize: '1.2em', 
    textAlign: 'center'
  };

    const
    MangaList = ({mangas}) =>
        <>
       <div style={divStyle}>
            <p>Welcome to the mangas page.</p>
            <p>Here, let me load a few mangas for you...</p>
            </div>
            <ul>
                {mangas.map((manga, index) =>
                    <MangaItem key={index} mangas={manga}></MangaItem>
                )}
            </ul>
        </>

export default MangaList;
