import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router';
import { Landing } from './pages/Landing';
import { NavLink } from 'react-router-dom';
import { useDataContext } from './context/dataContext';
import { Wishlist } from './pages/Wishlist';
import { Single } from './pages/Single';

function App() {
  const { setInput } = useDataContext();
  const inputHandler = (event) => {
    setInput(event.target.value);
  }
  return (
    <div className="App">
      <div className='nav-bar'>
        <div><h2>IMDB</h2></div>
        <input type='text' onChange={inputHandler} placeholder='Search movies by title, cast and director'></input>
        <div className='nav-link-container'><NavLink to={"/"}>Movies</NavLink><NavLink to={"/wishlist"}>Wishlist</NavLink></div>
      </div>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/:movieTitle' element={<Single />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
