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
    setPage:(page:number)=>void,
    totalResults:number
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieFilter = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [year, setYear] = useState<string>('');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(false)
    const [totalResults, setTotalResults] = useState(0); // Nouveau état pour le total


    const { data, isPending } = useQuery({
        queryKey: ['movies', genre, year, search, page],  // Clé unique pour la requête
        queryFn: () => getMovies({search:search,page:page,year:year}),  
    });
    const randomizeArray = (arr: Movie[]) => {
        return [...arr].sort(() => Math.random() - 0.5);
      };
      const randomizedMovies = data ? randomizeArray(data.Search) : [];
      
    useEffect(()=>{
        if (data) {
            setMovies(data.Search || []); // Utilise `Search` pour les films
            setTotalResults(parseInt(data.totalResults) || 0); // Stocke `totalResults` pour la pagination
          }
          setLoading(isPending)
          console.log(data);
    },[data, genre, isPending, page, search, year])

    return (
        <MovieContext.Provider value={{ search, setSearch, genre, setGenre, year, setYear, movies:randomizedMovies,page,setPage,loading,totalResults }}>
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
