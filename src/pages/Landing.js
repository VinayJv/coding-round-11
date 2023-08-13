import { useState } from "react";
import { useDataContext } from "../context/dataContext"
import { Card } from "../component/card";

export function Landing(){
    const { data, setData, input } = useDataContext();
    const [genre, setGenre] = useState("All");
    const [year, setYear] = useState("All");
    const [rating,setRating] = useState("All");
    const [showForm, setShowForm] = useState(false);
    

    const filteredData = () => {
        let temp = [];
        if(input.length === 0){
            temp = data;
        }
        else{
            temp = data.filter((movie)=> movie.title.toLowerCase().includes(input) || movie.director.toLowerCase().includes(input) || movie.cast.indexOf(input) !== -1);
        }
        if(genre === "All"){
            temp = temp;
        }
        else{
            temp = temp.filter((movie)=>movie.genre.includes(genre));
        }
        if(year === "All"){
            temp = temp;
        }
        else{
            temp = temp.filter((movie)=>movie.year == year);
        }
        if(rating === "All"){
            temp = temp;
        }
        else{
            temp = temp.filter((movie)=>movie.rating == rating);
        }
        return temp;
    }

    const changeFilterByGenre = (event) => {
        setGenre(event.target.value);
    }

    const changeFilterByYear = (event) => {
        setYear(event.target.value);
    }

    const changeFilterByRating = (event) => {
        setRating(event.target.value);
    }

    const handleForm = (event) => {
        const elements = event.target.elements;
        let newMovie = {
            title: elements[0].value,
            year: elements[2].value,
            genre: [elements[4].value],
            rating: elements[5].value,
            director: elements[6].value,
            writer: elements[7].value,
            cast: [elements[3].value],
            summary: elements[1].value,
            imageURL: elements[8].value,
          }
        setData([...data, newMovie]);
        localStorage.setItem("Movies", JSON.stringify([...data, newMovie]));
        event.preventDefault();
        event.target.reset();
        setShowForm(false);
    }

    return(<div className="main-page">
        <div className="movies-filter-container">
            <h3>Movies({filteredData().length})</h3>
            <select onChange={changeFilterByGenre}>
                <option value="All">All Genre</option>
                <option>Drama</option>
                <option>Crime</option>
                <option>Action</option>
                <option>Adventure</option>
                <option>Fantasy</option>
                <option>Romance</option>
                <option>Sci-Fi</option>
                <option>Biography</option>
            </select>
            <select onChange={changeFilterByYear}>
                <option value="All">Release Year</option>
                <option>1991</option>
                <option>1992</option>
                <option>1994</option>
                <option>1999</option>
                <option>2001</option>
                <option>2003</option>
                <option>2008</option>
                <option>2010</option>
            </select>
            <select onChange={changeFilterByRating}>
                <option value="All">Rating</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
            <button className="filter-btn" onClick={()=>setShowForm(!showForm)}>Add a Movie</button>
        </div>
        <div className="modal" style={{display: showForm ? "block" : "none"}}>
            <form onSubmit={handleForm}>
                <input type="text" id="title" placeholder="Title" required></input>
                <input type="text" id="summary" placeholder="Summary" required></input>
                <input type="text" id="year" placeholder="Year"></input>
                <input type="text" id="cast" placeholder="Cast"></input>
                <input type="text" id="genre" placeholder="Genre"></input>
                <input type="text" id="rating" placeholder="Rating"></input>
                <input type="text" id="director" placeholder="Director"></input>
                <input type="text" id="writer" placeholder="Writer"></input>
                <input type="text" id="image" placeholder="ImageURL" required></input>
                <button className="filter-btn" type="submit">Add Movie</button>
            </form>
        </div>
        {filteredData().length === 0 && <p className="nodata">No movie for this filter</p>}
        <div className="movies-container">
            {filteredData().map((movie,index)=><Card props={movie} key={index}/>)}
        </div>
    </div>)
}