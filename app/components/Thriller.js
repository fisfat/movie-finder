
import React, { Component } from 'react'

export class Thriller extends Component {

    componentDidMount(){
        console.log(this.props.thriller)
    }
  render() {
      const { thriller } = this.props
      const video_url = `https://www.youtube.com/embed/${thriller.key}`
        return (
            <div className="">
              <div className="embed-responsive embed-responsive-16by9 trailer">
                <iframe title="trailer" className="embed-responsive-item" src={video_url} allowFullScreen />
              </div>
            </div>
          );
  }
}

export default Thriller

