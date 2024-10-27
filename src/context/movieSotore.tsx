import { getMovies } from "@/lib/actions";
import { Movie } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";

type MovieContextType = {
    search: string;
    setSearch: (search: string) => void;
    genre: string;
    setGenre: (genre: string) => void;
    year: string;
    setYear: (year: string) => void;
    data: Movie[];
    setData: (data: Movie[]) => void;
    page :number,
    loading:boolean
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieFilter = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [movie, setMovie] = useState<Movie[]>([]);
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(false)
    
    
        const { data, isError, isPending, error } = useQuery({
            queryKey: ['movies', genre, year, search, page],  // Clé unique pour la requête
            queryFn: () => getMovies({page:page,year:year,search:search,genre}),      // Fonction de récupération des films
            //onSuccess: (res:Movie[]) => setData(res),  // Mettez à jour l'état global avec les données
        });
        if(isPending) setLoading(true)
        
       useEffect(()=>{
           if(isPending) setLoading(true)
            setMovie(data)
       },[data, isPending])


    return (
        <MovieContext.Provider value={{ search, setSearch, genre, setGenre, year, setYear, movie, set,page,loading }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useFilters = () => {
    const context = useContext(MovieContext);
    if (context === undefined) {
        throw new Error('useFilters must be used within a MovieFilter Provider');
    }
    return context;
};
