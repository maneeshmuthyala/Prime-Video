// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )
  return (
    <div className="main-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime"
      />
      <div>
        <h1 className="action">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
      </div>
      <div>
        <h1 className="action">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
