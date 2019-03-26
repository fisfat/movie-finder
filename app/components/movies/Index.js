import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import axios from 'axios';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export class Index extends Component {
    constructor(){
        super()
        this.state = {
            movies: [ ],
            searchQuery: '',
            loading: true,
            title: "Trending Movies For You"
        }
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9abb06545efd48e40e6c416930822c98&language=en-US&query=${this.state.searchQuery}&page=1&include_adult=false`)
        .then(res => {
            this.setState({
                movies: res.data.results,
                loading: false,
                title: "Search Results"
            })
        })
    }


    componentDidMount(){
        const key = '9abb06545efd48e40e6c416930822c98'
        const api_url = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
        axios.get(api_url).then(res => {
            this.setState({
                movies: res.data.results,
                loading: false,
            })
            console.log(res.data)
        })
    }

  render() {
      const { movies } = this.state
      const img = 'https://image.tmdb.org/t/p/w185'
      const movieList = movies.map(movie => {
          if(movie.poster_path !== '' || movie.poster_path !== null ){
              return(
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={movie.id}>
                            <Link to={'/index/' + movie.id}>
                                <div className="card border-secondary">
                                    <img src={movie.poster_path ? img + movie.poster_path : img + movie.backdrop_path } alt=""/>
                                </div>
                            </Link>
                    </div>
              ) 
          }
      }) 
    return (
      <div className="container-fluid">
        <div className="arrow">
          <Link to ="/"> <i className="fa fa-arrow-left" style={{color: "#831010"}}> Back Home</i> </Link>
        </div>
        <div className="container-fluid mb-5">
        <h2 className="text-center">SEARCH</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="container h-100 mb-5">
                        <div className="d-flex justify-content-center h-100"> 
                            <div className="searchbar">
                            <input className="search_input" type="text" onInput={this.handleSearch} placeholder="Search..." />
                            <button className="search_icon"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
            </form>
            <p className="text-center">search for: {this.state.searchQuery}</p>
        </div>
        <div className="text-center">
        <h3 className="text-center mb-5">{this.state.title}</h3>
          <div className='sweet-loading center' id="loader">
                                  <ClipLoader
                                  className={override}
                                  sizeUnit={"px"}
                                  size={50}
                                  color={'#831010'}
                                  loading={this.state.loading}
                                  />
                          </div> 
        </div>              
        <div className="row">
            {movieList}
        </div>
        
      </div>
    )
  }
}

export default Index
