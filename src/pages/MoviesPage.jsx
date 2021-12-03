// import { Component } from 'react';
// import MoviesPageQuery from '../components/MoviesPageQuery';
// import API from '../services/moviesApi';
// import SearchBar from '../components/SearchBar';
// import queryString from 'query-string';
// import Button from '@material-ui/core/Button';
import { Reviews } from "../components/Reviews/Reviews";
import { Cast } from "../components/Cast/Cast";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
export function MoviesPage() {
  return (
    <>
      <SearchBar />
      <h2> MoviesPage</h2>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      {/* <Routes>
          <Route path=":cast" element={<Cast />} />
          <Route path=":reviews" element={<Reviews />}
        </Routes>  */}
      <Routes>
        <Route to=":cast" element={<Cast />} />
        <Route to=":reviews" element={<Reviews />} />
      </Routes>

      <Outlet />
    </>
  );
}

// class MoviesPage extends Component {
//   state = {
//     query: '',
//     movies: [],
//     page: 1,
//     base_url: 'https://image.tmdb.org/t/p/w500',
//   };

//   componentDidMount = () => {
//     const { query } = this.getQueryFromProps(this.props);

//     if (query) {
//       this.setState({ query });
//     }
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { query, movies } = this.state;

//     if (prevState.query !== query) {
//       this.fetchMovies();

//       this.props.history.push({ search: `query=${query}` });
//     }

//     if (movies.length > 20) {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     }
//   }

//   async fetchMovies() {
//     const { query, page } = this.state;
//     const option = {
//       query,
//       page,
//     };

//     API.getMovieByQuery(option).then(data => {
//       this.setState(prevState => ({
//         movies: [...prevState.movies, ...data],
//         page: prevState.page + 1,
//       }));
//     });
//   }

//   onChangeQuery = query => {
//     this.setState({
//       query,
//       movies: [],
//       page: 1,
//     });
//   };
//   onBtnClickUp = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   getQueryFromProps = props => queryString.parse(props.location.search);

//   render() {
//     const { movies, base_url, page } = this.state;

//     return (
//       <div className="Movies-container">
//         <SearchBar onSubmit={this.onChangeQuery} />
//         {movies && <MoviesPageQuery movies={movies} baseUrl={base_url} />}
//         {movies.length > 0 && (
//           <div>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => this.fetchMovies(page + 1)}
//             >
//               More movies
//             </Button>

//             <Button
//               variant="contained"
//               color="primary"
//               onClick={this.onBtnClickUp}
//             >
//               UP
//             </Button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default MoviesPage;
