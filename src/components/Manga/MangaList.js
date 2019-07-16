import React from "react";
import MangaItem from "./MangaItem";


    const
    MangaList = ({mangas}) =>
        <>
            <ul>
                {mangas.map((manga, index) =>
                    <MangaItem key={index} mangas={manga}></MangaItem>
                )}
            </ul>
        </>

export default MangaList;
