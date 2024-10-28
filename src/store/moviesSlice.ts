import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '@/lib/types';

interface MoviesState {
  list: Movie[];
  selectedMovie: Movie | null;
}

const initialState: MoviesState = {
  list: [],
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.list = action.payload;
    },
    selectMovie(state, action: PayloadAction<Movie>) {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie(state) {
      state.selectedMovie = null;
    },
  },
});

export const { setMovies, selectMovie, clearSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
