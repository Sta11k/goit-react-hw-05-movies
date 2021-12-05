// import { Link, withRouter } from 'react-router-dom';
// import MovieTrendsItem from './MovieTrendsItem';
import { useState } from 'react';
// import { Navigation } from '../components/Navigation/Navigation';
  import { getMoviesTrand } from '../../services/moviesApi';
export function MovieTrends({ page}) {
    
    const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //      getMoviesTrand(page).then(data => setMovies(data));
      
    // }, [page])
  
   getMoviesTrand(1).then(data => setMovies(data));
      
    return (
        <ul>
           { movies.map(({ title,id,poster_path }) => {
                return (
                    <li key={id }>
                        <h3>{title} </h3>
                        <img className="setMovies" src={poster_path}
                            alt={title}
                            // style ="wa   "
                        />
                    </li>

                )


            }) }

           
        </ul>
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
