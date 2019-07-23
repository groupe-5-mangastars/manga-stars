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
    iconStyle = {
        color: 'gold',
        weight: 400

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
                <div>

                    <FavoriteList favorites={this.state.favorites}/>
                </div>
            </>
        );
        }



}
export default FavorisListContainer;
