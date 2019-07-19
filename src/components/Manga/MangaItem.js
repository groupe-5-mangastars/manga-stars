import React from "react";


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
                fetch('http://localhost:3000/favorite', {
                    method: "Post",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({userid: id.id, idManga: mangas._id})
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
        <div>
            <li>{mangas.t}</li>
            <img alt="" src={`https://cdn.mangaeden.com/mangasimg/` + mangas.im}/>
            {mangas.c.map((categorie, index) =>
                <li key={index}>{categorie}</li>
            )}
            {((sessionStorage.getItem("token") !== null)) &&
            <form onSubmit={handleSubmit}>
                <button body={mangas._id} type="submit">Add Favorite</button>
            </form> }

        </div>
    </>

}

export default MangaItem;