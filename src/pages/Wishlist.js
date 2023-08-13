import { useDataContext } from "../context/dataContext"
import { Card } from "../component/card";

export function Wishlist(){
    const { wishlist } = useDataContext();
    return(<div className="main-page">
        <h1 className="wishlist-title">Wishlist</h1>
        <div className="movies-container">
            {wishlist.map((movie,index)=><Card props={movie} key={index}/>)}
        </div>
    </div>)
}