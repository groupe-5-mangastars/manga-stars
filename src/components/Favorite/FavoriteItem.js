import React, {Component} from 'react';


class FavoriteItem extends Component {
    constructor(props) {
        super(props);
    }
    state ={
        manga: {}
    }

    const
    divStyle = {
        margin: '40px',
        border: '1px solid black',
        display: 'grid',
        gridtemplatecolumns: 100
    };

    const
    pStyle = {
        margin: '40px',
        border: '1px solid black',
        display: 'grid',
        gridtemplatecolumns: 100
    };

    const
    wrapper = {
        display: 'grid',
        gridtemplatecolumns: 100,
        gridgap: 10,
        backgroundColor: 'white',
    };

    componentDidMount()
    {

        fetch('http://localhost:3000/mangas/' + this.props.mangas, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Fail to fetch');
                }
            })
            .then(data => {
                this.setState({manga: data});
            })
            .catch();

    }
     handleSubmit = (e) =>  {
        e.preventDefault();
        const token = sessionStorage.getItem("token");
        if(token !== null) {
            let point = token.indexOf(".");
            let change = token.slice(point + 1);
            point = change.indexOf(".");
            change = change.slice(0, point);
            const userid = atob(change);
            let id = new Object(JSON.parse(userid));
            console.log(id);
            if (id.id !== "") {
                fetch('http://localhost:3000/users/favorite/delete/'+id.id, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ favorite: this.state.manga._id})
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

        render() {
            return(
                <>
                    <div >
                        <div >

                            <p> Titre : {this.state.manga.t}</p>
                            <br></br>
                            <img alt="" src={`https://cdn.mangaeden.com/mangasimg/` + this.state.manga.im}/>
                            <p> Catégorie : </p>


                                <div >{this.state.manga.c}</div>

                            {((sessionStorage.getItem("token") !== null)) &&
                            <form onSubmit={this.handleSubmit}>
                                <button body={this.state.manga._id} type="submit">delete Favorite</button>
                            </form>}
                        </div>
                    </div>

                    </>
        )
        }
}
export default FavoriteItem;