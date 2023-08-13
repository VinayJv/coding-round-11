import { useDataContext } from "../context/dataContext";
import { useNavigate } from "react-router";

export function Card({props}){
    const { wishlist, setWishlist, data } = useDataContext();
    const isPresentInWishlist = wishlist.findIndex((movie)=>movie.title === props.title);
    const navigate = useNavigate();

    const addToWishlist = (event) => {
        const clickedMovie = data.find((movie)=>movie.title === event.target.value)
        setWishlist([...wishlist, clickedMovie]);
        event.stopPropagation()
    }
    const removeFromWishlist = (event) => {
        const clickedMovie = data.find((movie)=>movie.title === event.target.value)
        setWishlist(wishlist.filter((movie)=>movie.title !== clickedMovie.title));
        event.stopPropagation()
    }
    return(<div className="card" onClick={()=>navigate(`/${props.title}`)}>
        <img src={props.imageURL} className="card-img"></img>
            <h2 className="card-title">{props.title}</h2>
            <p className="summary">{props.summary}</p>
            <button className="card-btn" onClick={isPresentInWishlist === -1 ? addToWishlist : removeFromWishlist} value={props.title}>{isPresentInWishlist === -1 ? "Wishlist" : "Remove"}</button>
    </div>)
}