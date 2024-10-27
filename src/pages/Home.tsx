import Loading from '@/components/shared/Loading';
import MovieCard from '@/components/shared/movieCard';
import { Movie } from '@/lib/types';
import Main from './mainPage';
import { useMoviesFilters } from '@/context/movieSotore';

export default function Home() {

    const { movies, loading } = useMoviesFilters()

    return (
        <Main>
            {
                loading ? (<div className="w-full flex justify-center items-center h-full mt-40 ">
                    <Loading />
                </div>) : (
                    <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 p-10 mt-20 gap-10 mx-auto'>
                        {movies.length > 0 ? movies.map((v: Movie) => (
                            <MovieCard props={v} key={v.imdbID} />
                        )) : <div className='text-2xl'> no result researh !!!</div>}
                    </div>)
            }
        </Main>
    )
}
