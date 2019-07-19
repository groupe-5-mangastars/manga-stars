import React from "react";
import MangaItem from "./MangaItem";
import StarsIcon from '@material-ui/icons/Stars';


const divStyle = {
    marginTop: 35, 
    fontSize: '1.2em', 
    textAlign: 'center'
  };
  const iconStyle = {
    color: 'gold',
    weight: 400

  }

    const
    FavorisList = ({mangas}) =>
        <>
       <div style={divStyle}>
            <p>Welcome to the favorites page.</p>
            <StarsIcon style={iconStyle} />

            <p>Here, let me load your mangas for you...</p>
            </div>
            
        </>

export default FavorisList;
