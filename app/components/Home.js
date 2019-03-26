// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import NoInternet from './NoInternet'

type Props = {};

export default class Home extends Component<Props> {
  props: Props;
  

  render() {
      return(
          <div className="">
            <div>
              <nav className="navbar">
                <Link className="navbar-brand" to="#">
                  <i className="fas fa-film"></i> SIXFLIX
                </Link>
                <div className="row justify-content-end">
                  <NoInternet />
                </div>
              </nav>
              <div className="container">
              <div className="row justify-content-center">
                
                <div className="shift-down">
                    <div className="mb-5">
                      <h2 className="text-center" id="front">SIXFLIX</h2>
                      <h6 className="text-center" id="front">VIEW TRENDING MOVIES AND TV SHOWS</h6>
                    </div>
                  <Link to={routes.INDEX} className="btn btn-secondary ml-3">Latest Movies</Link>
                  <Link to={routes.SERIES} className="btn btn-secondary ml-5">Latest Series</Link>
                  <p className=" text-center mt-5"> <em>Made by fisfat with &hearts;</em> </p>
                </div>
                
                </div>
              </div>
            </div>
          </div>
      )
    }
  }
