// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

const MovieItem = props => {
  const {data} = props
  const {id, thumbnailUrl, videoUrl} = data
  return (
    <>
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <div key={id}>
              <img src={thumbnailUrl} />
            </div>
          }
        >
          {close => (
            <>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
              <div className="video-container">
                <div className="responsive-container">
                  <ReactPlayer url={videoUrl} />
                </div>
              </div>
            </>
          )}
        </Popup>
      </div>
    </>
  )
}
export default MovieItem
