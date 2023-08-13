import { createContext,useContext,useState, useEffect } from "react"; 
import { movies } from "../db/data";

const dataContext = createContext(null);

export function DataWrapper({children}){
    const [data, setData] = useState(movies);
    const [input,setInput] = useState("");
    const [wishlist, setWishlist] = useState([]);

    useEffect(()=>{
        localStorage.setItem("Movies", JSON.stringify(movies));
    },[data]);

    return(<dataContext.Provider value={{data,setData,input,setInput,wishlist,setWishlist}}>{children}</dataContext.Provider>)
}

export const useDataContext = () => useContext(dataContext);