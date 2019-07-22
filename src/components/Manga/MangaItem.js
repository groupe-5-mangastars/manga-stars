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
<div style= {wrapper}>
    <div style={divStyle}>
    
    <p > Titre : {mangas.t}</p>
    <br></br>
        <img alt="" src={`https://cdn.mangaeden.com/mangasimg/`+mangas.im}/> 
        <p> Catégorie : </p>
    {mangas.c.map((categorie, index) =>

        <div key={index} >{categorie}</div>
    )}
    {((sessionStorage.getItem("token") !== null)) &&
      <form onSubmit={handleSubmit}>
          <button body={mangas._id} type="submit">Add Favorite</button>
      </form> }
</div>
    </div>
</>
}
export default MangaItem;