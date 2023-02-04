import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

const Video = ({url,channel,description , song,likes, shares , comments}) => {
    const [playing ,setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress =() => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
   return (
    <div className='video'>
        <video className='video__player' 
        loop
        ref={videoRef}
        onClick={handleVideoPress}
        src={url}
        >
        </video>

        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar  likes={likes} shares={shares} comments={comments}/>
      
    </div>
  )
}

export default Video

// https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4
//https://short-status-video.com/wp-content/uploads/2022/04/Thor-Awesome-Attitude-Full-Screen-4k-60fps-WhatsApp-Status-Thor-Status-Chris-Hemsworth-Status.mp4