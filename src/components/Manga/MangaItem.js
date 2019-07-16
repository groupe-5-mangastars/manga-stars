import React from "react";

const MangaItem = ({ mangas }) => <>
    <div>
    <li >{mangas.t}</li>
    <img alt="" src={`https://cdn.mangaeden.com/mangasimg/`+mangas.im}/>
    {mangas.c.map((categorie, index) =>
        <li key={index} >{categorie}</li>
    )}
    <button>Add Favorite</button>
    </div>
</>

export default MangaItem;