import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker, { NewsTicker } from 'nice-react-ticker'

const VideoFooter = ({channel, description ,song}) => {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>{channel}</h3>
            <p>{description}</p>
            <div className='video__ticker'>
              <MusicNoteIcon className='vidoFooer__icon'/>
              <Ticker mode="smooth">
               <NewsTicker title={song} />
              </Ticker>
            </div>
        </div> 
        <img className='videoFooter__record' 
        src='https://static.thenounproject.com/png/934821-200.png' alt='video footer'
        />
    </div>
  )
}

export default VideoFooter
