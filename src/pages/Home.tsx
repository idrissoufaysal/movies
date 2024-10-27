import Loading from '@/components/shared/Loading';
import MovieCard from '@/components/shared/movieCard';
import { Movie } from '@/lib/types';
import Main from './mainPage';
import { useMoviesFilters } from '@/context/movieSotore';

export default function Home() {
    //const [movies, setMovies] = useState<Movie[]>([])

    // const { isPending, isError, data, error } = useQuery({
    //     queryKey: ['movies'],
    //     queryFn: getMovies,

  // })

const {movies,loading}=useMoviesFilters()

    return (
        <Main>
            {
                loading ? (<div className="w-full flex justify-center items-center h-full mt-60 ">
                    <Loading />
                </div>) : (
                    <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 p-10 mt-5 gap-10'>
                        {movies && movies.map((v: Movie) => (
                            <MovieCard props={v} key={v.imdbID} />
                        ))}
                    </div>)
            }
        </Main>
    )
}
