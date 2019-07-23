import React, {Component} from "react";
import FavoriteList from "./FavorisList";
import StarsIcon from '@material-ui/icons/Stars';



class FavorisListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            id: String
        };
    }
    const
    iconStyle = {
        color: 'gold',
        weight: 400

    }
    searchManga(id){
        fetch('http://localhost:3000/users/favorite/' + id, {
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

                this.setState({favorites: data});

            })
            .catch();
    }

    componentDidMount() {
        const token = sessionStorage.getItem("token");
        if (token !== null) {
            let point = token.indexOf(".");
            let change = token.slice(point + 1);
            point = change.indexOf(".");
            change = change.slice(0, point);
            const userid = atob(change);
            let id = new Object(JSON.parse(userid));
            this.setState({id: id.id})
            this.searchManga(id.id);

        }
    }
   /* componentDidUpdate(prevProps, prevState) {
        if (prevState.favorites !== this.state.favorites) {
            this.searchManga();
        }
    }*/

    render() {
       
        return(
            <>
                <div>

                    <FavoriteList favorites={this.state.favorites}/>
                </div>
            </>
        );
        }



}
export default FavorisListContainer;
