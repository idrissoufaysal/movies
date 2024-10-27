import axios from "axios"
import { apiUrl } from "./constants"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMovies = async ({year,search,genre,page}:{year?:string,search?:string,genre?:string,page?:number}) => {
    try {
        const res = await axios.get(`${apiUrl}&s=${search || 'superman'}&y=${year || ''}&page=${page || 1}`)
        console.log(res.data);
        return res.data
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
