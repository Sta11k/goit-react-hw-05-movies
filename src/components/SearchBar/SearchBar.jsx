import { React, useState } from "react";
import s from "./SearchBar.module.css";
export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(" перед отправкой", value);
    onSubmit(value.trim().toLowerCase());
    setValue("");
  };
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={SubmitHandler}>
        <input
          className={s.searchForm__input}
          type="text"
          onChange={changeHandler}
          value={value}
          //   autocomplete="off"
          //   autofocus
          placeholder="Search movies"
        />{" "}
        <button type="submit" className={s.searchForm__button}>
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </header>
  );
}

// import { Component } from 'react';
// import './SearchBar.scss';

// export default class SearchBar extends Component {
//   state = {
//     query: '',
//   };

//   handleInput = e => {
//     this.setState({
//       query: e.target.value,
//     });
//   };

//   handleSubmit = e => {
//     const { query } = this.state;
//     e.preventDefault();

//     this.props.onSubmit(query);
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit} className="MoviesPage-form">
//           <input
//             className="MoviesPage-input"
//             type="text"
//             value={this.state.query}
//             onChange={this.handleInput}
//             placeholder="Search movie"
//           ></input>
//           <button className="MoviesPage-button" type="submit">
//             Search
//           </button>
//         </form>
//       </>
//     );
//   }
// }
