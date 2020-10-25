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
            url= 'example-video.mov'
            width='100%'
            height='100%'
            controls = {true}
          />
        </div>
      </div>
    )
  }
}

export default Video;