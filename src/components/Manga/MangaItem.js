import React from 'react';


const divStyle = {
  margin: '40px',
  border: '1px solid black',
  display: 'grid',
  gridtemplatecolumns: 100 
};

const pStyle = {
  margin: '40px',
  border: '1px solid black',
  display: 'grid',
  gridtemplatecolumns: 100 
};

const wrapper = {
  display: 'grid',
  gridtemplatecolumns: 100 ,
  gridgap: 10,
  backgroundColor: 'white', 
};


const MangaItem = ({ mangas }) => <>
<div style= {wrapper}>
    <div style={divStyle}>
    
    <p > Titre : {mangas.t}</p>
    <br></br>
        <img alt="" src={`https://cdn.mangaeden.com/mangasimg/`+mangas.im}/> 
        <p> Catégorie : </p>
    {mangas.c.map((categorie, index) =>
     
        <div key={index} >{categorie}</div>
    )}
    <button>Add Favorite</button>
    </div>
    </div>
</>

export default MangaItem;