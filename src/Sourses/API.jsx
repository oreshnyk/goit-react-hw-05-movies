import axios from 'axios';

const API_KEY = '63f06e1fd7aabd111b42f36b091e061a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week',
  searchMovie: '/search/movie',
  details: '/movie',
};

export const getPopularMovie = async () => {
  const response = await axios.get(`${END_POINTS.trending}?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchMovie = async query => {
  const response = await axios.get(
    `${END_POINTS.searchMovie}?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};

export const getDetails = async id => {
  const response = await axios.get(
    `${END_POINTS.details}/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getCredits = async id => {
  const response = await axios.get(
    `${END_POINTS.details}/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getReviews = async id => {
  const response = await axios.get(
    `${END_POINTS.details}/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
