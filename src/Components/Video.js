import React,{useRef} from 'react'
import ReactPlayer from 'react-player';
import m1 from '../Images/Opened Book on a pile of old books Generative AI _ Premium AI-generated image.jpeg'

const VIDEO_PATH = 'https://youtu.be/h2_bCO3dc58';

const Video = () => {

    const playerRef = useRef(null);

  return (
    <div style={{  backgroundColor: '#f3f3f3'}}>
        <div className="v-p">

            <div className="vid">
                <ReactPlayer ref={playerRef} width='100%' url={VIDEO_PATH} controls={true} playing={true} muted  className='video' style={{width:'50px',}}/>
            </div>

            <img src={m1} alt="" />

        </div>
    </div>
  )
}

export default Video