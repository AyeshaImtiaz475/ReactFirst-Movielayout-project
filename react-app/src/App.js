// import {useState, useEffect} from 'react';
// import './App.css';

// const Person = (props) => {
//   return (
//     <>
//     <h1>Name: {props.name}</h1>
//     <h2>Last name: {props.lastName}</h2>
//     <h2>Age: {props.age}</h2>
//     </>
//   )
// }
// //custom components 
// const App= () => {
//   return(
//   <div className = "App">
//    <Person name = {'John'} lastName= {'Doe'} age= {30}/>
//    <Person  name = {'Jane'} lastName= {'Doe'} age= {24}/>
//    <Person  name = {'Mary'} lastName= {'Doe'} age= {19}/>
//     </div>
//   );
// }

//events in reacts (button press, mouse click)
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     alert("You've changed the counter to" + counter) 
//    setCounter(100);
//   }, []);

//   return (
//     <div className= "App">
//       <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
//       </div>
//   )
// }

//spiderman movies 
// export default App;
//62db380c -> omdbapi.com
// App.jsx
// import { useState, useEffect } from "react";
// import MovieCard from "./MovieCard.jsx";
// import './App.css';
// import SearchIcon from './search.png';

// const API_URL = 'http://www.omdbapi.com?apikey=62db380c';

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();
//     setMovies(data.Search);
//   }

//   useEffect(() => {
//     searchMovies('Spiderman');
//   }, []);

//   return (
//     <div className="app">
//       <h1>MovieLand</h1>
//       <div className="search">
//         <input 
//           placeholder="Search for movies"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <img 
//           src={SearchIcon} 
//           alt="search"
//           onClick={() => searchMovies(searchTerm)}
//         />
//       </div>
//       {
//         movies?.length > 0 ? (
//           <div className="container">
//             {movies.map((movie) => 
//               <MovieCard key={movie.imdbID} movie={movie} />
//             )}
//           </div>
//         ) : (
//           <div className='empty'>
//             <h2>No movies found</h2>
//           </div>
//         )
//       }
//     </div>
//   );
// }

// export default App;

//harry potter movies 
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";
import './App.css';
import SearchIcon from './search.png';

const API_URL = 'http://www.omdbapi.com?apikey=62db380c';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Harry Potter');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon} 
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => 
              <MovieCard key={movie.imdbID} movie={movie} />
            )}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;

