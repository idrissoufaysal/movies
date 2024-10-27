import axios from "axios"
import { apiUrl } from "./constants"

export const getMovies = async () => {
    try {
        const res = await axios.get(`${apiUrl}&s=thor`)
        console.log(res.data);
        return res.data.Search
    } catch (error) {
        console.log(error);
    }
}

export const getSingleMovie=async (id:string)=>{
    try {
        const res = await axios.get(`${apiUrl}&s=thor&i=${id}`)
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}
