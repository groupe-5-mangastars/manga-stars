import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import StarsIcon from '@material-ui/icons/Stars';
import { borderBottom } from '@material-ui/system';


const divStyle = {
  margin: '40px',
  border: '1px solid black',
  display: 'flex',
  gridtemplatecolumns: 100 
};


const ButtonStyle = {
  color: "black",
  alignItems: 'center',
  alignContent: 'center',
  backgroundColor: 'white',
  display: 'flex',
  border: '1px solid black',
  
 };
 const divButton= {            
  paddingLeft: 750,
  paddingBottom: 30,

  };



const StarsStyle = {
  color: "gold",
 };

const MangaItem = ({ mangas }) => {


const handleSubmit = e => {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        console.log(token);
        if(token !== null) {
            let point = token.indexOf(".");
            let change = token.slice(point + 1);
            point = change.indexOf(".");
            change = change.slice(0, point);
            const userid = atob(change);
            let id = new Object(JSON.parse(userid));
            console.log(id);
            if (id.id !== "") {
                fetch('http://localhost:3000/users/favorite/'+id.id, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ favorite: mangas._id})
                })
                    .then(response => {
                        if (response.status === 201) {
                            return response.json();
                        } else {
                            throw new Error('Fail to fetch');
                        }
                    })
                    .catch();
            }
        }
    }
    

    return <>

    <div style={divStyle}>
    <div>
    <p > Title : {mangas.t}</p>
    <br></br>
        <img alt="" src={`https://cdn.mangaeden.com/mangasimg/`+mangas.im}/> 
        <p> Category : </p>
    {mangas.c.map((categorie, index) =>

        <div key={index} >{categorie}</div>
    )}
    {((sessionStorage.getItem("token") !== null)) &&

                                                   
      <form onSubmit={handleSubmit}>
           <div style={divButton}>
      
      <Button  body={mangas._id} type="submit" variant="contained" color="white" style={ButtonStyle}  >
        Add to favorite
        <StarsIcon style={StarsStyle} />
      </Button>
      </div>
      </form>
       }
</div>
    </div>
</>
}

export default MangaItem;