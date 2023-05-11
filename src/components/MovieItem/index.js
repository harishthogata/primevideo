import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie

  return (
    <>
      <Popup
        modal
        trigger={
          <button type="button" className="thumbnail-button">
            <img className="thumb-image" alt="thumbnail" src={thumbnailUrl} />
          </button>
        }
        className="popup-content"
        position="top center"
      >
        {close => (
          <div className="video-popup-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
