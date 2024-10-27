import Loading from '@/components/shared/Loading';
import MovieCard from '@/components/shared/movieCard';
import { getMovies } from '@/lib/actions';
import { Movie } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import Main from './mainPage';

export default function Home() {
    //const [movies, setMovies] = useState<Movie[]>([])

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movies'],
        queryFn: getMovies,
    })

    
    if (isPending) {
        return (<div className="w-full flex justify-center items-center h-full mt-60 bg-bg_color">
            <Loading />
        </div>)
    }

    return (
        <Main>
            <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 p-10 mt-5 gap-10'>
                {data && data.map((v: Movie) => (
                    <MovieCard props={v} key={v.imdbID} />
                ))}
            </div>
        </Main>
    )
}
