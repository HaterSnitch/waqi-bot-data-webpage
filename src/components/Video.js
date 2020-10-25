import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import '../App.css'

class Video extends Component {
  render () {
    return (
      <div className='vid'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player fixed-bottom'
            url= 'example-video.mov' // can also use an remote url https://www.youtube.com/watch?v=ysz5S6PUM-U
            width='80vw'
            controls = {true}
          />
        </div>
      </div>
    )
  }
}

export default Video;