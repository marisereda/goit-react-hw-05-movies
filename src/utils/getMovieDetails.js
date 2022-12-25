import axios from 'axios';

const START_POINT = 'https://api.themoviedb.org/3/movie/';
const KEY = '4078fca0c4fe3db38be6de95030c2ed1';
// const PAGE_SIZE = 12;

export async function getMovieDetails(id, signal) {
  let params = {
    api_key: KEY,
  };

  const url = START_POINT + id.toString();
  try {
    const response = await axios.get(url, { params, signal });
    if (!response) {
      throw Error(
        'We are sorry! There is no detailed information about the movie'
      );
    }
    return response.data;
  } catch (error) {
    if (error.name === 'CanceledError') {
      return null;
    }
    if (error.response || error.request) {
      throw Error('There is no server response. Try later again!');
    } else {
      throw error;
    }
  }
}
