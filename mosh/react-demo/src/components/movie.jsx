import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService'
import '../App.css'
import Like from './common/like'
import ListGroup from './common/listgroup'
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';

class Movies extends Component{
    state = {
        movies: [],
        genres: [],
        pageSize: 5,
        currentPage: 1
    };

    componentDidMount(){
        this.setState({movies: getMovies(), genres: getGenres()})
    }

    handleDelete = movie => {
     const movies = this.state.movies.filter( m => m._id !== movie._id)
     this.setState({movies});
    }

    handleLike = movie =>{
    const movies = [...this.state.movies];
    const index = this.state.movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies })
    }

    handleGenreSelected = genre =>{
        console.log(genre);
    }

    handlePageChange = page =>{
        this.setState({ currentPage: page} )
    }

    render(){ 
        const { length:count} = this.state.movies;
        const { currentPage, pageSize, movies:allMovies } = this.state

        if (count === 0) return <p>There are no movies in database</p>

        const movies = paginate(allMovies, currentPage, pageSize);

        return(
        <div className='row'>
        <div className="col-3">
            <ListGroup 
                items={this.state.genres}
                onItemSelect={this.handleGenreSelected}
                 />
         
        </div>
        <div className="col">
        <p>There are {count} Movies</p>
            <table className='table'>
            <thead>
                <tr>
                <th >Title</th>
                <th >Genre</th>
                <th >Stock</th>
                <th >Rate</th>
                <th >Like</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => 
                <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                    <Like liked={movie.liked} onClickImitation={() => this.handleLike(movie)}/>
                </td>
                <td><button onClick={() => this.handleDelete(movie)} 
                className="btn btn-danger btn-sm">Delete</button>
                </td>
          
            </tr>)}
            </tbody>
            </table>
            <Pagination 
            itemsCount={count}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}  />
            </div>
            </div>
        )

    }
}

export default Movies;