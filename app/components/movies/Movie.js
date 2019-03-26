import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import {css} from '@emotion/core'
import axios from 'axios'
import Thriller from '../Thriller'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const size = css`
    height: 1500px;
`;

export class Movie extends Component {
  constructor(){
    super()
    this.state ={
      movies: [ ],
      loading: true,
      thriller: [ ]
    }
    const str = window.location.hash;
    const result = str.split("/");
    this.id = result[2];
  }


  componentDidMount(){
    // let id = this.props.match.params.movie_id
    const key = '9abb06545efd48e40e6c416930822c98'
    const api_url =  `https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}`
    const thriller_url = `http://api.themoviedb.org/3/movie/${this.id}/videos?api_key=${key}`
    axios.get(api_url)
    .then(res => {
        this.setState({
            movies: res.data,
        })
    })
    axios.get(thriller_url).then(res => {
      this.setState({
        thriller: res.data.results,
        loading: false
      })
    })  
}
  

  render() {
    const thriller = this.state.thriller;
    const img = 'https://image.tmdb.org/t/p/w500'
    const show_thriller = thriller.map(thrill => {
        return(
            <div className="col-md-4 mt-4" key={thrill.id}>
              <Thriller thriller={thrill} />
            </div>  
        )
    })
    const movies = this.state.movies;
    const genres = movies.genres ? (
      movies.genres.map(genre => {
               return(
                   <div key={genre.id}>
                       <ul className="list-group display-inline">
                           <li className="list-unstyled ">{genre.name}</li>
                       </ul>
                   </div>
               )
           })
   ) : (
       <div>
           <p>None listed</p>
       </div>
   )

    const display = movies ? (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
              <div className="card" style={{height: "452px", width: "302px"}}>
                <img src={img + movies.poster_path} style={{height: "450px", width: "300px"}} alt=""  />
              </div>
              </div>
            </div>
            </div>
            <div className="col-md-6">
              <h2 className="text-center">{movies.title} <button className="btn btn-sm btn-warning mb-2" disabled>{movies.status}</button></h2>
              <div className="text-center mt-5">
                <p className="text-white">{movies.overview}</p>
              </div>
              <div className="">
                <button className="btn btn-sm btn-warning mt-2" disabled="disabled">
                  <i className="fa fa-thumbs-up"></i>
                  &nbsp; {movies.vote_average}
                </button>
              </div>
              <div className="">
                <h6 className="text-center">Genre(s)</h6>
                {genres}
              </div>
              <div className="">
                <h6 className="text-center">Official Page</h6>
                  <p className="text-white">{movies.homepage}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-5 mb-5">
          <h2 className="text-center">Trailers</h2>
            <div className="row">
              {show_thriller}
            </div>
          </div>
        </div>
      </div>
    ):(
      <div>

      </div>
    )
    

    return (
      <div>
        <div className="arrow">
          <Link to ="/index"> <i className="fa fa-arrow-left" style={{color: "#831010"}}></i> </Link>
        </div>
        
        <div className="text-center">
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

                        {display}
      </div>
    )
  }
}

export default Movie
