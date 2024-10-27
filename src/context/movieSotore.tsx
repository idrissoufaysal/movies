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
    loading:boolean
    movies: Movie[];
    page :number
    setPage:(page:number)=>void
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieFilter = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [movies, setMovies] = useState<Movie[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(false)

    const { data, isPending } = useQuery({
        queryKey: ['movies', genre, year, search, page],  // Clé unique pour la requête
        queryFn: () => getMovies({search:search,page:page,year:year}),  
    });

    useEffect(()=>{
          setMovies(data)
          setLoading(isPending)
          console.log(data);
    },[data, genre, isPending, page, search, year])

    return (
        <MovieContext.Provider value={{ search, setSearch, genre, setGenre, year, setYear, movies,page,setPage,loading }}>
            {children}
        </MovieContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMoviesFilters = () => {
    const context = useContext(MovieContext);
    if (context === undefined) {
        throw new Error('useFilters must be used within a MovieFilter Provider');
    }
    return context;
};
