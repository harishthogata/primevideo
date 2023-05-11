import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    return (
      <div className="app-container">
        <img
          alt="prime video"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        />
        <h1 className="heading">Action Movies</h1>
        <div className="videos-container">
          <MoviesSlider
            movies={moviesList.filter(
              category => category.categoryId === 'ACTION',
            )}
          />
        </div>
        <h1 className="heading">Comedy Movies</h1>
        <div className="videos-container">
          <MoviesSlider
            movies={moviesList.filter(
              category => category.categoryId === 'COMEDY',
            )}
          />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
