import React, { Component } from 'react';
import MangaList from './MangaList';
import ReactPaginate from 'react-paginate';



class MangaListContainer extends Component {
    state = {
        mangas: [],
        page:1
    }


    searchManga(){
        fetch(`http://localhost:3000/mangas?pageNo=`+this.state.page+`&size=10`, {
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
                this.setState({
                    mangas: data
                });
            })
            .catch();
    }
    componentDidMount(){
        this.searchManga();
    }

    componentDidUpdate(prevProps, prevState) {
     if (prevState.page !== this.state.page) {
         this.searchManga();
     }
    }

    handlePageClick = (e) => {
        console.log(e);

        this.setState({
            page: e.selected +1
        })
    }



    render() {
        return (
            <>
            <MangaList mangas={this.state.mangas} max={this.state.maxInPage}/>
            <div className="react-paginate">
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={300}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
                disabledClassName={'disable'}
                />
    </div>
                </>
        );
    }
}

export default MangaListContainer;