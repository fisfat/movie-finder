import React, { Component } from 'react'
import { Offline, Online } from "react-detect-offline";

export class NoInternet extends Component {
  render() {
    return (
      <div className="container">
          <Offline>
          <div className="alert alert-danger" role="alert">
            <strong>NO INTERNET CONNECTION.</strong> <br/> Movies won't load <i className="far fa-frown"></i>
          </div>
          </Offline>
          <Online>
          <div className="alert alert-success" role="alert">
            <strong>connected!</strong> <br/>
            micasa sucasa <i className="far fa-smile"></i>
          </div>
          </Online>
      </div>
    )
  }
}

export default NoInternet
