import './App.scss';
// import { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from "./pages/MoviesPage";
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { Notfoundpages } from './pages/Notfoundpages';
import { Cast } from './components/Cast/Cast';
import { Reviews} from './components/Reviews/Reviews'

// import routes from './routes';
// import AppBar from './components/AppBar';
// import Loader from 'react-loader-spinner';
// const HomeView = lazy(() =>
//   import('./views/HomeView.jsx' /* webpackChunkName: "home-page" */),
// );
// const MoviesDetailView = lazy(() =>
//   import('./views/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details" */),
// );
// const MoviesPage = lazy(() =>
//   import('./views/MoviesPage.jsx' /* webpackChunkName: "movies-page" */),
// );

export function App() {
  return (
    <>
      <header>
        <Link to="/">HomePage</Link>
        <Link to='/movies/:movieId/'>MovieDetailsPage</Link>
        <Link to='/movies'>MoviesPage</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage/> }   />
        <Route path='/movies/:movieId/' className="activeLink" element={<MovieDetailsPage />} >
          <Route path="cast" element={< Cast/>} />
          <Route path="reviews" element={ <Reviews/>} />
        </Route>
        <Route path='/movies' element={<MoviesPage />} />
        <Route path="" element={<Notfoundpages/> }   />
      </Routes>


    </>
  )
 };

// {/* <AppBar />
// <Suspense
//   fallback={<Loader type="Audio" color="#00BFFF" height={80} width={80} />}
// >
//   <Switch>
//     <Route exact path={routes.home} component={HomeView} />

//     <Route path={routes.movieId} component={MoviesDetailView} />

//     <Route path={routes.movies} component={MoviesPage} />
//   </Switch>
// </Suspense> */}