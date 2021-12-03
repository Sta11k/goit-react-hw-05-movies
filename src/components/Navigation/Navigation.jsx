// import { NavLink } from 'react-router-dom';
import { NavLink, Outlet } from "react-router-dom";
import s from "./Navigation.module.css";
// import routes from '../../routes';
// import { Button } from '@material-ui/core';
// // import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// // const theme = createTheme({
// //   palette: {
// //     neutral: {
// //       main: '#ff0000', // цвет кнопки менять тут
// //       contrastText: '#000000' //цвет текста тут
// //     }
// // }
// // });
export function Navigation() {
  //   const setActive = ({ isActive }) => (isActive ? "active-link" : "");
  const setActive = ({ isActive }) => ({ color: isActive ? "blue" : "black" });
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li className={s.nav__item}>
            <NavLink to="/" style={setActive}>
              Home
            </NavLink>
          </li>
          {/* <li className={s.nav__item}>
          <NavLink to="/movies/:movieId/" style={setActive}>
            MovieDetailsPage
          </NavLink>
        </li> */}
          <li className={s.nav__item}>
            <NavLink to="/movies" style={setActive}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className={s.container}>
        <Outlet />
      </main>
    </>
  );
}

// const Navigation = () => {
//   return (
//     // <ThemeProvider theme={theme}>
//     <div className="Header">
//       <ul className="NavList">
//         <li>
//           <NavLink
//             exact
//             to={routes.home}
//             className="NavLink"
//             activeClassName="NavLink--active"
//           >
//             <Button
//               style={{
//                 borderRadius: 35,
//                 backgroundColor: "#21b6ae",
//                 padding: "1px 36px",
//                 fontSize: "18px"
//               }}
//               variant='contained'
//             >
//               Home
//             </Button>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to={routes.movies}
//             className="NavLink"
//             activeClassName="NavLink--active"
//           >
//             <Button
//             style={{
//                 borderRadius: 35,
//                 backgroundColor: "#21b6ae",
//                 padding: "1px 36px",
//                 fontSize: "18px"
//               }}
//               variant='contained'>
//               Movies
//             </Button>
//           </NavLink>
//         </li>
//       </ul>
//       </div>
//       // </ThemeProvider>
//   );
// };

// export default Navigation;
