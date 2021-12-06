// import { Link, withRouter } from 'react-router-dom';
// import MovieTrendsItem from './MovieTrendsItem';
import { useState, useEffect } from 'react';
import s from './MovieTrends.module.css';
// import { Navigation } from '../components/Navigation/Navigation';
  import { getMoviesTrand } from '../../services/moviesApi';
export function MovieTrends({ page}) {
    
    const [movies, setMovies] = useState([]);
    useEffect(() => {
         getMoviesTrand(page).then(data => setMovies(data));
      
    }, [page])
  
//    getMoviesTrand(1).then(data => setMovies(data));
      console.log(movies);
    return (
        <div className={ s.wrap} >
              <ul className={s.movies__list } >
           { movies.map(({ title,id,poster_path }) => {
                return (
                    <li key={id} className={s.movies__item } >
                        <h3>{title} </h3>
                        <img className="setMovies" src={poster_path}
                            alt={title} width="300px" height="300px"
                            // style ="wa   "
                        />
                    </li>

                )


            }) }

           
        </ul>
        </div>
      
    )
}


// import PropTypes from 'prop-types';

// const MovieTrends = ({ movies, baseUrl, location }) => {
//   return (
//     <div>
//       <h1 className="Home-title">Trending today</h1>
//       <ul className="HomeList">
//         {movies.map(({ title, id, poster_path }) => (
//           <li key={id} className="HomeList-item">
//             <Link
//               to={{
//                 pathname: `/movies/${id}`,
//                 state: {
//                   from: location,
//                 },
//               }}
//             >
//               <MovieTrendsItem
//                 title={title}
//                 poster={poster_path}
//                 baseUrl={baseUrl}
//               />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// MovieTrends.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   id: PropTypes.number,
//   location: PropTypes.object.isRequired,
// };

// export default withRouter(MovieTrends);
