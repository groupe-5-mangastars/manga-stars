import React, {Component} from 'react';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Button from '@material-ui/core/Button';


class FavoriteItem extends Component {
    constructor(props) {
        super(props);
    }
    state ={
        manga: {}
    }

   

   

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
                "Authorization": sessionStorage.getItem("token")
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
     handleDelete = (e) =>  {
        e.preventDefault();

        const token = sessionStorage.getItem("token");
        if(token !== null) {
            let point = token.indexOf(".");
            let change = token.slice(point + 1);
            point = change.indexOf(".");
            change = change.slice(0, point);
            const userid = atob(change);
            let id = new Object(JSON.parse(userid));
            if (id.id !== "") {
                fetch('http://localhost:3000/users/favorite/delete/'+id.id, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        "Authorization": sessionStorage.getItem("token")
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

            const
            divStyle = {
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

               const DeleteStyle = {
                color: "red",

               };
               const
               divButton= {
                   
                   paddingLeft: 700,
                   paddingBottom: 30,

               };

            return(
                
                <>
                <div style={divStyle}>
 
                        <div >

                            <p> Title : {this.state.manga.t}</p>
                            <br></br>
                            <img alt="" src={`https://cdn.mangaeden.com/mangasimg/` + this.state.manga.im}/>
                            <p > Category : </p>


                                <div >{this.state.manga.c}</div>


                  

                            {((sessionStorage.getItem("token") !== null)) &&
                            <form onSubmit={this.handleDelete}>
                                                        <div style={divButton}>

                            <Button body={this.state.manga._id} type="submit" variant="contained" color="white" style={ButtonStyle} >delete Favorite
                            <DeleteRoundedIcon style={DeleteStyle} />

                            </Button>
                            </div>
                            </form>
                            }

                            

      

                        </div>
                    </div>

                    </>
        )
        }
}
export default FavoriteItem;