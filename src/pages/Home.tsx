import Loading from '@/components/shared/Loading';
import MovieCard from '@/components/shared/movieCard';
import { Movie } from '@/lib/types';
import Main from './mainPage';
import { useMoviesFilters } from '@/context/movieSotore';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { selectMovie, setMovies } from '@/store/moviesSlice';

export default function Home() {
    const dispatch = useDispatch();
    const moviesList = useSelector((state: RootState) => state.movies.list);
    const { movies, loading } = useMoviesFilters()

    useEffect(() => {
        dispatch(setMovies(movies));
    }, [dispatch, movies])

    return (
        <Main>
            {
                loading ? (<div className="w-full flex justify-center items-center h-full mt-40 ">
                    <Loading />
                </div>) : (
                    <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 p-10 mt-20 gap-10 mx-auto' >
                        {moviesList.length > 0 ? moviesList.map((v: Movie) => (
                            <div key={v.imdbID} onClick={() => dispatch(selectMovie(v))}>
                                <MovieCard props={v} />
                            </div>
                        )) : <div className='text-2xl'> no result researh !!!</div>}
                    </div>)
            }
        </Main>
    )
}
