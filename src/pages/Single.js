import { useParams } from "react-router";
import { useDataContext } from "../context/dataContext";

export function Single(){
    const { movieTitle } = useParams();
    const { data } = useDataContext();
    const clickedMovie = data.find((movie)=>movie.title === movieTitle);
    return(<div className="main-page">
        <div className="single-page">
            <div><img src={clickedMovie.imageURL} className="singlepage-img"></img></div>
            <div>
                <h2>{clickedMovie.title}</h2>
                <p>{clickedMovie.summary}</p>
                <p>Year: {clickedMovie.year}</p>
                <p>Genre: {clickedMovie.genre.map((genre,index)=><span key={index}>{genre}</span>) ?? ""}</p>
                <p>Rating: {clickedMovie.rating ?? ""}</p>
                <p>Director: {clickedMovie.director ?? ""}</p>
                <p>Writer: {clickedMovie.writer ?? ""}</p>
                <p>Cast: {clickedMovie.cast ?? ""}</p>
            </div>
        </div>
    </div>);
}