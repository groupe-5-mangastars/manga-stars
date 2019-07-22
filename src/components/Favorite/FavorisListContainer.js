import React, {Component} from "react";
import FavoriteList from "./FavorisList";
import StarsIcon from '@material-ui/icons/Stars';



class FavorisListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        };
    }


    const
    divStyle = {
        marginTop: 35,
        fontSize: '1.2em',
        textAlign: 'center'
    };
    const
    iconStyle = {
        color: 'gold',
        weight: 400

    }

    componentDidMount() {

        const token = sessionStorage.getItem("token");
        console.log(token);
        if (token !== null) {
            let point = token.indexOf(".");
            let change = token.slice(point + 1);
            point = change.indexOf(".");
            change = change.slice(0, point);
            const userid = atob(change);
            let id = new Object(JSON.parse(userid));
            console.log(id);
            fetch('http://localhost:3000/users/favorite/' + id.id, {
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
                    console.log(data);

                    this.setState({favorites: data});
                    console.log(this.state);

                })
                .catch();


        }
    }

    render() {
        return(
            <>
                <div >
                    <p>Welcome to the favorites page.</p>
                    <StarsIcon />
                    <FavoriteList favorites={this.state.favorites}/>
                    <p>Here, let me load your mangas for you...</p>
                </div>

            </>
        );
        }



}
export default FavorisListContainer;
