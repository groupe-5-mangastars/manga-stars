import React, { Component } from 'react';
import MangaList from './MangaList';

class MangaListContainer extends Component {
    state = {
        mangas: []
    }

    componentDidMount(){
    fetch('http://localhost:3000/mangas?pageNo=1&size=20', {
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
            this.setState({mangas: data});
        })
        .catch();
    }

    render() {
        return (
            
            <MangaList mangas={this.state.mangas} />
        );
    }
}

export default MangaListContainer;