import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      <>
        {movies.map(eachMovie => (
          <MovieItem key={eachMovie.id} movie={eachMovie} />
        ))}
      </>
    </Slider>
  )
}

export default MoviesSlider
