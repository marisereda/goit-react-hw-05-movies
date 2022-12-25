import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/trending/movie/day';
const KEY = '4078fca0c4fe3db38be6de95030c2ed1';
// const PAGE_SIZE = 12;

export async function getTrendingMovies({ signal, page = 1 }) {
  let params = {
    api_key: KEY,
    page: page,
  };

  try {
    const response = await axios.get(URL, { params, signal });
    if (response.data.results.length === 0) {
      throw Error('There is no any match on your request!');
    }
    return response.data.results;
  } catch (error) {
    if (error.name === 'CanceledError') {
      return [];
    }
    if (error.response || error.request) {
      throw Error('There is no server response. Try later again!');
    } else {
      throw error;
    }
  }
}
