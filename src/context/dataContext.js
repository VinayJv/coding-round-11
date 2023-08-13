import { createContext,useContext,useState} from "react"; 
import { movies } from "../db/data";

const dataContext = createContext(null);

localStorage.setItem("Movies", JSON.stringify(movies));

export function DataWrapper({children}){
    const [data, setData] = useState(JSON.parse(localStorage.getItem("Movies")));
    const [input,setInput] = useState("");
    const [wishlist, setWishlist] = useState([]);

    return(<dataContext.Provider value={{data,setData,input,setInput,wishlist,setWishlist}}>{children}</dataContext.Provider>)
}

export const useDataContext = () => useContext(dataContext);