import React from 'react'
import './Video.scss'

const Video = ({ video }) => {
    return (
        <div className="intro">
            <div className="video">
                <video className='video_media' src={video} autoPlay={true} mute='true' loop></video>
            </div>
        </div>      
    )
}
export default Video