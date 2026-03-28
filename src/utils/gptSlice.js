import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTsearch: false,
    selectedLanguage: "en",
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGPTsearchView: (state) => {
      state.showGPTsearch = !state.showGPTsearch;
    },
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGPTsearchView, changeLanguage, addGptMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
